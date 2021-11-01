/**
 * Problem link: https://practice.geeksforgeeks.org/problems/find-minimum-and-maximum-element-in-an-array4428/1
 * 
 * Problem statement:
 * Given an array A of size N of integers. Your task is to find the minimum and maximum elements in the array.
 * 
 * Your task:
 * You don't need to read input or print anything.
 * Your task is to complete the function getMinMax() which takes the array A[] and its size N as inputs and returns the minimum and maximum element of the array.
 * 
 * Expected Time Complexity: O(N)
 * Expected Auxiliary Space: O(1)
 */

/**
 * Driver code starts here
 */
#include <bits/stdc++.h>

using namespace std;

#define ll long long

pair <long long, long long> getMinMax (long long input[], int n);

int main () {
    int t;
    cin >> t;

    while (t--) {
        int n;
        cin >> n;

        ll input[n];

        for (int i = 0; i < n; i++) {
            cin >> input[i];
        }

        pair<ll, ll> result = getMinMax(input, n);

        cout << result.first << " " << result.second << endl;
    }

    return 0;
}
/**
 * Driver code ends here
 */

pair <long long, long long> getMinMax (long long input[], int n) {
    ll minEl = input[0], maxEl = input[0];
    
    for (int i = 1; i < n; i++) {
        minEl = min(input[i], minEl);
        maxEl = max(input[i], maxEl);
    }

    return { minEl, maxEl };
}

/**
 * Sample test cases
 * 3
 * 6
 * 3 2 1 56 1000 167
 * 1
 * 12
 * 10
 * -1 -10 2 4 23 10000003 434343434 1202129 98 18
 */