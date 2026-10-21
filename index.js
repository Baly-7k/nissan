 function expandirTarjeta(tarjetaClickeada) {
            // Si la tarjeta clickeada ya está expandida, no hacemos nada
            if (tarjetaClickeada.classList.contains('lg:col-span-8')) return;

            // Encontramos la tarjeta que actualmente está grande
            const tarjetaActualGrande = document.querySelector('.nissan-card.lg\\:col-span-8');

            // 1. Encoger la tarjeta que estaba grande
            if (tarjetaActualGrande) {
                tarjetaActualGrande.classList.remove('lg:col-span-8');
                tarjetaActualGrande.classList.add('lg:col-span-1');
                
                // Ocultar su contenido largo y mostrar el icono de "+" con título corto
                tarjetaActualGrande.querySelector('.contenido-expandido').classList.add('hidden', 'opacity-0');
                tarjetaActualGrande.querySelector('.contenido-expandido').classList.remove('opacity-100');
                
                tarjetaActualGrande.querySelector('.contenido-contraido').classList.remove('hidden');
                setTimeout(() => tarjetaActualGrande.querySelector('.contenido-contraido').classList.add('opacity-100'), 50);
            }

            // 2. Expandir la tarjeta clickeada
            tarjetaClickeada.classList.remove('lg:col-span-1');
            tarjetaClickeada.classList.add('lg:col-span-8');

            // Ocultar su titulo corto y mostrar el contenido largo
            tarjetaClickeada.querySelector('.contenido-contraido').classList.add('hidden', 'opacity-0');
            tarjetaClickeada.querySelector('.contenido-contraido').classList.remove('opacity-100');
            
            tarjetaClickeada.querySelector('.contenido-expandido').classList.remove('hidden');
            setTimeout(() => tarjetaClickeada.querySelector('.contenido-expandido').classList.add('opacity-100'), 50);
        }
        document.addEventListener('DOMContentLoaded', () => {
            const slides = document.querySelectorAll('.slide');
            const dots = document.querySelectorAll('.dot');
            const nextBtn = document.getElementById('nextBtn');
            const prevBtn = document.getElementById('prevBtn');
            let currentSlide = 0;
            const totalSlides = slides.length;
            let autoPlayInterval;

            const updateCarousel = (newIndex) => {
                // Ocultar slide actual
                slides[currentSlide].classList.remove('slide-visible');
                slides[currentSlide].classList.add('slide-hidden');
                dots[currentSlide].classList.replace('bg-white', 'bg-white/40');

                currentSlide = newIndex;

                // Mostrar nuevo slide
                slides[currentSlide].classList.remove('slide-hidden');
                slides[currentSlide].classList.add('slide-visible');
                dots[currentSlide].classList.replace('bg-white/40', 'bg-white');
            };

            const nextSlide = () => {
                const next = (currentSlide + 1) % totalSlides;
                updateCarousel(next);
            };

            const prevSlide = () => {
                const prev = (currentSlide - 1 + totalSlides) % totalSlides;
                updateCarousel(prev);
            };

            // Event Listeners para botones
            nextBtn.addEventListener('click', () => {
                nextSlide();
                resetAutoPlay();
            });

            prevBtn.addEventListener('click', () => {
                prevSlide();
                resetAutoPlay();
            });

            // Event Listeners para los puntos indicadores
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    if (currentSlide !== index) {
                        updateCarousel(index);
                        resetAutoPlay();
                    }
                });
            });

            // Configurar autoplay
            const startAutoPlay = () => {
                autoPlayInterval = setInterval(nextSlide, 10000); // Cambia cada 6 segundos
            };

            const resetAutoPlay = () => {
                clearInterval(autoPlayInterval);
                startAutoPlay();
            };

            // Iniciar carrusel
            startAutoPlay();
        });