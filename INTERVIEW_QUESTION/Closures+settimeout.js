//To create the setTimeout we need the closures . there is the task to print the numbers 1,2,3 after corresponding seconds means 1 after one second 2 after 2 seconds so on till 5 .To solve this problem we need setTimeout Normal we will do this
function a() {
    for (var i = 0; i <= 5; i++) {
        setTimeout(() => {
            console.log(i)
        }, i * 1000)
    }
}
a()
//But this will print 6 for 5 times after 1,2,3,4,5 seconds i.e
//after 1 sec 6
//after 2 sec 6
//after 3 sec 6
//after 4 sec 6
//after 5 sec 6
// This is due to closures setTimeout callback function is closured with a function with the variable i which is incrementing due to for loop . javascript will not pause because of this variable i already incremented to 6 till it is stored 5 different callback is created by referencing same variable i.e i which is globally attached to global object that's why it will not treat it as different variable because it is referencing same variable .It is solved by replacing var with let in for loop due to let has block scope it will treat as different value after every iteration which is the power of let .
// Another solution is to wrap up the setTimeout inside another function and pass i in that function through this i variable will treated as different value after every iteration 
function a() {
    for (var i = 0; i <= 5; i++)
        function closure(ivalue) {
            setTimeout(() => {
                console.log(ivalue)
            }, ivalue * 1000)
        }
    closure(i)
}
a()