const recursiveSum = (x, result = 0) => {
   if(x){
      return recursiveSum(Math.floor(n/10), res+Math.pow((n%10),2));
   };
   return result;
};
const isHappyNumber = (n, resMap = {}) => {
   if(n !== 1){
      if(resMap[n]){
         return false;
      }
      resMap[n] = 1;
      return isHappyNumber(recursiveSum(n), resMap);
   };
   return true;
}
