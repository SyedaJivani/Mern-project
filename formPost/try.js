// after form post .. the user wil be take to the page where user name will be written what he entered in form
import express from 'express';
import path from'path';
import bodyParser from 'body-parser';
import {dirname} from 'path';
import { fileURLToPath } from 'url';


const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 8000;



app.get('/register',function (req ,res){
    res.sendFile(__dirname + '/register.html')
   
});
app.use(bodyParser.urlencoded({ extended:true}));
// app.use(bodyParser.json());
app.post('/post.html',(req,res)=>{
    console.log(req.body);  //the data we get is in the body of request

    //  res.sendFile(path.join(__dirname + '/post.html')); //if want to go another html page
    res.send("welcome"   +req.body.name);
})

//this is to listen port
app.listen(port , function(){
    console.log(`your port is now running at ${port}`)
});