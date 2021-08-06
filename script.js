'use strict';

let boxTop = 200;
let boxLeft = 200;

const keyMovement = (evt) => {
    const keyName = evt.key;
    if (keyName === "ArrowUp") {
        boxTop -= 10
    }
    if (keyName === "ArrowDown") {
        boxTop += 10
    }
    if (keyName === "ArrowLeft") {
        boxLeft -=10
    }
    if (keyName === "ArrowRight") {
        boxLeft += 10
    }
    document.getElementById("box").style.top = boxTop + "px";
    document.getElementById("box").style.left = boxLeft + "px";
}
        
document.addEventListener('keydown', keyMovement);