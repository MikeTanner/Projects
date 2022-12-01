//one gameBoard object: store length 9 array of current gameboard, methods: resetBoard (call displayer.Controller.reset), updateBoard (call displayController.update), 
//two Player objects: whether X or O
//Game object: game logic? check if tile is full, check if player wins or a tie. assign next player turn
//one displayController object: only displays, no logic? No properties probably just methods.

//data flow idea
//on click => Game.boardclick() => check if within container bounds => => request gameboard.property=> check if tile is full  => check for win or tie => if continue, gameboard.update([updatedArray])
// =>  updates array =>gameboard calls displayController to update gameboard visual
const Player = (symbol) => {
    const displayName = () => {
        console.log(symbol);
    }
    return {
        symbol,
        displayName
    }
}

const gameBoard = (() => {
    let gameBoard = [0,0,0,0,0,0,0,0,0]
    const resetBoard = () => {
        gameBoard = [0,0,0,0,0,0,0,0,0];
    }
    const update = (tile, symbol) => {
        gameBoard[tile[1]] = symbol;
        console.log(gameBoard);
        

    }
    return {
        gameBoard,
        resetBoard,
        update
    }
})()


const game = (() => {
    let turnCount = 0;
    const boardClick = (e) => {
        console.log(e.target.id);
        if (e.target.innerHTML == "") {
            playTurn(e.target.id)
        }
        else {
            e.stopPropagation();
            return;
        }
        //if event.target.innerhtml == ""
        //event.target.id
        //playTurn(event.target)
        e.stopPropagation();
    }
    const reset = () => {
        displayController.initBoard();
        gameBoard.resetBoard()
        turnCount = 0
    }
    const playTurn = (tileID) => {
        if (turnCount %2 == 0) {
            player = x;
        }
        else {
            player = o;
        }
        turnCount += 1;
        gameBoard.update(tileID, player.symbol)
                //gameBoard.update(tile, Player.symbol?)
    }
    const isGameOver = () => {

    }
    return {
        boardClick,
        reset,
    }

})()
const displayController = (() => {
    const initBoard = () => {
        const container = document.querySelector(".gameContainer")
        container.addEventListener("click", (e => {game.boardClick(e)}))
        container.innerHTML = "";
        for (let i = 0; i < 9; i++) {
            gameSquare = document.createElement("div");
            gameSquare.classList.add("grid")
            gameSquare.id = "a"+i;
           container.appendChild(gameSquare)
        }
    }
    const fillSquare = (playerSymbol, tile) => {

    }
    const displayWin = (playerWinner) => {

    }
    const displayTie = () => {

    }
    return {
        initBoard
    }
})()
game.reset();
x = Player("x");
o = Player("o");