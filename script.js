const eventDate = new Date("2025-07-31T00:00:00").getTime();
    const countdown = document.getElementById("countdown");

    const x = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      countdown.innerHTML = `<h3>Event starts in: ${days}d ${hours}h ${minutes}m ${seconds}s</h3>`;

      if (distance < 0) {
        clearInterval(x);
        countdown.innerHTML = "<h3>The event has started!</h3>";
      }
    }, 1000);