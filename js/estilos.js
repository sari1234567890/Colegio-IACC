// Carrusel infinito
document.addEventListener('DOMContentLoaded', () => {
  const carrusel = document.querySelector('.testimonios__carrusel');
  const carruselContainer = document.createElement('div');
  carruselContainer.classList.add('testimonios__carrusel-contenedor');
  
  // Mover los hijos actuales del carrusel al nuevo contenedor
  while (carrusel.firstChild) {
    carruselContainer.appendChild(carrusel.firstChild);
  }

  // Añadir el nuevo contenedor al carrusel
  carrusel.appendChild(carruselContainer);

  const totalItems = carruselContainer.children.length;
  carruselContainer.style.setProperty('--total-items', totalItems);

  // Clonar los ítems del carrusel para el efecto de scroll infinito
  for (let i = 0; i < totalItems; i++) {
    const clone = carruselContainer.children[i].cloneNode(true);
    carruselContainer.appendChild(clone);
  }
});

// Modal
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById("modal-informacion");
  const abrirModalBtn = document.querySelector(".btn--principal");
  const cerrarModalBtn = document.querySelector(".modal__cerrar");

  // Función para abrir el modal
  abrirModalBtn.addEventListener("click", () => {
    modal.style.display = "block";
  });

  // Función para cerrar el modal
  cerrarModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Cerrar el modal al hacer clic fuera de él
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

// Obtener elementos del DOM
const modalOverlay = document.createElement('div');
modalOverlay.classList.add('modal-overlay');
document.body.appendChild(modalOverlay);

const modal = document.getElementById("modal-informacion");
const abrirModalBtn = document.querySelector(".btn--principal");
const cerrarModalBtn = document.querySelector(".modal__cerrar");

// Función para abrir el modal
abrirModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
  modalOverlay.style.display = "block";
});

// Función para cerrar el modal
cerrarModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
  modalOverlay.style.display = "none";
});

// Cerrar el modal al hacer clic fuera de él
window.addEventListener("click", (event) => {
  if (event.target === modalOverlay) {
    modal.style.display = "none";
    modalOverlay.style.display = "none";
  }
});



const carrusel = document.querySelector('.programas__carrusel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;

nextBtn.addEventListener('click', () => {
  const itemWidth = document.querySelector('.programa').offsetWidth + 10; // Incluye el margen derecho

  carrusel.style.transition = 'transform 0.5s ease-in-out';
  carrusel.style.transform = `translateX(-${itemWidth}px)`;

  // Después de la transición, mover el primer elemento al final
  setTimeout(() => {
    carrusel.style.transition = 'none';
    carrusel.appendChild(carrusel.firstElementChild);
    carrusel.style.transform = 'translateX(0)';
  }, 500); // El tiempo debe coincidir con la duración de la transición
});

prevBtn.addEventListener('click', () => {
  const itemWidth = document.querySelector('.programa').offsetWidth + 10; // Incluye el margen derecho

  // Mueve el último elemento al principio antes de la transición
  carrusel.style.transition = 'none';
  carrusel.insertBefore(carrusel.lastElementChild, carrusel.firstElementChild);
  carrusel.style.transform = `translateX(-${itemWidth}px)`;

  // Iniciar la transición hacia el elemento visible
  setTimeout(() => {
    carrusel.style.transition = 'transform 0.5s ease-in-out';
    carrusel.style.transform = 'translateX(0)';
  }, 0);
});


  // Mostrar el botón "Ir Arriba" cuando se desplaza hacia abajo
  window.addEventListener("scroll", function () {
    const irArriba = document.querySelector(".ir-arriba");
    if (window.scrollY > 200) {
      irArriba.style.display = "block";
    } else {
      irArriba.style.display = "none";
    }
  });

document.querySelector('.hamburguesa').addEventListener('click', function() {
  document.querySelector('.header__nav').classList.toggle('active');
});
