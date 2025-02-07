// Configurar imágenes de fondo dinámicamente
document.querySelectorAll('.section').forEach(section => {
  const bgImage = section.getAttribute('data-bg');
  if (bgImage) {
      section.style.backgroundImage = `url(${bgImage})`;
  }
});

// Intersection Observer para animar las secciones al entrar en el viewport
const sections = document.querySelectorAll('.section');

const observerOptions = {
  root: null, // Observa el viewport completo
  threshold: 0.1, // Detecta cuando el 10% de la sección es visible
};

const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('section-visible'); // Agregar clase para mostrar la animación
          observer.unobserve(entry.target); // Dejar de observar una vez que se ha animado
      }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

// Observar cada sección
sections.forEach(section => observer.observe(section));

