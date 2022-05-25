import express from 'express';

const app = express();
const PORT = 8000;
app.get('/',function (req,res){

const getSalaries = ()=>{
    let salaries = [30000 ,400000, 50000, 600000];
    return new Promise((resolve , reject)=>{
        resolve(salaries[1]);
    });
}


const getbio = ()=>{
    let userData = {
        "1":{
            fname :"Ali",
            lname : "Ahmed",
            age :23
        },
        "2":{
            fname :"Muntazar",
            lname : "Mahdi",
            age :25
        }
    };
    return new Promise ((resolve,reject)=>{
        resolve(userData[1]);
    });

}
const message= ()=>{
    let msg ="hello your salary has been transferred ";
    return new Promise ((resolve,reject)=>{
        resolve(msg);
    });

}
// getting data using promises
// getSalaries().then((salaries)=>{
//     console.log(salaries);
//     return getbio();
// }).then((userData)=>{
//     console.log(userData);
//     return message();
// }).then((msg)=>{
//     console.log(msg);
//  })


// async await
async function resolveApis(){
    const salaries = await getSalaries();
    const userData = await getbio();
    console.log(userData);
    console.log(salaries);

    let str ="all apis getting success";

    return str;

}
resolveApis().then((myresult) => {
    console.log(myresult);
});
});



app.listen(PORT);
