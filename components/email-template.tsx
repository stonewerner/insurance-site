import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div
    style={{
      backgroundColor: "#ffffff",
      fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
      maxWidth: "580px",
      margin: "0 auto",
      padding: "20px 0 48px",
    }}
  >
    <div style={{ textAlign: "center", marginBottom: "24px" }}>
      <img
        src={`${process.env.NEXT_PUBLIC_APP_URL}/lange-logo.png`}
        width="350"
        height="63"
        alt="Lange & Associates"
        style={{ margin: "0 auto" }}
      />
    </div>

    <div
      style={{
        padding: "24px",
        backgroundColor: "#f9fafb",
        borderRadius: "8px",
      }}
    >
      <h1
        style={{
          fontSize: "24px",
          fontWeight: "600",
          lineHeight: "1.3",
          margin: "16px 0",
          color: "#111827",
        }}
      >
        Welcome, {firstName}!
      </h1>

      <p
        style={{
          fontSize: "16px",
          lineHeight: "1.5",
          margin: "16px 0",
          color: "#374151",
        }}
      >
        Thank you for your interest in Lange & Associates. We have been
        &ldquo;The Contractors&apos; Insurance Specialist&rdquo; for over 35
        years.
      </p>

      <p
        style={{
          fontSize: "16px",
          lineHeight: "1.5",
          margin: "16px 0",
          color: "#374151",
        }}
      >
        Our team will review your inquiry and get back to you shortly. In the
        meantime, if you need immediate assistance, please don&apos;t hesitate
        to contact us by phone:
      </p>

      <p
        style={{
          fontSize: "14px",
          lineHeight: "1.5",
          margin: "8px 0",
          color: "#4b5563",
        }}
      >
        Phone: (800) 288-9555
      </p>
      <p
        style={{
          fontSize: "14px",
          lineHeight: "1.5",
          margin: "8px 0",
          color: "#4b5563",
        }}
      >
        Jonathan Lange, CIC, CRM
      </p>
      <p
        style={{
          fontSize: "14px",
          lineHeight: "1.5",
          margin: "8px 0",
          color: "#4b5563",
        }}
      >
        CA License# 0760031
      </p>
    </div>

    <div
      style={{
        textAlign: "center",
        marginTop: "32px",
      }}
    >
      <p
        style={{
          fontSize: "12px",
          lineHeight: "1.5",
          margin: "8px 0",
          color: "#6b7280",
        }}
      >
        © Lange & Associates. All rights reserved.
      </p>
      <p
        style={{
          fontSize: "12px",
          lineHeight: "1.5",
          margin: "4px 0",
          color: "#6b7280",
        }}
      >
        CA Office: 22300 Cohasset St. Canoga Park, CA 91303
      </p>
      <p
        style={{
          fontSize: "12px",
          lineHeight: "1.5",
          margin: "4px 0",
          color: "#6b7280",
        }}
      >
        NY Office: 604 Monterey Ave. Pelham Manor, NY 10803
      </p>
    </div>
  </div>
);
