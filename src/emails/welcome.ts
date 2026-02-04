export default ({ name }: { name: string }) => ({
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Welcome to Cold Asset</title>
</head>
<body style="margin:0; padding:0; background-color:#F7FBFD; font-family:'Raleway', Arial, sans-serif; color:#1F2A44;">

  <!-- Outer Wrapper -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#F7FBFD; padding:24px 0;">
    <tr>
      <td align="center">

        <!-- Email Card -->
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px; background-color:#FFFFFF; border-radius:14px; padding:32px;">
          
          <!-- Header -->
          <tr>
            <td style="padding-bottom:24px;">
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
                font-size:24px;
                font-weight:600;
                color:#1F2A44;
              ">
                Welcome to Cold Asset 👋
              </h1>
            </td>
          </tr>

          <!-- Greeting -->
          <tr>
            <td style="padding-bottom:16px; font-size:16px; line-height:1.6;">
              Hi ${name},
            </td>
          </tr>

          <!-- Intro -->
          <tr>
            <td style="padding-bottom:20px; font-size:16px; line-height:1.6; color:#1F2A44;">
              We’re excited to have you onboard. Cold Asset is your secure and seamless gateway to managing cryptocurrency — built for simplicity, speed, and peace of mind.
            </td>
          </tr>

          <!-- Value Props -->
          <tr>
            <td style="padding-bottom:20px;">
              <p style="margin:0 0 12px 0; font-weight:600; color:#1F2A44;">
                With Cold Asset, you can:
              </p>
              <ul style="padding-left:18px; margin:0; color:#1F2A44; line-height:1.7;">
                <li>Securely store your digital assets</li>
                <li>Send and receive crypto with ease</li>
                <li>Enjoy a safe and reliable payment system</li>
                <li>Be part of a fast-growing crypto community</li>
              </ul>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="padding-top:8px;">
              <a
                href="#"
                style="
                  display:inline-block;
                  background-color:#2B8FD6;
                  color:#FFFFFF;
                  text-decoration:none;
                  padding:12px 24px;
                  border-radius:999px;
                  font-size:15px;
                  font-weight:600;
                "
              >
                Get Started
              </a>
            </td>
          </tr>

        </table>

        <!-- Footer -->
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px; margin-top:24px; text-align:center;">
          <tr>
            <td style="font-size:13px; color:#5E6C84; padding-bottom:8px;">
              <strong style="color:#2B8FD6;">Cold Asset</strong> at the touch of a button.
            </td>
          </tr>

          <tr>
            <td style="font-size:13px; padding-bottom:12px;">
              <a href="https://play.google.com" style="color:#2B8FD6; text-decoration:none;">Google Play</a>
              &nbsp;|&nbsp;
              <a href="https://apps.apple.com" style="color:#2B8FD6; text-decoration:none;">App Store</a>
            </td>
          </tr>

          <tr>
            <td style="font-size:12px; color:#5E6C84; line-height:1.6; padding-bottom:12px;">
              Questions? Contact us at
              <a href="mailto:support@cold-asset.com" style="color:#2B8FD6; text-decoration:none;">
                support@cold-asset.com
              </a>
              <br/>
              Follow us on Twitter, Facebook, and Instagram.
            </td>
          </tr>

          <tr>
            <td style="font-size:12px; padding-bottom:16px;">
              <a href="#" style="color:#E5483B; text-decoration:none;">
                Unsubscribe
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