export default ({ name, status, reason }: KycEmailParams) => {
  const isApproved = status === "accepted";

  return {
    subject: isApproved
      ? "Your Cold Asset KYC Has Been Approved"
      : "Action Required: KYC Verification Unsuccessful",
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>KYC Status Update</title>
</head>
<body style="margin:0; padding:0; background-color:#F7FBFD; font-family:'Raleway', Arial, sans-serif; color:#1F2A44;">

  <!-- Wrapper -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#F7FBFD; padding:24px 0;">
    <tr>
      <td align="center">

        <!-- Card -->
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px; background-color:#FFFFFF; border-radius:14px; padding:32px;">

          <!-- Header -->
          <tr>
            <td style="padding-bottom:20px;">
              <img
                src="https://res.cloudinary.com/dpmx02shl/image/upload/v1768135948/logo1_mobrjd.png"
                alt="Cold Asset Logo"
                width="36"
                style="display:block;"
              />
            </td>
          </tr>

          <!-- Title -->
          <tr>
            <td style="padding-bottom:12px;">
              <h1 style="
                margin:0;
                font-family:'Montserrat', Arial, sans-serif;
                font-size:22px;
                font-weight:600;
                color:${isApproved ? "#10B981" : "#E5483B"};
              ">
                KYC Verification ${isApproved ? "Approved" : "Unsuccessful"}
              </h1>
            </td>
          </tr>

          <!-- Greeting -->
          <tr>
            <td style="padding-bottom:16px; font-size:16px; line-height:1.6;">
              Hi ${name},
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="font-size:16px; line-height:1.6; padding-bottom:16px;">
              ${
                isApproved
                  ? `We’re pleased to inform you that your identity verification has been successfully completed. Your Cold Asset account is now fully verified, and you have access to all supported features.`
                  : `We were unable to complete your identity verification based on the documents submitted. As a result, your KYC verification was not successful at this time.`
              }
            </td>
          </tr>

          ${
            !isApproved && reason
              ? `
          <!-- Reason Box -->
          <tr>
            <td style="
              background-color:#FDECEC;
              border-radius:10px;
              padding:16px;
              font-size:14px;
              line-height:1.6;
              color:#1F2A44;
            ">
              <strong>Reason provided:</strong><br/>
              ${reason}
            </td>
          </tr>
          `
              : ""
          }

          ${
            !isApproved
              ? `
          <!-- Next Steps -->
          <tr>
            <td style="padding-top:16px; font-size:14px; line-height:1.6;">
              Please review the feedback above and resubmit your documents for verification. If you require assistance, our support team is available to help guide you through the process.
            </td>
          </tr>
          `
              : ""
          }

        </table>

        <!-- Footer -->
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px; margin-top:24px; text-align:center;">
          <tr>
            <td style="font-size:12px; color:#5E6C84;">
              Need help? Contact
              <a href="mailto:support@cold-asset.com" style="color:#2B8FD6; text-decoration:none;">
                support@cold-asset.com
              </a>
            </td>
          </tr>
          <tr>
            <td style="font-size:11px; color:#9AA4B2; padding-top:8px;">
              © ${new Date().getFullYear()} <strong style="color:#2B8FD6;">Cold Asset</strong>. All rights reserved.
            </td>
          </tr>
        </table>

      </td>
    </tr>
  </table>

</body>
</html>`,
  };
};
