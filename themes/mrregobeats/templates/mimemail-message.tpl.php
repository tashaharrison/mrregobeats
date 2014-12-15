<?php

/**
 * @file
 * Default theme implementation to format an HTML mail.
 *
 * Copy this file in your default theme folder to create a custom themed mail.
 * Rename it to mimemail-message--[module]--[key].tpl.php to override it for a
 * specific mail.
 *
 * Available variables:
 * - $recipient: The recipient of the message
 * - $subject: The message subject
 * - $body: The message body
 * - $css: Internal style sheets
 * - $module: The sending module
 * - $key: The message identifier
 *
 * @see template_preprocess_mimemail_message()
 */
?>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <?php if ($css): ?>
    <style type="text/css">
      <!--
      <?php print $css ?>
      -->
    </style>
    <?php endif; ?>
  </head>
  <body id="mimemail-body" <?php if ($module && $key): print 'class="'. $module .'-'. $key .'"'; endif; ?>>
    <div id="center">
		<table border="0" cellpadding="0" cellspacing="0" class="container nav" style="border-spacing: 0; border-collapse: separate; vertical-align: top; text-align: inherit; width: 593px; max-width:100%; margin: 0 auto; padding: 0; border: none; background: #2002FF; color: #FFF;">
			<tr style="vertical-align: top; text-align: left; padding: 0;">
				<td valign="top" style="word-break: break-word; -webkit-hyphens: auto; -moz-hyphens: auto; hyphens: auto; border-collapse: collapse !important; vertical-align: top; text-align: center; margin: 0; padding: 10px;">
					<a href="http://mrb.dev.o4820488215.v242a.ams.host8.biz/"><img src="http://mrb.dev.o4820488215.v242a.ams.host8.biz/profiles/mrregobeats/themes/mrregobeats/logo.png" alt="Mr Rego Beats Logo"></a>
				</td>
			</tr>
			<tr style="vertical-align: top; text-align: left; padding: 0;">
				<td valign="top" style="word-break: break-word; -webkit-hyphens: auto; -moz-hyphens: auto; hyphens: auto; border-collapse: collapse !important; vertical-align: top; text-align: left; margin: 0; padding: 10px; color: #FFF; font-family: Courier New, MS Serif; ">
					<?php print $body ?>
				</td>
			</tr>
			<tr style="vertical-align: top; text-align: left; padding: 0;">
				<td valign="top" style="word-break: break-word; -webkit-hyphens: auto; -moz-hyphens: auto; hyphens: auto; border-collapse: collapse !important; vertical-align: top; text-align: left; margin: 0; padding: 10px; color: #FFF; font-family: Courier New, MS Serif; ">
					<a href="https://www.facebook.com/mrregobeats"><img src="http://mrb.dev.o4820488215.v242a.ams.host8.biz/profiles/mrregobeats/themes/mrregobeats/images/facebook.png" alt="Facebook"></a>
					<a href="https://twitter.com/mrregobeats"><img src="http://mrb.dev.o4820488215.v242a.ams.host8.biz/profiles/mrregobeats/themes/mrregobeats/images/twitter.png" alt="Twitter"></a>
				</td>
			</tr>
		</table>
    </div>
  </body>
</html>
