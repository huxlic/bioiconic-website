// api/quote.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import EmailTemplate from "../src/components/ui/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
	const d = req.body;
	
	const { data, error } = await resend.emails.send({
		from: 'Quote Requests <quote@bioiconic.com.ng>',
		to: 'biqy-email@example.com',
		replyTo: d.email,
		subject: `New Quote Request from ${d.name}`,
		react: EmailTemplate({...d})
	});
	
	if (error) {
		return res.status(400).json(error);
	}
	
	res.status(200).json(data);
}