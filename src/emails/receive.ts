export default ({ name, coin, amount, transactionHash, date }: ReceiveEmailParams) => ({

  subject: `${coin.toUpperCase()} Received Successfully`,
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Crypto Received</title>
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
                color:#10B981;
              ">
                You’ve received ${coin.toUpperCase()}
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
              Good news! A ${coin.toUpperCase()} transfer has been successfully received in your Cold Asset wallet.
            </td>
          </tr>

          <!-- Details -->
          <tr>
            <td style="
              background-color:#ECFDF5;
              border-radius:10px;
              padding:16px;
              font-size:14px;
              line-height:1.6;
              color:#1F2A44;
            ">
              <p style="margin:6px 0;"><strong>Asset:</strong> ${coin.toUpperCase()}</p>
              <p style="margin:6px 0;"><strong>Amount:</strong> ${amount}</p>
              <p style="margin:6px 0;"><strong>Transaction Hash:</strong><br/>${transactionHash}</p>
              <p style="margin:6px 0;"><strong>Date:</strong> ${date}</p>
            </td>
          </tr>

          <!-- Info -->
          <tr>
            <td style="padding-top:16px; font-size:14px; line-height:1.6;">
              You can view this transaction anytime from your dashboard. If you don’t recognize this activity, please contact our support team immediately.
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
