

// JavaScript for Navbar Scroll Effect
document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});

// JavaScript for Newsletter Form Validation
document.addEventListener("DOMContentLoaded", function () {
    const newsletterForm = document.getElementById('newsletterForm');
    const newsletterInput = newsletterForm.querySelector('input[type="email"]');

    newsletterForm.addEventListener('submit', function (event) {
        event.preventDefault();
        if (newsletterInput.checkValidity()) {
            // Here you can add AJAX request to submit the form data
            newsletterForm.querySelector('.invalid-feedback').style.display = 'none';
            newsletterForm.querySelector('.valid-feedback').style.display = 'block';
            newsletterForm.reset();
        } else {
            newsletterInput.classList.add('is-invalid');
            newsletterForm.querySelector('.valid-feedback').style.display = 'none';
        }
    });

    newsletterInput.addEventListener('input', function () {
        if (newsletterInput.checkValidity()) {
            newsletterInput.classList.remove('is-invalid');
        }
    });
});

document.querySelectorAll('.dropdown-submenu').forEach(function (submenu) {
    submenu.addEventListener('mouseenter', function () {
        submenu.querySelector('.dropdown-menu').classList.add('show');
    });

    submenu.addEventListener('mouseleave', function () {
        submenu.querySelector('.dropdown-menu').classList.remove('show');
    });
});

