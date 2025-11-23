document.addEventListener('DOMContentLoaded', () => {
    // Fecha y hora de la boda: 03 de julio 2026 a las 5pm (17:00)
    // El mes es 0-indexed en JavaScript (julio es 6)
    const weddingDate = new Date('2026-07-03T17:00:00').getTime();

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        // Si la cuenta regresiva ha terminado
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').innerHTML = "<h2>¡Felicidades a los novios!</h2>";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Function to ensure two digits
        const formatTime = (num) => String(num).padStart(2, '0');

        daysEl.innerHTML = days;
        hoursEl.innerHTML = formatTime(hours);
        minutesEl.innerHTML = formatTime(minutes);
        secondsEl.innerHTML = formatTime(seconds);
    }

    const countdownInterval = setInterval(updateCountdown, 1000);

    updateCountdown();
});