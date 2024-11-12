const counterDisplay = document.querySelector("h3");
let counter = 0;

// Création d'une fonction pour générer UNE bulle :

const bubbleMaker = () => {
  // Création d'un span pour la bulle :
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  // Get Nb entre 300-100
  // console.log(Math.random() * 200 + 100);

  const size = Math.random() * 200 + 100 + "px";
  // console.log(size);
  //  Taille random de la bulle
  bubble.style.height = size;
  bubble.style.width = size;

  // Position aléatoire
  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  //   petit ternaire !
  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  bubble.addEventListener("click", () => {
    counter++;
    counterDisplay.textContent = counter;
    bubble.remove();
  });

  setTimeout(() => {
    bubble.remove();
  }, 8000);
};

setInterval(bubbleMaker, 100);
