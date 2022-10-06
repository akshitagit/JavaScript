// Javascript program to print Niven Number till N.
//Niven Numbers: An integer that is divisible by the sum of its digits when written in that base.

var i,num,sum,temp,limit=50;
for(i=1;i<=limit;i++){
    num = i;
    sum = 0;
    temp = 0;
    while(num!=0){
        sum+=num%10;
        temp = num/10;
        
        num=(Math.floor(temp)).toFixed();
    }
    if(i%sum == 0){
        console.log(i);
    }
}