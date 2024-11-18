import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// Initialize SendGrid with your API key
if (!process.env.SENDGRID_API_KEY) {
  console.error('SENDGRID_API_KEY is not set');
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(request: Request) {
  console.log('API route hit');

  try {
    // Log environment variables (remove in production)
    console.log('Environment check:', {
      hasApiKey: !!process.env.SENDGRID_API_KEY,
      hasSender: !!process.env.SENDGRID_VERIFIED_SENDER,
      sender: process.env.SENDGRID_VERIFIED_SENDER,
    });

    if (!process.env.SENDGRID_API_KEY || !process.env.SENDGRID_VERIFIED_SENDER) {
      console.error('Missing environment variables');
      return new NextResponse(JSON.stringify({ error: 'Server configuration error' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const body = await request.json();
    console.log('Received request body:', body);

    const { email } = body;

    if (!email) {
      return new NextResponse(JSON.stringify({ error: 'Email is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const keys = [
      'XHAIR-1234-5678-ABCD',
      'XHAIR-2345-6789-BCDE',
      'XHAIR-3456-7890-CDEF',
      'XHAIR-4567-8901-DEFG',
      'XHAIR-5678-9012-EFGH',
    ];

    const selectedKey = keys[Math.floor(Math.random() * keys.length)];

    const msg = {
      to: email,
      from: process.env.SENDGRID_VERIFIED_SENDER,
      subject: 'Your CHROSSX Activation Key',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Thank you for downloading CHROSSX!</h2>
          <p>Here's your activation key:</p>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <code style="font-size: 18px; color: #333;">${selectedKey}</code>
          </div>
          <p>To activate CHROSSX:</p>
          <ol>
            <li>Open the CHROSSX application</li>
            <li>Click on "Activate"</li>
            <li>Enter your activation key</li>
          </ol>
          <p>If you need any assistance, please don't hesitate to contact our support team.</p>
        </div>
      `,
    };

    console.log('Attempting to send email with config:', {
      to: email,
      from: process.env.SENDGRID_VERIFIED_SENDER,
      subject: msg.subject,
    });

    try {
      const result = await sgMail.send(msg);
      console.log('SendGrid response:', result);

      return new NextResponse(
        JSON.stringify({
          success: true,
          message: 'Email sent successfully',
        }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    } catch (sendError: any) {
      console.error('SendGrid API Error:', {
        message: sendError.message,
        response: sendError.response?.body,
      });

      return new NextResponse(
        JSON.stringify({
          error: 'Failed to send email',
          details: sendError.response?.body?.errors || sendError.message,
        }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
  } catch (error: any) {
    console.error('General error:', error);

    return new NextResponse(
      JSON.stringify({
        error: 'Invalid request',
        details: error.message,
      }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
