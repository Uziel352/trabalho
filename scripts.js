document.getElementById('menuToggle').addEventListener('click', function() {
    var menu = document.getElementById('mobileMenu');
    
    if (menu.style.display === 'block' || menu.style.display === '') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});