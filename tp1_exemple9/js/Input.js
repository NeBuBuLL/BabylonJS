export default class Input{
    constructor(){
        // key listeners for the tank
        this.shift = false;
        this.left = false;
        this.right = false;
        this.up = false;
        this.down = false;
        this.space = false;
    }
    
    listener(){
        window.addEventListener('keydown', (event) => {
            if ((event.key === "ArrowLeft") || (event.key === "q")|| (event.key === "Q")) {
            this.left = true;
            } else if ((event.key === "ArrowUp") || (event.key === "z")|| (event.key === "Z")){
                this.up = true;
            } else if ((event.key === "ArrowRight") || (event.key === "d")|| (event.key === "D")){
                this.right = true;
            } else if ((event.key === "ArrowDown")|| (event.key === "s")|| (event.key === "S")) {
                this.down = true;
                this.shift = false; // pour empecher de reculer avec une vitesse doublé
            }  else if (event.key === " ") {
                this.space = true;
            }
            if (event.key === "ShiftLeft"){
                this.shift = true;
            }
        }, false);

        //if the key will be released, change the states object 
        window.addEventListener('keyup', (event) => {
            if ((event.key === "ArrowLeft") || (event.key === "q")|| (event.key === "Q")) {
                this.left = false;
            } else if ((event.key === "ArrowUp") || (event.key === "z")|| (event.key === "Z")){
                this.up = false;
            } else if ((event.key === "ArrowRight") || (event.key === "d")|| (event.key === "D")){
                this.right = false;
            } else if ((event.key === "ArrowDown")|| (event.key === "s")|| (event.key === "S")) {
                this.down = false;
            }  else if (event.key === " ") {
                this.space = false;
            }
            if (event.key === "ShiftLeft"){
                this.shift = false;
            }
        }, false);
    }

}