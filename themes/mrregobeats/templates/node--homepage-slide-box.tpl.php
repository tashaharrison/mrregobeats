<article<?php print $attributes; ?>>
  <?php if ($display_submitted): ?>
    <footer class="node__submitted">
      <?php print $user_picture; ?>
      <p class="submitted"><?php print $submitted; ?></p>
    </footer>
  <?php endif; ?>

  <div<?php print $content_attributes; ?>>
    <?php
      // We hide the comments and links now so that we can render them later.
      hide($content['comments']);
      hide($content['links']); ?>
	<a href="/user">
    <?php print render($content['field_hp_slide_image']); ?>
	</a>
  </div>

  <?php print render($content['links']); ?>
  <?php print render($content['comments']); ?>
</article>