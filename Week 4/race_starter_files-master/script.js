const allSpotsPlayer1 = document.querySelectorAll("#player1-race td");
const allSpotsPlayer2 = document.querySelectorAll("#player2-race td");

let playerIndex1 = 0;
let playerIndex2 = 0;

window.addEventListener("keyup", (e) => {
    if (e.key == "ArrowRight") {
        moveCar(1, playerIndex1);
        if (playerIndex1 == allSpotsPlayer1.length - 1) {
            alert("Player 1 won!");
            window.location.reload();
        }
    } else if (e.key == "d") {
        moveCar(2, playerIndex2);
        if (playerIndex2 == allSpotsPlayer2.length - 1) {
            alert("Player 2 won!");
            window.location.reload();
        }
    }
});

function moveCar(player, index) {
    if (player == 1 && allSpotsPlayer1[index + 1]) {
        allSpotsPlayer1[index].classList.toggle("active");
        allSpotsPlayer1[index + 1].classList.toggle("active");
        playerIndex1++;
    } else if (allSpotsPlayer2[index + 1]){
        allSpotsPlayer2[index].classList.toggle("active");
        allSpotsPlayer2[index + 1].classList.toggle("active");
        playerIndex2++;
    }
}