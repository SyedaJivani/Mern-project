let num;
let string;
function params(num,string){
    
    for(i = 0; i < num; i++){
        setTimeout(function(){ 
        console.log(string)
    },1000*i)
}


}

params(5,"hello my name is Syeda")

