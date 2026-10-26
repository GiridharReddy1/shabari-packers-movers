import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory rate limiting map (IP -> timestamps)
const rateLimitMap = new Map<string, number[]>();

const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const recent = timestamps.filter((time) => now - time < RATE_LIMIT_WINDOW_MS);

  if (recent.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  recent.push(now);
  rateLimitMap.set(ip, recent);
  return false;
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'anonymous';

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Too many requests. Please wait a minute before submitting again, or contact us directly on WhatsApp.',
        },
        { status: 429 }
      );
    }

    const body = await request.json();
    const {
      fullName,
      phoneNumber,
      email,
      movingFrom,
      movingTo,
      movingDate,
      moveType,
      additionalRequirements,
      honeypot,
    } = body;

    // Spam honeypot trap
    if (honeypot) {
      // Silently reject bot submissions
      return NextResponse.json({ success: true, message: 'Enquiry received.' });
    }

    // Required fields validation
    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid full name (minimum 2 characters).' },
        { status: 400 }
      );
    }

    // Phone validation for India
    const cleanPhone = String(phoneNumber || '').replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10 || cleanPhone.length > 13) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid 10-digit mobile phone number.' },
        { status: 400 }
      );
    }

    if (!movingFrom || typeof movingFrom !== 'string' || movingFrom.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: 'Please specify the pickup location or city.' },
        { status: 400 }
      );
    }

    if (!movingTo || typeof movingTo !== 'string' || movingTo.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: 'Please specify the destination location or city.' },
        { status: 400 }
      );
    }

    if (!movingDate) {
      return NextResponse.json(
        { success: false, error: 'Please select an estimated moving date.' },
        { status: 400 }
      );
    }

    if (!moveType) {
      return NextResponse.json(
        { success: false, error: 'Please select the type of relocation.' },
        { status: 400 }
      );
    }

    const enquiryRecord = {
      id: `ENQ-${Date.now()}`,
      timestamp: new Date().toISOString(),
      fullName: fullName.trim(),
      phoneNumber: cleanPhone,
      email: email ? String(email).trim() : null,
      movingFrom: movingFrom.trim(),
      movingTo: movingTo.trim(),
      movingDate,
      moveType,
      additionalRequirements: additionalRequirements ? String(additionalRequirements).trim() : '',
      clientIp: ip,
    };

    console.log('[SHABARI QUOTE ENQUIRY RECEIVED]:', JSON.stringify(enquiryRecord, null, 2));

    // Optional external integrations: Webhook or Resend
    const webhookUrl = process.env.NOTIFICATION_WEBHOOK_URL;
    let externalSent = false;

    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            text: `🚚 *New Relocation Enquiry - Shabari Packers and Movers*\n\n*Name:* ${enquiryRecord.fullName}\n*Phone:* ${enquiryRecord.phoneNumber}\n*Route:* ${enquiryRecord.movingFrom} ➔ ${enquiryRecord.movingTo}\n*Date:* ${enquiryRecord.movingDate}\n*Type:* ${enquiryRecord.moveType}\n*Notes:* ${enquiryRecord.additionalRequirements || 'None'}`,
          }),
        });
        externalSent = true;
      } catch (err) {
        console.error('Webhook notification delivery failed:', err);
      }
    }

    // Prefilled WhatsApp link so the customer can also push directly to Shabari's active line
    const waText = `Hello Shabari Packers and Movers! I just requested a quote on your website.%0A%0A*Name:* ${encodeURIComponent(enquiryRecord.fullName)}%0A*Phone:* ${enquiryRecord.phoneNumber}%0A*From:* ${encodeURIComponent(enquiryRecord.movingFrom)}%0A*To:* ${encodeURIComponent(enquiryRecord.movingTo)}%0A*Date:* ${enquiryRecord.movingDate}%0A*Type:* ${encodeURIComponent(enquiryRecord.moveType)}`;
    const directWhatsAppUrl = `https://wa.me/919848161321?text=${waText}`;

    return NextResponse.json({
      success: true,
      enquiryId: enquiryRecord.id,
      message: 'Your moving enquiry has been logged successfully. Our team will review your requirements and call you shortly.',
      externalNotified: externalSent,
      directWhatsAppUrl,
    });
  } catch (error) {
    console.error('Error processing quote request:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected error occurred while processing your request. Please call or WhatsApp us at +91 98481 61321.',
      },
      { status: 500 }
    );
  }
}
