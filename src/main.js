// src/main.js

import { Scene } from './components/scene.js';
import { Player } from './components/player.js';
import { Ball } from './components/ball.js';
import { Controls } from './components/controls.js';
import { Score } from './components/score.js';

// Initialize core components
const scene = new Scene();
const player1 = new Player('Player 1');
const player2 = new Player('Player 2');
const ball = new Ball();
const controls = new Controls(player1, player2);
const score = new Score(player1, player2);

// Setup the game
scene.add(player1.racket);
scene.add(player2.racket);
scene.add(ball.mesh);

// Game loop
function gameLoop() {
    ball.update();
    controls.update();
    score.update(ball);

    if (score.isGameOver()) {
        scene.displayGameOver(score.getWinner());
    } else {
        requestAnimationFrame(gameLoop);
    }
}

gameLoop();
