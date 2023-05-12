// Always Hungry

// function alwaysHungry(arr) {
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i] == "food"){
//             console.log('yummy')
//         }
//         else{
//             console.log("I'm hungry")
//         }
//     }
//     return arr
// }

// alwaysHungry([3.14, "food", "pie", true, "food"]);
// // this should console log "yummy", "yummy"
// alwaysHungry([4, 1, 5, 7, 2]);
// // this should console log "I'm hungry"

// High Pass Filter

// function highPass(arr, cutoff) {
//     var filteredArr = [];
//     cutoff = 7
//     for(let i = 0; i <arr.length; i++){
//         if(arr[i] >= cutoff){
//             filteredArr.push(arr[i]);
//         }
//     }
//     // your code here
//     return filteredArr;
// }
// var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
// console.log(result); // we expect back [6, 8, 10, 9]

// Better than average

// function betterThanAverage(arr) {
    
//     // calculate the average
//     var count = 0
//     var sum = 0;
//     for(let i = 0; i<arr.length; i++){
//         sum += arr[i];
        
//     }
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i] > sum / arr.length){
//             count++
//     }
//     }
//     // count how many values are greated than the average
//     return count;
// }
// var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
// console.log(result); // we expect back 4

//Array Reverse

// function reverse(arr) {
//     let tempArr = []
//     // your code here
//     for(let i = arr.length-1; i >= 0; i--){
//         tempArr.push(arr[i])
//     }
//     return tempArr;
// }
// var result = reverse(["a", "b", "c", "d", "e"]);
// console.log(result); // we expect back ["e", "d", "c", "b", "a"]

//Fibonacci Array

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];

    for(let i = 2; i<n; i++){
        fibArr[i] = fibArr[i-2] + fibArr[i-1];
    }
    // your code here
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
