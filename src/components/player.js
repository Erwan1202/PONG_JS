export class Player {
    constructor(name) {
        this.name = name;
        this.racket = new THREE.Mesh(
            new THREE.BoxGeometry(0.5, 1, 0.1),
            new THREE.MeshStandardMaterial({ color: 0xff0000 })
        );
        this.racket.position.set(-9, 0.5, 0);
    }

    move(delta) {
        this.racket.position.y += delta;
    }
}
