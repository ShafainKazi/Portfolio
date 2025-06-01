function sendEmail(event) {
    if (event) event.preventDefault();
    let params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    emailjs.send('service_sa8o6zz', 'template_5lqwl4k', params)
        .then(function() {
            alert('Email sent successfully!');
        }, function(error) {
            console.error('EmailJS Error:', error);
            alert('Failed to send email. Please check the console for details.');
        });
}