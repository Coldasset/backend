export default ({ name, ip, userAgent, location, date }: { name: string; ip: string; userAgent: string; location: { city: string; region: string; country: string }; date: string }) => ({
  subject: "New Login to Your Cold Asset Account",
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Login Alert</title>
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
                New Login Detected
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
            <td style="font-size:16px; line-height:1.6; padding-bottom:20px;">
              We detected a new login to your Cold Asset account. Below are the details for this activity:
            </td>
          </tr>

          <!-- Info Box -->
          <tr>
            <td style="
              background-color:#E6EEF4;
              border-radius:10px;
              padding:16px;
              font-size:14px;
              line-height:1.6;
              color:#1F2A44;
            ">
              <p style="margin:6px 0;"><strong>IP Address:</strong> ${ip}</p>
              <p style="margin:6px 0;"><strong>Location:</strong> ${location.city}, ${location.region}, ${location.country}</p>
              <p style="margin:6px 0;"><strong>Device:</strong><br/>${userAgent}</p>
              <p style="margin:6px 0;"><strong>Date & Time:</strong> ${date}</p>
            </td>
          </tr>

          <!-- Action Guidance -->
          <tr>
            <td style="padding-top:16px; font-size:14px; line-height:1.6;">
              If this was you, no further action is required.
              <br/><br/>
              <strong>If you do not recognize this activity,</strong> please secure your account immediately by resetting your password and contacting our support team.
            </td>
          </tr>

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
});
