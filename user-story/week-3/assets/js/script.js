// script.js - Interactividad básica del portafolio week-3
// ------------------------------------------------------
// Este archivo agrega tres tipos de interacción:
// 1. Mensaje de bienvenida al cargar la página.
// 2. Botón que cambia el texto del párrafo principal con datos aleatorios.
// 3. Menú hamburguesa y botón que muestra/oculta un proyecto extra.

window.addEventListener('DOMContentLoaded', function () {

    // 2. Botón que cambia el texto del párrafo principal
    const descriptionParagraph = document.getElementById('description-');
    const surpriseButton = document.getElementById('surprise-btn');

    // Lista de mensajes que rotarán al hacer clic
    const funFacts = [
        'I love connecting data, visuals and small stories into every interface I build.',
        'Outside of coding and design, I enjoy exploring color theory and visual storytelling.',
        'I believe good products are born where empathy, logic and aesthetics meet.',
        'I am constantly learning new tools, but I focus on solid fundamentals first.',
        'Design systems, typography and micro-interactions are some of my favorite topics.'
    ];

    if (descriptionParagraph && surpriseButton) {
        surpriseButton.addEventListener('click', function () {
            const randomIndex = Math.floor(Math.random() * funFacts.length);
            descriptionParagraph.textContent = funFacts[randomIndex];
        });
    }

    // 3. Botón para mostrar/ocultar un proyecto extra
    const toggleProjectsBtn = document.getElementById('toggle-projects-btn');
    const extraProject = document.getElementById('extra-project');

    if (toggleProjectsBtn && extraProject) {
        toggleProjectsBtn.addEventListener('click', function () {
            const isHidden = extraProject.classList.contains('hidden-project');
            if (isHidden) {
                extraProject.classList.remove('hidden-project');
                toggleProjectsBtn.textContent = 'Hide extra project';
            } else {
                extraProject.classList.add('hidden-project');
                toggleProjectsBtn.textContent = 'Show one more project';
            }
        });
    }

    // 4. Menú hamburguesa para dispositivos móviles
    const navToggle = document.querySelector('.nav-toggle');
    const siteNav = document.querySelector('.site-nav');

    if (navToggle && siteNav) {
        navToggle.addEventListener('click', function () {
            const isOpen = siteNav.classList.toggle('is-open');
            navToggle.classList.toggle('is-open', isOpen);

            // Actualizamos el atributo aria-expanded para accesibilidad
            navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });
    }
});

