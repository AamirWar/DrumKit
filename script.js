// Select all drum buttons
let buttons = document.querySelectorAll(".drum");

// Add click event to each button
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        let key = this.innerHTML.toLowerCase();
        makeSound(key);
        buttonAnimation(key);
    });
}

// Add keyboard event
document.addEventListener("keydown", function (event) {
    let key = event.key.toLowerCase();
    makeSound(key);
    buttonAnimation(key);
});

// Function to play sound
function makeSound(key) {
    switch (key) {
        case "w":
            new Audio("Snare.mp3").play();
            break;

        case "s":
            new Audio("kick.mp3").play();
            break;

        case "a":
            new Audio("HiHatClosed.mp3").play();
            break;

        case "d":
            new Audio("HiHatOpen.mp3").play();
            break;

        case "j":
            new Audio("CrashCymbal.mp3").play();
            break;

        case "k":
            new Audio("TomHit.mp3").play();
            break;

        default:
            console.log("Unknown key:", key);
    }
}
