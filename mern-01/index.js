//if day is sat or sun it returns true else return false
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

