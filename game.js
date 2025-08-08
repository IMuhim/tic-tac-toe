let grid = { // Tic Tac Toe grid
    1: '', 2: '', 3: '',
    4: '', 5: '', 6: '',
    7: '', 8: '', 9: ''
}

function displayGrid() { // Display the current state of the grid
    console.log('\n' +
        ' ' + grid[1] + ' | ' + grid[2] + ' | ' + grid[3] + '\n' +
        ' ---------\n' +
        ' ' + grid[4] + ' | ' + grid[5] + ' | ' + grid[6] + '\n' +
        ' ---------\n' +
        ' ' + grid[7] + ' | ' + grid[8] + ' | ' + grid[9] + '\n')
}

function plotGrid(move, mark) { // Plot the move on the grid with the player's move
    if (grid[move] !== '') {
        console.log('That space is already taken. Try again.')
    } else {
        grid[move] = mark
    }
}

let prompt = require('prompt') // Import the prompt module for user input

const winCombinations = [ // Winning combinations for the game
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // Horizontal
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // Vertical
    [1, 5, 9], [3, 5, 7] // Diagonal
]

function winCheck(player) { // Check if the player has won
    for (let i=0; i < winCombinations.length; i++) {
        if (grid[winCombinations[i][0]] === player &&
            grid[winCombinations[i][1]] === player &&
            grid[winCombinations[i][2]] === player) {
            return true
        }
    }
    return false
}

function tieCheck() { // A tie occurs when all spaces are filled and no player has won
    for (let i = 1; i <= 9; i++) {
        if (grid[i] === '') {
            return false
        }
    }
    return true
}

function playerInput (player) { // Prompts the player to make their move
    console.log("It's your turn, Player " + player)
    prompt.start()
    prompt.get(['move'], function (err, result) { // Get input from the player
        if (err) {
            console.error('Prompt error:', err)
            return
        }
        let move = result.move // The player's input is stored in move
        if (isNaN(move) || move < 1 || move > 9 || grid[move] !== '') { // Check if the input is invalid
            console.log('Invalid move. Try again.')
            playerInput(player)
        } else { // If the input is valid, plot the move on the grid
            plotGrid(move, player)
            displayGrid()
            if (winCheck(player)) {
                console.log(player + ' wins!')
                return
            } else if (tieCheck()) {
                console.log('It\'s a tie!')
                return
            }
            if (player === 'X') {
                playerInput('O')
            } else {
                playerInput('X')
            }
        }
    });

}

console.log('Game started: \n' + // Instructions for the game
    'Select a number between 1 and 9 to place your mark. \n' +
    ' 1 | 2 | 3 \n' +
    ' --------- \n' +
    ' 4 | 5 | 6 \n' +
    ' --------- \n' +
    ' 7 | 8 | 9 \n')


playerInput('X') // Start the game with player X