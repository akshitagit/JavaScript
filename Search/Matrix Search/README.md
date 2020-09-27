# Matrix Search

## Description
    Given an n x m matrix, where every row and column is sorted in increasing order, and a number x. Find if element x is present in the matrix or not.

## How to Run
- Requires Node.js
- run ```node matrixSearch.js [inputFilename]```
    - e.g. ```node matrixSearch.js sampleInput.txt```

## Input
    First line consists of two space separated integers N and M, denoting the number of element in a row and column respectively. Second line of each test case consists of N*M space separated integers denoting the elements in the matrix in row major order. Third line of each test case contains a single integer x, the element to be searched.

## Output
    prints 0 if target is not in matrix 
    prints 1 if target is in matrix