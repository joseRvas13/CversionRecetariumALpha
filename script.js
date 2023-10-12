const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');
const menuToggle = document.getElementById('menu-toggle');
const pageContent = document.querySelector('.page-content');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('show');
    overlay.style.display = (sidebar.classList.contains('show')) ? 'block' : 'none';
    document.body.style.overflow = (sidebar.classList.contains('show')) ? 'hidden' : 'auto';
    pageContent.classList.toggle('open');
    menuToggle.classList.toggle('open');
    menuToggle.style.left = (sidebar.classList.contains('show')) ? '270px' : '50px'; // Ajusta el valor de acuerdo al ancho de la barra lateral
});