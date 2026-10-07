/* Configuration de Particles.js pour l'effet réseau/constellation */
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 60, /* Nombre de points */
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": ["#00f2fe", "#b721ff"] /* Couleurs cyan et violet */
    },
    "shape": {
      "type": "circle",
    },
    "opacity": {
      "value": 0.5,
      "random": false,
    },
    "size": {
      "value": 3,
      "random": true,
    },
    "line_linked": {
      "enable": true,
      "distance": 150, /* Distance pour lier les points */
      "color": "#00f2fe", /* Couleur de la ligne */
      "opacity": 0.2,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2, /* Vitesse de déplacement */
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab" /* Les lignes se connectent à la souris */
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 200,
        "line_linked": {
          "opacity": 0.6
        }
      }
    }
  },
  "retina_detect": true
});
