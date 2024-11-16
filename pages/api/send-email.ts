import type { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email } = req.body;

    // List of activation keys
    const keys = [
      'XHAIR-1234-5678-ABCD',
      'XHAIR-2345-6789-BCDE',
      'XHAIR-3456-7890-CDEF',
      'XHAIR-4567-8901-DEFG',
      'XHAIR-5678-9012-EFGH',
      'XHAIR-6789-0123-FGHI',
      'XHAIR-7890-1234-GHIJ',
      'XHAIR-8901-2345-HIJK',
      'XHAIR-9012-3456-IJKL',
      'XHAIR-0123-4567-JKLM',
    ];

    // Randomly select a key
    const selectedKey = keys[Math.floor(Math.random() * keys.length)];

    const msg = {
      to: email,
      from: 'your-email@example.com', // Ensure this email is verified with SendGrid
      subject: 'Your CHROSSX Activation Key',
      text: `Thank you for downloading CHROSSX. Your activation key is: ${selectedKey}`,
    };

    try {
      console.log('Sending email to:', email);
      await sgMail.send(msg);
      console.log('Email sent successfully');
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
