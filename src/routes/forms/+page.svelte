<!-- This page is just pre-rendered hidden forms so that Netlify can detect them and create handlers for them. -->
<!-- This is necessary because we mount our pages then transition in the elements, meaning the forms are not present on the prerendered HTML -->
<!-- Forms here must have all the same inputs as their JS-rendered counterparts, and the `name` attribute must correspond to a hidden `form-name` attribute on the JS form -->

<div class="hidden">
	<form name="contact-form" method="POST" data-netlify="true">
		<input type="email" name="email" />
		<textarea name="message"></textarea>
	</form>
	<form name="newsletter-subscribe" method="POST" data-netlify="true">
		<input type="email" name="email" />
	</form>
</div>
