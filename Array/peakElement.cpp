/**
 * Problem link: https://practice.geeksforgeeks.org/problems/peak-element/1
 * 
 * Problem statement:
 * 
 * An element is called peakElementIndex peak element if its value is not smaller than the value of its adjacent elements(if they exists).
 * Given an array arr[] of size N, find the index of any one of its peak elements.
 * Note: The generated output will always be 1 if the index that you return is correct. Otherwise output will be 0.
 * 
 * Expected Time Complexity: O(log N)
 * Expected Auxiliary Space: O(1)
 */

#include <bits/stdc++.h>

using namespace std;

class Solution {
    public:
        int getPeakElementIndex(int arr[], int n) {
            // Get the peak element
            int res = modifiedBinarySearch(arr, 0, n-1);
        
            if (n == 1) {
                return 0;
            } else if (n == 2) {
                if (arr[0] >= arr[1]) {
                    return 0;
                } else {
                    return 1;
                }
            }
            
            return res;
        }
    
    private:
        int modifiedBinarySearch(int arr[], int l, int r) {
            if (r >= l) {
                int mid = l + (r - l) / 2;
        
                // If the element is present at the middle itself
                if (mid == r) {
                    return r;
                }
                
                if (mid == 0) {
                    return 0;
                }
                
                if (arr[mid] >= arr[mid-1] && arr[mid] >= arr[mid+1]) {
                    return mid;
                }

                // If element is smaller than mid, then it can only be present in left subarray
                if (arr[mid+1] > arr[mid]) {
                    return modifiedBinarySearch(arr, mid + 1, r);
                }
                    
                // Else the element can only be present in right subarray
                return modifiedBinarySearch(arr, l, mid - 1);
            }

            return 0;
        }
};

/**
 * Driver code starts here
 */

int main() {
	int t;
	cin >> t;

	while (t--) {
		int n;
		cin >> n;

		int input[n];

		for (int i = 0; i < n; i++) {
			cin >> input[i];
		}

		bool output = 0;

		Solution sol;
		
		int peakElementIndex = sol.getPeakElementIndex(input, n);
		
		if (peakElementIndex < 0 && peakElementIndex >= n)
		    cout << 0 << endl;
		else {
		    if (n == 1 && peakElementIndex == 0)
		        output = 1;
		    else if (peakElementIndex == 0 && input[0] >= input[1])
		        output = 1;
		    else if (peakElementIndex == n-1 and input[n-1] >= input[n-2])
		        output = 1;
		    else if (input[peakElementIndex] >= input[peakElementIndex + 1] && input[peakElementIndex] >= input[peakElementIndex - 1])
		        output=1;
		    else
		        output=0;
		
            cout << output << endl;
		}
	}

	return 0;
}

/**
 * Driver code ends here
 */

/**
 * Sample test cases
 * 
 * 4
 * 3
 * 1 2 3
 * 13
 * 9 14 10 10 1 2 1 7 10 10 14 19 9
 * 1
 * 2
 * 2
 * 2 3
 */