// src/components/Score.js

export class Score {
    constructor(player1, player2, winningScore = 5) {
        this.scores = { [player1.name]: 0, [player2.name]: 0 };
        this.winningScore = winningScore;
        this.player1 = player1;
        this.player2 = player2;
        this.gameOver = false;
    }

    update(ball) {
        if (ball.mesh.position.x > this.player2.racket.position.x + 1) {
            this.scores[this.player1.name]++;
            this.checkGameOver(this.player1);
            return true;
        }

        if (ball.mesh.position.x < this.player1.racket.position.x - 1) {
            this.scores[this.player2.name]++;
            this.checkGameOver(this.player2);
            return true;
        }

        return false;
    }

    checkGameOver(player) {
        if (this.scores[player.name] >= this.winningScore) {
            this.gameOver = true;
        }
    }

    isGameOver() {
        return this.gameOver;
    }

    getWinner() {
        if (!this.gameOver) return null;
        return this.scores[this.player1.name] > this.scores[this.player2.name] ? this.player1.name : this.player2.name;
    }
}
