export default ({ name }: { name: string }) => ({
  
  subject: "Your Cold Asset PIN Has Been Changed",
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>PIN Changed</title>
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
                PIN Change Confirmation
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
              This is a confirmation that your Cold Asset account PIN was recently changed.
            </td>
          </tr>

          <tr>
            <td style="font-size:16px; line-height:1.6; padding-bottom:20px;">
              If you authorized this change, no further action is required.
            </td>
          </tr>

          <!-- Alert Box -->
          <tr>
            <td style="
              background-color:#FDECEC;
              border-radius:10px;
              padding:16px;
              font-size:14px;
              line-height:1.6;
              color:#1F2A44;
            ">
              <strong>Didn’t make this change?</strong><br/>
              If you did not authorize this PIN update, please contact our support team immediately to secure your account.
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="padding-top:20px;">
              <a
                href="mailto:support@texelchain.org"
                style="
                  display:inline-block;
                  background-color:#2B8FD6;
                  color:#FFFFFF;
                  text-decoration:none;
                  padding:12px 24px;
                  border-radius:999px;
                  font-size:14px;
                  font-weight:600;
                "
              >
                Contact Support
              </a>
            </td>
          </tr>

        </table>

        <!-- Footer -->
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px; margin-top:24px; text-align:center;">
          <tr>
            <td style="font-size:12px; color:#5E6C84;">
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
