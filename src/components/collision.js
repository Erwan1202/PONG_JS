// src/components/Collision.js

export class Collision {
    constructor(ball, players, boundaries, onScore) {
        this.ball = ball; // Ball object
        this.players = players; // Array of Player objects
        this.boundaries = boundaries; // { top, bottom, left, right }
        this.onScore = onScore; // Callback when a player scores
    }

    checkCollisions() {
        // Ball and boundaries collision
        if (this.ball.mesh.position.y >= this.boundaries.top || 
            this.ball.mesh.position.y <= this.boundaries.bottom) {
            this.ball.velocity.y *= -1; // Reverse vertical direction
        }

        if (this.ball.mesh.position.x >= this.boundaries.right) {
            this.onScore(this.players[0]); // Player 1 scores
            this.resetBall();
        } else if (this.ball.mesh.position.x <= this.boundaries.left) {
            this.onScore(this.players[1]); // Player 2 scores
            this.resetBall();
        }

        // Ball and player racket collision
        this.players.forEach(player => {
            const racket = player.racket;
            if (this.isColliding(this.ball.mesh, racket)) {
                this.ball.velocity.x *= -1; // Reverse horizontal direction

                // Optional: Add spin effect based on collision point
                const offset = this.ball.mesh.position.y - racket.position.y;
                this.ball.velocity.y += offset * 0.1;
            }
        });
    }

    isColliding(ball, racket) {
        const ballBox = new THREE.Box3().setFromObject(ball);
        const racketBox = new THREE.Box3().setFromObject(racket);
        return ballBox.intersectsBox(racketBox);
    }

    resetBall() {
        this.ball.mesh.position.set(0, 0, 0);
        this.ball.velocity.set(Math.random() > 0.5 ? 0.1 : -0.1, (Math.random() - 0.5) * 0.2, 0);
    }
}
