/*
Problem statement:
Given an array of integers, determine the minimum number of elements to delete to leave only elements of equal value.

Example:
arr = [1, 2, 3, 4]

Delete the 2 elements 1 and 3 leaving arr = [2, 2].
If both twos plus either the 1 or the 3 are deleted, it takes 3 deletions to leave either [3] or [1].
The minimum number of deletions is 2.
*/

#include <bits/stdc++.h>

using namespace std;

int findMaxOccurence (map<int, int> &list) {
    int max = 0;
    for (map<int, int>::iterator i = list.begin(); i != list.end(); ++i) {
        if ((*i).second > max)
            max = (*i).second;
    }
    
    return max;
}

int main () {
    int n, elem;
    cin >> n;

    int p = n;
    map<int, int> list;

    while (n--) {
        cin >> elem;
        list[elem]++;
    }

    cout << p - findMaxOccurence(list);

    return 0;
}

/*
Sample test case:

5
3 3 2 1 3

*/