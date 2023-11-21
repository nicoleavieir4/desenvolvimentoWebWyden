function openPacman() {
  const gameContainer = document.getElementById("game-container");
  gameContainer.innerHTML = '<div class="pacman-css"><div class="base"></div></div>';
}

function openTicTacToe() {
  // Implemente a lógica para abrir o Jogo da Velha
}

function openPingPong() {
  const gameContainer = document.getElementById("game-container");
  
  // Remova qualquer conteúdo anterior dentro do game-container
  gameContainer.innerHTML = '';
  
  // Crie um novo elemento para a animação dentro do game-container
  const pingPongAnimation = document.createElement("div");
  pingPongAnimation.classList.add("ping-pong-simulation");

  // Adicione o elemento da animação ao game-container
  gameContainer.appendChild(pingPongAnimation);
}

function openCasino() {
  // Implemente a lógica para abrir o Cassino
}

function openCardGames() {
  // Implemente a lógica para abrir Jogos de Cartas
}
