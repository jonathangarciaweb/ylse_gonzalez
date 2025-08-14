document.addEventListener('DOMContentLoaded', () => {
    // 1. Cargar testimonios desde content.json
    fetch('data/content.json')
        .then(response => response.json())
        .then(data => {
            const carousel = document.querySelector('.testimonials-carousel');
            if (carousel && data.testimonials) {
                data.testimonials.forEach(testimonial => {
                    const card = document.createElement('div');
                    card.classList.add('testimonial-card');
                    card.innerHTML = `
                        <p>"${testimonial.quote}"</p>
                        <p class="author">- ${testimonial.author}</p>
                    `;
                    carousel.appendChild(card);
                });

                // Implementar un carrusel simple (desplazamiento automático)
                let testimonialIndex = 0;
                const totalTestimonials = data.testimonials.length;

                setInterval(() => {
                    testimonialIndex = (testimonialIndex + 1) % totalTestimonials;
                    const offset = testimonialIndex * carousel.offsetWidth;
                    carousel.scrollTo({
                        left: offset,
                        behavior: 'smooth'
                    });
                }, 7000); // Cambia cada 7 segundos
            }
        })
        .catch(error => console.error('Error al cargar los testimonios:', error));

    // 2. Actualizar el año en el footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // 3. Manejar el envío del formulario de contacto (ejemplo básico)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita el envío del formulario por defecto
            
            // Aquí puedes agregar lógica para enviar los datos:
            // - A un servicio de backend (PHP, Node.js, Python)
            // - A un servicio de formularios (Formspree, Netlify Forms)
            // - Mostrar un mensaje de éxito/error al usuario

            alert('¡Mensaje enviado! Ylse se pondrá en contacto contigo pronto.');
            this.reset(); // Limpia el formulario
        });
    }

    // 4. Smooth scrolling para la navegación interna (si no se usa CSS scroll-behavior)
    // Aunque ya lo definimos en CSS, este es un fallback o para mayor control.
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});