function alwaysHungry(arr) {
var test=0;
    for(i=0;i<arr.length;i++){
    if(arr[i]=="food"){
        console.log("yummy");
        test++;
    }

}
if(test==0){console.log("I'm hungry");}

}

   
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"
//________________________________________________________


function highPass(arr, cutoff) {
    var filteredArr = [];
    for(i=0;i<arr.length;i++){
        if(arr[i]>cutoff){
            filteredArr.push(arr[i]);
            
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

//______________________________________________________________

function betterThanAverage(arr) {
    var sum = 0;
    for(i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    var avg=sum/arr.length;
    console.log(avg)
    var count = 0
    for(i=0;i<arr.length;i++){
        if(arr[i]>avg){
            count++;
        }

    }
        return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

//_______________________________________________________-


function reverse(arr) {
    var temp;
    var x=arr.length-1
    for(i=0;i<(arr.length/2);i++){
        temp=arr[i];
        arr[i]=arr[x-i];
        arr[x-i]=temp;
    }
    return arr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

//___________________________________________________________

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for(i=2;i<n;i++){
        fibArr[i]=fibArr[i-1]+fibArr[i-2];
    }
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]








