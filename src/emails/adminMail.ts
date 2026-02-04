export default ({ title, message, userName, action, timestamp, metadata }:
    { title: string; message: string; userName?: string; action?: string; timestamp?: string; metadata?: Record<string, string> }) => ({

        subject: `Admin Alert: ${title}`,
        html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Admin Notification</title>
</head>
<body style="margin:0; padding:0; background-color:#F7FBFD; font-family:'Raleway', Arial, sans-serif; color:#1F2A44;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#F7FBFD; padding:16px 0;">
    <tr>
      <td align="center">

        <!-- Card -->
        <table width="520" cellpadding="0" cellspacing="0" style="max-width:520px; background-color:#FFFFFF; border-radius:12px; padding:24px;">

          <!-- Title -->
          <tr>
            <td style="padding-bottom:8px;">
              <h2 style=" margin:0; font-size:18px; font-weight:600; font-family:'Montserrat', Arial, sans-serif; color:#1F2A44;">
                ${title}
              </h2>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="font-size:14px; line-height:1.6; padding-bottom:12px;">
              ${message}
            </td>
          </tr>

          <!-- Meta Info -->
          <tr>
            <td style=" background-color:#E6EEF4; border-radius:8px; padding:12px; font-size:13px; line-height:1.6;">
              ${userName ? `<p style="margin:4px 0;"><strong>User:</strong> ${userName}</p>` : ""}
              ${action ? `<p style="margin:4px 0;"><strong>Action:</strong> ${action}</p>` : ""}
              ${timestamp ? `<p style="margin:4px 0;"><strong>Time:</strong> ${timestamp}</p>` : ""}
              ${metadata
                ? Object.entries(metadata)
                    .map(
                        ([key, value]) =>
                            `<p style="margin:4px 0;"><strong>${key}:</strong> ${value}</p>`
                    )
                    .join("")
                : ""
            }
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>`,
    });
