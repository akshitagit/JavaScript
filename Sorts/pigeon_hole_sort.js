export default function pigeonholeSort(unsortedArray) {

    if (!Array.isArray(unsortedArray)) {
      throw new Error(`pigeonholeSort() expects an array! Found ${typeof unsortedArray}.`);
    }
  
    const pigeonhole = [];
  
    unsortedArray.forEach(number => {
      if (isNaN(number)) {
        throw new Error(`pigeonholeSort() expects an array of numbers! Found ${typeof number}.`);
      }
      // Add each number to its respective pigeonhole
      if (pigeonhole[number]) pigeonhole[number].push(number);
      else pigeonhole[number] = [number];
    });
  
    // Use reduce to flatten an array of arrays!
    return pigeonhole.reduce((a, b) => a.concat(b), []);
  
  }
  const unsortedArray = [721, 4, 117, 13, 10, 880, 4, 117, 88];
  const sortedArray = [4, 4, 10, 13, 88, 117, 117, 721, 880];

  pigeonholeSort(unsortedArray)