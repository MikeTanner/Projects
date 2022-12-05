//one gameBoard object: store length 9 array of current gameboard, methods: resetBoard (call displayer.Controller.reset), updateBoard (call displayController.update), 
//two Player objects: whether X or O
//Game object: game logic? check if tile is full, check if player wins or a tie. assign next player turn
//one displayController object: only displays, no logic? No properties probably just methods.

//data flow idea
//on click => Game.boardclick() => check if within container bounds => => request gameboard.property=> check if tile is full  => check for win or tie => if continue, gameboard.update([updatedArray])
// =>  updates array =>gameboard calls displayController to update gameboard visual
const Player = (symbol, name) => {
    const displayName = () => {
        console.log(symbol);
    }
    const changeName = (newName) => {
        name = newName;
    }
    return {
        get name() {
            return name;
        },
        set name(newName) {
            changeName(newName);
        },
        symbol,
        displayName,
        name
    }
}

const gameBoard = (() => {
    let gameBoard = [0,0,0,0,0,0,0,0,0]
    const resetBoard = () => {
        gameBoard = [0,0,0,0,0,0,0,0,0];
    }
    const update = (tile, symbol) => {
        gameBoard[tile[1]] = symbol;
    }
    return {
        getGameBoard() {
            return gameBoard
        },
        resetBoard,
        update
    }
})()


const game = (() => {
    let player = undefined;
    let turnCount = 0;
    const boardClick = (e) => {
/*         console.log(e.target.id);
 */        if (e.target.innerHTML == "") {
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
    const start = () => {
        reset();
        buttonInit();
    }
    const reset = () => {
        displayController.reset();
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
        gameBoard.update(tileID, player.symbol)
        displayController.fillSquare(player.symbol, tileID)
        if (turnCount > 3 ) {
            let didWin = checkWin(gameBoard.getGameBoard())
            
            if (didWin) {
                win(player);   
            }
            if (!didWin && turnCount == 8) {
                tie();
            }
        }
        turnCount += 1;

    }
    const tie = () => {
        displayController.tie();
    }
    const win = (player) => {

        container.removeEventListener("click", handleEvent)
        displayController.win(player)
    }
    const checkWin = (gameboard) => {
        //check horizontal win
        for (let i = 0; i < 7; i=i+3) {
           if (gameboard[i] != 0 && (gameboard[i] == gameboard[i+1] && gameboard[i] == gameboard[i+2])) {     
            return true;
           }
        }
        //check vertical win
        for (let i = 0; i < 3; i++) {
            if (gameboard[i] != 0 && (gameboard[i] == gameboard[i+3] && gameboard[i] == gameboard[i+6])) {
                return true;
            }             
        }
        //diagonals
        if ((gameboard[0] == gameboard[4] && gameboard[0] == gameboard[8]) || (gameboard[2] == gameboard[4] && gameboard[2] == gameboard[6])) {
            return true;
        }
        return false;
    }
    const handleEvent = (event) => {
        boardClick(event);
    }
    const buttonInit = () => {
        const resetButton = document.querySelector(".resetButton")
        const submitButton = document.querySelector(".submitName")
        submitButton.addEventListener("click", (event) => {
            event.preventDefault();
            x.name = document.getElementById("playerOne").value;            
            o.name = document.getElementById("playerTwo").value;

        })
        resetButton.addEventListener("click", reset)
    }

    return {
        turnCount,
        boardClick,
        reset,
        handleEvent,
        start
    }

})()
const displayController = (() => {
    const msgContainer = document.querySelector(".messageContainer")
    const initBoard = () => {
        container.addEventListener("click", game.handleEvent)
        container.innerHTML = "";
        for (let i = 0; i < 9; i++) {
            gameSquare = document.createElement("div");
            gameSquare.classList.add("grid")
            gameSquare.id = "a"+i;
           container.appendChild(gameSquare)
        }
    }
    const reset = () => {
        initBoard();
        clearMessage();
    }
    const clearMessage = () => {
        msgContainer.textContent = "";
    }

    const fillSquare = (playerSymbol, tile) => {
        const container = document.querySelector(`#${tile}`)
        container.textContent = playerSymbol;
    }
    const win = (player) => {
        msgContainer.textContent = player.name + " has won the match!"
    }
    const tie = () => {
        msgContainer.textContent = "Tie Game!"
    }
    return {
        reset,
        fillSquare,
        win,
        tie,
    }
})()
const container = document.querySelector(".gameContainer")
x = Player("x", "greg");
o = Player("o", "steve");
game.start();


