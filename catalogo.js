
    function setListView() {
        // 1. Cambiar estilos de los botones
        document.getElementById('btn-list').classList.add('opacity-100');
        document.getElementById('btn-list').classList.remove('opacity-50');
        document.getElementById('btn-grid').classList.remove('opacity-100');
        document.getElementById('btn-grid').classList.add('opacity-50');

        // 2. Actualizar TODOS los contenedores a columna
        const containers = document.querySelectorAll('.seccion-vehiculos');
        containers.forEach(container => {
            container.className = 'seccion-vehiculos flex flex-col gap-16 mt-8';
        });

        // 3. Actualizar TODAS las tarjetas a formato lista
        const cards = document.querySelectorAll('.vehicle-card');
        cards.forEach(card => {
            card.className = 'vehicle-card flex flex-col md:flex-row items-stretch gap-10 w-full group';
            card.querySelector('.card-text').className = 'card-text order-2 md:w-1/3 flex flex-col justify-center';
            card.querySelector('.card-image').className = 'card-image order-1 md:w-2/3 relative h-full';
            card.querySelector('img').className = 'w-full h-full object-cover bg-gray-100';
            card.querySelector('.price-btn-container').className = 'price-btn-container flex justify-between items-end mt-8 border-t border-gray-200 pt-6 w-full';
        });
    }

    function setGridView() {
        // 1. Cambiar estilos de los botones
        document.getElementById('btn-grid').classList.add('opacity-100');
        document.getElementById('btn-grid').classList.remove('opacity-50');
        document.getElementById('btn-list').classList.remove('opacity-100');
        document.getElementById('btn-list').classList.add('opacity-50');

        // 2. Actualizar TODOS los contenedores a cuadrícula
        const containers = document.querySelectorAll('.seccion-vehiculos');
        containers.forEach(container => {
            container.className = 'seccion-vehiculos grid grid-cols-1 md:grid-cols-3 gap-8 mt-8';
        });

        // 3. Actualizar TODAS las tarjetas a formato cuadrícula
        const cards = document.querySelectorAll('.vehicle-card');
        cards.forEach(card => {
            card.className = 'vehicle-card flex flex-col gap-4 w-full group';
            card.querySelector('.card-text').className = 'card-text order-1 flex flex-col';
            card.querySelector('.card-image').className = 'card-image order-2 relative';
            card.querySelector('img').className = 'w-full h-auto object-cover bg-gray-100';
            card.querySelector('.price-btn-container').className = 'price-btn-container hidden mt-auto';
        });
    }
