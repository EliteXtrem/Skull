document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        alert(`Bedankt voor je bericht, ${name}! We nemen contact met je op via ${email}.`);

        contactForm.reset();
    });
});
