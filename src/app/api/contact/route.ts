import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

export const runtime = "nodejs";

const schema = z.object({
  company: z.string().min(2),
  rif: z.string().min(3),
  email: z.string().email(),
  phone: z.string().min(7),
  socials: z.string().optional().default(""),
  project: z.string().min(10),
});

function mailHtml(data: z.infer<typeof schema>) {
  return `
  <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif; line-height:1.6">
    <h2 style="margin:0 0 8px">Nuevo contacto</h2>
    <p style="margin:0 0 16px;color:#555">Detalles enviados desde la web:</p>
    <table style="border-collapse:collapse;width:100%">
      <tr><td style="padding:8px;border-bottom:1px solid #eee"><b>Empresa/Firma</b></td><td style="padding:8px;border-bottom:1px solid #eee">${
        data.company
      }</td></tr>
      <tr><td style="padding:8px;border-bottom:1px solid #eee"><b>RIF</b></td><td style="padding:8px;border-bottom:1px solid #eee">${
        data.rif
      }</td></tr>
      <tr><td style="padding:8px;border-bottom:1px solid #eee"><b>Email</b></td><td style="padding:8px;border-bottom:1px solid #eee">${
        data.email
      }</td></tr>
      <tr><td style="padding:8px;border-bottom:1px solid #eee"><b>Celular</b></td><td style="padding:8px;border-bottom:1px solid #eee">${
        data.phone
      }</td></tr>
      <tr><td style="padding:8px;border-bottom:1px solid #eee"><b>Redes</b></td><td style="padding:8px;border-bottom:1px solid #eee">${
        data.socials || "-"
      }</td></tr>
    </table>
    <h3 style="margin:16px 0 8px">Proyecto</h3>
    <p style="white-space:pre-wrap;margin:0">${data.project}</p>
  </div>`;
}

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type") || "";
    let payload: Record<string, unknown>;

    if (contentType.includes("application/json")) {
      payload = await req.json();
    } else if (contentType.includes("multipart/form-data")) {
      const form = await req.formData();
      payload = Object.fromEntries(form.entries());
    } else {
      return NextResponse.json(
        { error: "Unsupported content-type" },
        { status: 415 }
      );
    }

    const parsed = schema.parse({
      company: String(payload.company || ""),
      rif: String(payload.rif || ""),
      email: String(payload.email || ""),
      phone: String(payload.phone || ""),
      socials: String(payload.socials || ""),
      project: String(payload.project || ""),
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER!,
        pass: process.env.GMAIL_PASS!,
      },
    });

    const subjectPrefix = process.env.CONTACT_SUBJECT_PREFIX || "[Contact]";
    await transporter.sendMail({
      from: `"Web Contact" <${process.env.GMAIL_USER!}>`,
      to: process.env.CONTACT_TO!,
      subject: `${subjectPrefix} ${parsed.company} (${parsed.email})`,
      html: mailHtml(parsed),
      text: `
Nuevo contacto

Empresa/Firma: ${parsed.company}
RIF: ${parsed.rif}
Email: ${parsed.email}
Celular: ${parsed.phone}
Redes: ${parsed.socials || "-"}

Proyecto:
${parsed.project}
      `.trim(),
      replyTo: parsed.email,
    });

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    console.error("CONTACT_ERROR", err);
    const msg =
      err && typeof err === "object" && "message" in err
        ? (err as { message?: string }).message || "Unknown error"
        : "Unknown error";
    return NextResponse.json({ ok: false, error: msg }, { status: 400 });
  }
}
