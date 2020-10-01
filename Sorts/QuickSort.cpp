#include <bits/stdc++.h>
using namespace std;

void quicksort(int* a,int low,int high){
	if(low>=high)
		return;
	int i=low-1,j=low;
	while(j<high){
		if(a[j]<=a[high]){
			i++;
			swap(a[i],a[j]);
		}
		j++;
	}
	i++;
	swap(a[i],a[high]);
	quicksort(a,low,i-1);
	quicksort(a,i+1,high);
}

int main(int argc, char const *argv[])
{
	int n;
	cin>>n;
	int a[n];
	for(int i=0;i<n;i++){
		cin>>a[i];
	}
	quicksort(a,0,n-1);
	for(int i=0;i<n;i++){
		cout<<a[i]<<" ";
	}
	cout<<endl;
	return 0;
}