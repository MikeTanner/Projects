//one gameBoard object: store length 9 array of current gameboard, methods: resetBoard (call displayer.Controller.reset), updateBoard (call displayController.update), 
//two Player objects: store name and whether X or O
//Game object: game logic? check if tile is full, check if player wins or a tie. assign next player turn
//one displayController object: only displays, no logic? No properties probably just methods.

//data flow idea
//on click => Game.boardclick() => check if within container bounds => => request gameboard.property=> check if tile is full  => check for win or tie => if continue, gameboard.update([updatedArray])
// =>  updates array =>gameboard calls displayController to update gameboard visual

const displayController = (() => {
    const initBoard = () => {
        const container = document.querySelector(".gameContainer")
        container.innerHTML = "";
        for (let i = 0; i < 9; i++) {
            gameSquare = document.createElement("div");
            gameSquare.classList.add("grid")
           container.appendChild(gameSquare)
        }
    }
    return {
        initBoard
    }
})()
displayController.initBoard();