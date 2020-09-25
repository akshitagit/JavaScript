#include <iostream>
using namespace std;

int HCF(int a, int b) {
   return (b == 0) ? a : HCF(b, a%b); 
}

int main() {
  
  int n;
  cin >> n;
  
  int nums[n];
  
  int hcf = 1;
  
  for(int i = 0; i < n ; i++) {
      cin >> nums[i];
      hcf = HCF(hcf, nums[i]);
  }
  
  cout << hcf << endl;
  return 0;

}
