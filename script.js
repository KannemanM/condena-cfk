function updateCountdown() {
    const targetDate = new Date("June 17, 2031 00:00:00");
    const currentDate = new Date();

    const totalSeconds = Math.floor((targetDate - currentDate) / 1000);

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor((totalSeconds / 3600) % 24);
    const minutes = Math.floor((totalSeconds / 60) % 60);
    const seconds = Math.floor(totalSeconds % 60);

    document.getElementById("countdown").textContent = 
        `${days} días, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
}

updateCountdown();
setInterval(updateCountdown, 1000);