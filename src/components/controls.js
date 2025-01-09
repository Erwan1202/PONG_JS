export class Controls {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;

        window.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowUp') this.player2.move(0.2);
            if (event.key === 'ArrowDown') this.player2.move(-0.2);
            if (event.key === 'z') this.player1.move(0.2);
            if (event.key === 's') this.player1.move(-0.2);
        });
    }
}
