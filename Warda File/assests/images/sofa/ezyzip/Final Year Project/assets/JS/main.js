// JavaScript for enabling hover effect on the dropdown (no need for click action)
document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.querySelectorAll('.dropdown');

    dropdown.forEach(function(item) {
        item.addEventListener('mouseenter', function() {
            const menu = item.querySelector('.dropdown-menu');
            menu.style.display = 'block';
            setTimeout(function() {
                menu.style.opacity = '1';
                menu.style.transform = 'translateY(0)';
            }, 10); // Delay for the transition to kick in
        });

        item.addEventListener('mouseleave', function() {
            const menu = item.querySelector('.dropdown-menu');
            menu.style.opacity = '0';
            menu.style.transform = 'translateY(-10px)';
            setTimeout(function() {
                menu.style.display = 'none';
            }, 300); // Delay for hiding after animation
        });
    });
});
