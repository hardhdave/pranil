import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Company-specific email routing
const companyEmailConfig: Record<string, { to: string; name: string; phone: string }> = {
  "pranil-education": {
    to: "inquiry.pranileducation@gmail.com, pranileducation76@gmail.com",
    name: "PRANIL Education Services",
    phone: "+91 73839 97825 / +91 88499 48279",
  },
  "pranil-travel": {
    to: "praniltoursandtravel@gmail.com, pranileducation76@gmail.com",
    name: "PRANIL Tours & Travels",
    phone: "+91 88499 48279",
  },
  "pranil-recruitment": {
    to: "hr@pranilrecruitment.com, pranileducation76@gmail.com",
    name: "PRANIL Recruitment",
    phone: "+91 87800 48502",
  },
  "karv": {
    to: "admin.karv@gmail.com, pranileducation76@gmail.com",
    name: "KARV Digital Media",
    phone: "+91 63538 18174",
  },
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message, company } = body;

    // Basic validation
    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Get company-specific config or default to education
    const config = companyEmailConfig[company] || companyEmailConfig["pranil-education"];

    // Configure SMTP Transport using your credentials
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "pranileducation76@gmail.com",
        pass: "huwt hzhs niqv dtto", // App password
      },
    });

    // 1. Email to the business team (Lead Notification)
    const ownerMailOptions = {
      from: `"${config.name} Inquiry" <pranileducation76@gmail.com>`,
      to: config.to,
      subject: `New Lead: ${service} Inquiry from ${name} — ${config.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #1a1a6e; border-bottom: 2px solid #1a1a6e; padding-bottom: 10px; margin-top: 0;">New Inquiry — ${config.name}</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee; width: 120px;">Name:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Email:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Phone:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="tel:${phone}">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Service:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; color: #d42a36;">${service}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #1a1a6e; border-radius: 4px;">
            <h4 style="margin: 0 0 10px 0; color: #1a1a6e;">Message:</h4>
            <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="margin-top: 25px; font-size: 11px; color: #777; border-top: 1px solid #eee; padding-top: 15px; margin-bottom: 0;">
            This inquiry was submitted from the ${config.name} contact form on the corporate website.
          </p>
        </div>
      `,
    };

    // 2. Email to the customer (Auto-Response Confirmation)
    const userMailOptions = {
      from: `"${config.name}" <pranileducation76@gmail.com>`,
      to: email,
      subject: `We Received Your Inquiry: ${service} — ${config.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 25px; color: #333; max-width: 600px; border: 1px solid #eee; border-radius: 8px; background-color: #ffffff;">
          <h2 style="color: #1a1a6e; margin-top: 0; margin-bottom: 20px;">Dear ${name},</h2>
          <p style="line-height: 1.6; font-size: 15px;">
            Thank you for reaching out to <strong>${config.name}</strong>. We have successfully received your inquiry regarding <strong>${service}</strong>.
          </p>
          <p style="line-height: 1.6; font-size: 15px;">
            Our team is currently reviewing your details. We will contact you via phone or email within the next <strong>24 working hours</strong> to guide you through your requirements.
          </p>
          <div style="margin: 25px 0; padding: 15px; border-top: 1px dashed #ddd; border-bottom: 1px dashed #ddd; background-color: #fafafa;">
            <h4 style="margin: 0 0 10px 0; color: #1a1a6e; font-size: 14px;">Summary of your request:</h4>
            <ul style="margin: 0; padding-left: 20px; font-size: 14px; line-height: 1.6;">
              <li><strong>Service Requested:</strong> ${service}</li>
              <li><strong>Status:</strong> Processing / Under Review</li>
            </ul>
          </div>
          <p style="line-height: 1.6; font-size: 15px;">
            If you have any urgent queries, feel free to call our direct helpline at <a href="tel:${config.phone.replace(/[^+\d]/g, "").slice(0, 13)}" style="color: #d42a36; font-weight: bold; text-decoration: none;">${config.phone}</a> or chat with us on WhatsApp.
          </p>
          <br/>
          <p style="margin: 0; font-size: 14px; font-weight: bold; color: #1a1a6e;">Best Regards,</p>
          <p style="margin: 5px 0 0 0; font-size: 14px; font-weight: bold; color: #333;">${config.name}</p>
          <p style="margin: 2px 0 0 0; font-size: 12px; color: #777;">PRANIL Group of Companies — Building Trust. Creating Value. Delivering Excellence.</p>
        </div>
      `,
    };

    // Send both emails concurrently
    await Promise.all([
      transporter.sendMail(ownerMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("SMTP Error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
