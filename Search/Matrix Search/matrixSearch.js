let args = process.argv;
// console.log(args);

args.length === 3 && searchInputFile(args[2]);

function searchInputFile (fileName) {
    const fs = require('fs');
    let data = fs.readFileSync(fileName, 'utf8');

    const { matrix, target, amountRows, amountColumns } = parseMatrixAndTarget(data);

    const row = getRow(matrix, target);
    
    console.log(findTargetInRow(matrix, row, target));
}

function findTargetInRow(matrix, row, target) {
    for (let i = 0; i < matrix[row].length; i++) {
        if (matrix[row][i] === target) return 1;
    }
    return 0;
}

function getRow(matrix, target) {
    let row = 0;
    while (row < matrix.length && matrix[row][matrix[row].length - 1] < target) {
        row++;
    };
    return row;
}

function parseMatrixAndTarget (data) {
    let matrix = [];
    let i = 0;
    let amountRows = getNextWord(data, i);
    i = amountRows.i;
    amountRows = Number.parseInt(amountRows.word);
    let amountColumns = getNextWord(data, i);
    i = amountColumns.i;
    amountColumns = Number.parseInt(amountColumns.word);
    for (let row = 0; row < amountRows; row++) {
        matrix.push([]);
        for (let col = 0; col < amountColumns; col++) {
            let tmp = getNextWord(data, i);
            i = tmp.i;
            matrix[row].push(tmp.word);
        }
    }
    i = getNextWord(data, i).i;
    const target = getNextWord(data, i).word;
    return { matrix, amountRows, amountColumns, target };
}

function getNextWord (string, i) {
    let word = '';
    while (string[i] !== ' ' && string[i] !== '\n' && i < string.length) {
        word = word + string[i++];
    };
    i++;
    return { word, i };
}
