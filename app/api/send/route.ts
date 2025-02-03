import { EmailTemplate } from "../../../components/email-template";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Get the email from the form data
    const { email } = await request.json();

    const { data, error } = await resend.emails.send({
      from: "Stone Werner Development <test-no-reply@mail.stonewerner.com>", // Update this with your verified domain
      to: [email], // Send to the email address from the form
      subject: "Inquiry Submitted | Lange Insurance",
      react: EmailTemplate({ firstName: "there" }), // You might want to update your template
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
