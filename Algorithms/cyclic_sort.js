function cycleSort(array) {
    // loop from the beginning of the array to the second to last item
    for (let currentIndex = 0; currentIndex < array.length - 1; currentIndex++) {
      // save the value of the item at the currentIndex
      let item = array[currentIndex]
  
      let currentIndexCopy = currentIndex
      // loop through all indexes that proceed the currentIndex
      for (let i = currentIndex + 1; i < array.length; i++)
        if (array[i] < item)
          currentIndexCopy++
  
      // if currentIndexCopy has not changed, the item at the currentIndex is already in the correct currentIndexCopy
      if (currentIndexCopy == currentIndex)
        continue
  
      // skip duplicates
      while (item == array[currentIndexCopy])
        currentIndexCopy++
  
      // swap
      let temp = array[currentIndexCopy]
      array[currentIndexCopy] = item
      item = temp
  
      // repeat above steps as long as we can find values to swap
      while (currentIndexCopy != currentIndex) {
        currentIndexCopy = currentIndex
        // loop through all indexes that proceed the currentIndex
        for (let i = currentIndex + 1; i < array.length; i++)
          if (array[i] < item)
            currentIndexCopy++
  
        // skip duplicates
        while (item == array[currentIndexCopy])
          currentIndexCopy++
  
        // swap
        temp = array[currentIndexCopy]
        array[currentIndexCopy] = item
        item = temp
      }
    }
  }
  
  let array = [12, 11, 15, 10, 9, 1, 2, 3, 13, 14, 4, 5, 6, 7, 8]
  cycleSort(array)
  alert(array)