export class Ball {
    constructor() {
        this.mesh = new THREE.Mesh(
            new THREE.SphereGeometry(0.2, 32, 32),
            new THREE.MeshStandardMaterial({ color: 0xffff00 })
        );
        this.velocity = new THREE.Vector3(0.1, 0.1, 0);
    }

    update() {
        this.mesh.position.add(this.velocity);
        // Gestion des collisions à ajouter ici
    }
}
