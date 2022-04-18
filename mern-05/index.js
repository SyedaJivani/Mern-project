// reduce function
console.log("reduce file");
function maxNum(){ 
let numbers = [1,2,3,4,5,6];
let max = numbers.reduce(function(a,b){
    return Math.max(a,b);
});
console.log(max);
}
maxNum()