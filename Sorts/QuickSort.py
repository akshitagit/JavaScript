def quicksort(arr):
    if len(arr)<=1:
        return arr
    else:
        pivot=arr[0]
        less=[i for i in arr[1::] if i<pivot]
        higher=[l for l in arr[1::] if l>=pivot]
        return quicksort(less)+[pivot]+quicksort(higher)

print(quicksort([1,2,3,3,0]))  
