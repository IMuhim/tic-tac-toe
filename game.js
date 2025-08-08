let grid = { // Tic Tac Toe grid
    1: '', 2: '', 3: '',
    4: '', 5: '', 6: '',
    7: '', 8: '', 9: ''
}

function displaygrid() { // Display the current state of the grid
    console.log('\n' +
        ' ' + grid[1] + ' | ' + grid[2] + ' | ' + grid[3] + '\n' +
        ' ---------\n' +
        ' ' + grid[4] + ' | ' + grid[5] + ' | ' + grid[6] + '\n' +
        ' ---------\n' +
        ' ' + grid[7] + ' | ' + grid[8] + ' | ' + grid[9] + '\n')
}

console.log('Game started: \n' + // Instructions for the game
    'Select a number between 1 and 9 to place your mark. \n' +
    ' 1 | 2 | 3 \n' +
    ' --------- \n' +
    ' 4 | 5 | 6 \n' +
    ' --------- \n' +
    ' 7 | 8 | 9 \n')

