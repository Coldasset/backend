export default ({ name, verificationCode }: { name: string; verificationCode: string; }) => ({

  subject: "Verify Your Email Address",
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Verify Your Email</title>
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
                color:#1F2A44;
              ">
                Verify your email address
              </h1>
            </td>
          </tr>

          <!-- Greeting -->
          <tr>
            <td style="padding-bottom:16px; font-size:16px; line-height:1.6;">
              Hi ${name},
            </td>
          </tr>

          <!-- Explanation -->
          <tr>
            <td style="font-size:16px; line-height:1.6; padding-bottom:20px;">
              To keep your Cold Asset account secure, please confirm your email address using the verification code below.
            </td>
          </tr>

          <!-- Code Box -->
          <tr>
            <td align="center" style="padding-bottom:16px;">
              <div style="
                display:inline-block;
                background-color:#E6EEF4;
                color:#2B8FD6;
                font-size:28px;
                font-weight:700;
                letter-spacing:4px;
                padding:14px 24px;
                border-radius:10px;
                font-family:'Courier New', Courier, monospace;
              ">
                ${verificationCode}
              </div>
            </td>
          </tr>

          <!-- Expiry -->
          <tr>
            <td style="text-align:center; font-size:14px; color:#5E6C84; padding-bottom:20px;">
              This code expires in <strong>10 minutes</strong>.
            </td>
          </tr>

          <!-- Security Note -->
          <tr>
            <td style="
              background-color:#E6EEF4;
              border-radius:10px;
              padding:16px;
              font-size:14px;
              line-height:1.6;
              color:#1F2A44;
            ">
              <strong>Didn’t request this?</strong><br/>
              If you didn’t initiate this request, you can safely ignore this email or contact our support team.
            </td>
          </tr>

        </table>

        <!-- Footer -->
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px; margin-top:24px; text-align:center;">
          <tr>
            <td style="font-size:13px; color:#5E6C84; padding-bottom:8px;">
              <strong style="color:#2B8FD6;">Cold Asset</strong> — your secure crypto wallet
            </td>
          </tr>

          <tr>
            <td style="font-size:12px; color:#5E6C84; line-height:1.6; padding-bottom:12px;">
              Need help? Contact
              <a href="mailto:support@cold-asset.com" style="color:#2B8FD6; text-decoration:none;">
                support@cold-asset.com
              </a>
            </td>
          </tr>

          <tr>
            <td style="font-size:11px; color:#9AA4B2;">
              © ${new Date().getFullYear()} Cold Asset. All rights reserved.
            </td>
          </tr>
        </table>

      </td>
    </tr>
  </table>

</body>
</html>`,
});
