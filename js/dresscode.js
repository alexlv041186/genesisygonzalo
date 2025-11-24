document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todas las tarjetas de dresscode
    const dresscodeCards = document.querySelectorAll('.dresscode-card');

    // Itera sobre cada tarjeta y añade un 'event listener' para el clic
    dresscodeCards.forEach(card => {
        card.addEventListener('click', function() {
            // Alterna la clase 'flipped' en la tarjeta cuando se hace clic
            this.classList.toggle('flipped');
        });
    });
});