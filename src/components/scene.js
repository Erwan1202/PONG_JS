import * as THREE from 'three';

export class Scene {
    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer();

        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('game-container').appendChild(this.renderer.domElement);

        this.createEnvironment();
    }

    createEnvironment() {
        const floor = new THREE.Mesh(
            new THREE.PlaneGeometry(20, 10),
            new THREE.MeshStandardMaterial({ color: 0x808080 })
        );
        floor.rotation.x = -Math.PI / 2;
        this.scene.add(floor);

        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(5, 10, 5);
        this.scene.add(light);
    }

    render() {
        this.renderer.render(this.scene, this.camera);
    }

    displayGameOver(winner) {
        alert(`Game Over! Winner: ${winner}`);
    }
}
