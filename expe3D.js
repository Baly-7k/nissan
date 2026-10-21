document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".mySwiper", {
        effect: "coverflow", // Activa el efecto 3D
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto", // Le dice a Swiper que respete el 50% de ancho del CSS
        loop: true,
        coverflowEffect: {
            rotate: 0,      // Si quieres que giren un poco, ponle 20. Con 0 se ven rectos.
            stretch: 0,     // Espacio entre carros
            depth: 200,     // Qué tan atrás se van los carros laterales
            modifier: 1,
            slideShadows: false, // Desactiva las sombras oscuras por defecto
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});