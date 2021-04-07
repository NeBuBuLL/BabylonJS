import Input from "./Input.js";

export default class Zombie{
    constructor(zombieMesh, speed){
        this.zombieMesh = zombieMesh;
        if(speed)
            this.speed = speed;
        else
            this.speed = 1;
        
        zombieMesh.Zombie = this;
        this.inputs = new Input();
    }

    move() {
        let yMovement = 0;
        if (this.zombieMesh.position.y > 2) {
            zMovement = 0;
            yMovement = -2;
        }
        if(this.inputs.shift){
            this.speed = 1.5;
        }
        
        if(this.inputs.up)
            this.moveWithCollisions(this.frontVector.multiplyByFloats(this.speed, this.speed, this.speed));
        if(this.inputs.down)
            this.moveWithCollisions(this.frontVector.multiplyByFloats(-this.speed, -this.speed, -this.speed));
        if(this.inputs.left){
            this.rotation.y -= 0.02;
            this.frontVector = new BABYLON.Vector3(Math.sin(this.rotation.y), 0, Math.cos(this.rotation.y));
        }
        if(this.inputs.right){
            this.rotation.y += 0.02;
            this.frontVector = new BABYLON.Vector3(Math.sin(this.rotation.y), 0, Math.cos(this.rotation.y));
        }
        
        return this;
}
    
}