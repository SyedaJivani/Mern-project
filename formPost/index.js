// form post will take user to another welcome page
import express from 'express';
import bodyParser from 'body-parser';
import {dirname} from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
const urlencoded = bodyParser.urlencoded({ extended: true });
const app = express();
const port = 8000;

//Api routes
 app.get('/register',function (req ,res){
     res.sendFile(__dirname + '/register.html')
    
 });

app.post('/post.html',urlencoded ,(req,res)=>{
    console.log(req.body);  //the data we get is in the body of request

     res.sendFile(__dirname + '/post.html'); //if want to go another html page

//      res.send("welcome" +req.body.name);
})




//this is to listen port
app.listen(port , function(){
    console.log(`your port is now running at ${port}`)
});