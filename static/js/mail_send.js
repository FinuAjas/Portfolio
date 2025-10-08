function send_mail() {
    // Run validation first
    if (typeof window.validateContactForm === 'function' && !window.validateContactForm()) {
        return false;
    }

    var name = jQuery("#name").val().trim();
    var email = jQuery("#email").val().trim();
    var subject = jQuery("#subject").val().trim();
    var message = jQuery("#message").val().trim();

    emailjs.send('portfolio', 'template_8g9pxo9', {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message
    })
        .then(function (response) {
            jQuery('#suce_message').show();
            jQuery('#err_message').hide();
            jQuery("#contact-form")[0].reset();
        }, function (error) {
            jQuery('#err_message').show();
            jQuery('#suce_message').hide();
        });

}