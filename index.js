
let days =(value) => {
    if (value == "sunday" || value == "saturday" ){
        console.log(true);
    }else{
       console.log (false);
    }
}
days("sunday")
days("monday")
days("saturday")


/*
let days =(value) => {
     a =["sunday","monday","tuesday","wednesday","saturday"];
    for(let i = 0; i < a.length; i++){
        if (a[i]== "sunday" || a[i] == "saturday"){
            console.log(true);
        }else{
            console.log(false)
        }
            
    }
}
days()
*/