    const circle = document.getElementById("circle");
    const totalPoints = 60;
    const rotation = 360 / totalPoints;

    for (let i = 0; i < totalPoints; i++) {
      const point = document.createElement("div");
      point.classList.add("points");
      point.style.setProperty("--i", i);
      point.style.setProperty("--rot", rotation + "deg");
      circle.appendChild(point);
    }

    // Redirect after 13 seconds
    setTimeout(() => {
      window.location.href = "https://superlative-bombolone-67a0ed.netlify.app";
    }, 13000);