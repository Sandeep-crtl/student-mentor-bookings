// const menuIcon = document.getElementById('menuIcon');
// const navLinks = document.getElementById('navLinks');
// const closeIcon = document.getElementById('closeIcon');

// menuIcon.addEventListener('click', () => {
//     navLinks.classList.add('active');
// });

// closeIcon.addEventListener('click', () => {
//     navLinks.classList.remove('active');
// });



const form = document.getElementById('contactForm');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    fetch('https://example.com/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
})
    .then(data => {
        alert('Form submitted successfully!');
        form.reset();
    })
    .catch(error => {
        console.error('Error submitting form:', error);
        alert('There was an error submitting the form. Please try again later.');
    });
