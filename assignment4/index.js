
// sum of numbers in an array
function sum (){
    let a = [1,2,3,4,5];
    let sum = 0;
    for(let i = 0; i < a.length; i++){
        sum = sum + a[i];
        
    }
        console.log(sum);
}
sum()

//find out max value of array and then decrease the value to minimum

function numbers(){
    let b = [1,2,3,4,5];
    let c = Math.max(...b);
        console.log(c);

    for (let i = b.length-1; i >=0; i--){
        console.log(b[i]);
       
        }
 }
numbers()