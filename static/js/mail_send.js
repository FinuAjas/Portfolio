function send_mail() {
    var name = jQuery("#name").val();
    var email = jQuery("#email").val();
    var subject = jQuery("#subject").val();
    var message = jQuery("#message").val();
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var flag = 0;
    if (name == "") {
        jQuery("#name").addClass('border-danger');
        jQuery("#val_user_name").html("Your Name is Required");
        flag = 1;
    } else {
        jQuery("#name").removeClass('border-danger');
        jQuery("#val_user_name").html("");
    }

    if (email == "") {
        jQuery("#email").addClass('border-danger');
        jQuery("#val_user_email").html("Please Enter Email");
        flag = 1;
    } else if (!email.match(mailformat)) {
        jQuery("#email").addClass('border-danger');
        jQuery("#val_user_email").html("Please Enter Valid Email");
        flag = 1;
    } else {
        jQuery("#email").removeClass('border-danger');
        jQuery("#val_user_email").html("");
    }

    if (subject == "") {
        jQuery("#subject").addClass('border-danger');
        jQuery("#val_subject").html("Subject is Required");
        flag = 1;
    } else {
        jQuery("#subject").removeClass('border-danger');
        jQuery("#val_subject").html("");
    }
    if (message == "") {
        jQuery("#message").addClass('border-danger');
        jQuery("#val_message").html("Please Describe your thoughts");
        flag = 1;
    } else {
        jQuery("#message").removeClass('border-danger');
        jQuery("#val_message").html("");
    }

    if (flag == 1) return false;

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