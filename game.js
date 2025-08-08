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


console.log('Game started: \n' + // Instructions for the game
    'Select a number between 1 and 9 to place your mark. \n' +
    ' 1 | 2 | 3 \n' +
    ' --------- \n' +
    ' 4 | 5 | 6 \n' +
    ' --------- \n' +
    ' 7 | 8 | 9 \n')


