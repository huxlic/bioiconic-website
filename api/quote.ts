// api/quote.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
	const data = req.body;
	
	const { error } = await resend.emails.send({
		from: 'Quote Requests <quote@bioiconic.com.ng>',
		to: 'biqy-email@example.com',
		replyTo: data.email,
		subject: `New Quote Request from ${data.name}`,
		text: `Name: ${data.name}\nPhone: ${data.phone}`,
	});
	
	if (error) return res.status(500).json({ error });
	return res.status(200).json({ success: true });
}