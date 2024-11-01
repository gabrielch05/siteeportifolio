
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

themeToggleButton.addEventListener('click', () => {
   
    body.classList.toggle('dark-theme');

    
    if (body.classList.contains('dark-theme')) {
        themeToggleButton.textContent = '🌞 Modo Claro';
    } else {
        themeToggleButton.textContent = '🌙 Modo Escuro';
    }
});

const projectButtons = document.querySelectorAll('.project-item button');

projectButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Projeto em construção! Em breve você poderá ver mais detalhes.');
    });
});
