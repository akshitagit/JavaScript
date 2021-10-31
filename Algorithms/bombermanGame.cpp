/**
 * Problem link: https://www.hackerrank.com/challenges/bomber-man/problem
 * 
 * Problem statement is too big to place here. Please read it on the link given above.
 */

#include <iostream>
#include <vector>
#include <limits>
#include <algorithm>

using namespace std;

void changeAdjacentCell(vector<vector<char>> &board, int row, int col) {
    vector< vector<char> > arr(row + 2, vector<char>(col + 2));
    arr = board;

    for (int i = 0; i < row; i++) {
        for (int j = 0; j < col; j++) {
            if (arr[i + 1][j + 1] == '1') {
                board[i + 1][j + 1] = '.';
                board[i + 1][j] = '.';
                board[i + 1][j + 2] = '.';
                board[i][j + 1] = '.';
                board[i + 2][j + 1] = '.';
            }
        }
    }

    for (int i = 0; i < row; i++) {
        for (int j = 0; j < col; j++) {
            if (board[i + 1][j + 1] != '.') {
                board[i + 1][j + 1] = '2';
            }
        }
    }
}

void state1(vector<vector<char>> &board, int row, int col) {
    for (int i = 0; i < row; i++) {
        for (int j = 0; j < col; j++) {
            if (board[i + 1][j + 1] == 'O')
                board[i + 1][j + 1] = '2';
            else
                board[i + 1][j + 1] = '.';
        }
    }
}

void state2(vector<vector<char>> &board, int row, int col) {
    state1(board, row, col);

    for (int i = 0; i < row; i++) {
        for (int j = 0; j < col; j++) {
            if (board[i + 1][j + 1] == '2')
                board[i + 1][j + 1] = '1';
            else
                board[i + 1][j + 1] = '3';
        }
    }
}

void state3(vector<vector<char>> &board, int row, int col) {
    state2(board, row, col);
    changeAdjacentCell(board, row, col);
}

void state4(vector<vector<char>> &board, int row, int col) {
    state3(board, row, col);

    for (int i = 0; i < row; i++) {
        for (int j = 0; j < col; j++) {
            if (board[i + 1][j + 1] == '.')
                board[i + 1][j + 1] = '3';
            else if (board[i + 1][j + 1] == '2')
                board[i + 1][j + 1] = '1';
        }
    }
}

void state5(vector<vector<char>> &board, int row, int col) {
    state4(board, row, col);
    changeAdjacentCell(board, row, col);
}

void state6(vector<vector<char>> &board, int row, int col) {
    for (int i = 0; i < row; i++) {
        for (int j = 0; j < col; j++) {
            if (board[i + 1][j + 1] == '2')
                board[i + 1][j + 1] = '1';
            else if (board[i + 1][j + 1] == '.')
                board[i + 1][j + 1] = '3';
        }
    }
}

int main() {
    int row, col, n;
    cin >> row >> col >> n;

    vector<vector<char>> board(row + 2, vector<char>(col + 2));

    for (int i = 0; i < row; i++) {
        for (int j = 0; j < col; j++) {
            cin >> board[i + 1][j + 1];
        }
    }

    if (n == 1) {
        state1(board, row, col);
    } else if (n == 2) {
        state2(board, row, col);
    } else if (n % 4 == 3) {
        state3(board, row, col);
    } else if (n % 4 == 0) {
        state4(board, row, col);
    } else if (n % 4 == 1) {
        state5(board, row, col);
    } else if (n % 4 == 2) {
        state6(board, row, col);
    }

    for (int i = 0; i < row; i++) {
        for (int j = 0; j < col; j++) {
            if (board[i + 1][j + 1] == '.')
                cout << '.';
            else
                cout << 'O';
        }
        cout << endl;
    }

    return 0;
}

/*
Sample test case

6 7 3
.......
...O...
....O..
.......
OO.....
OO.....

*/