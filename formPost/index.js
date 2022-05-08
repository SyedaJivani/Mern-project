console.log("formpost");
import express from 'express';
import bodyParser from 'body-parser';
import {dirname} from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const app = express();
const port = 8000;
//Api Middlewares
app.use(express.json()); //this is to accept json format
app.use(express.urlencoded()); //this is to decode data send through html file
 app.use(express.static('register.html'));
 app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended:true}));

//Api routes
 app.get('/register',function (req ,res){
     res.sendFile(__dirname + '/register.html');
 });

app.post('/formpost',urlencodedParser ,(req,res)=>{
    console.log(req.body);  //the data we get is in the body of request

     res.sendFile(__dirname + '/post.html'); //if want to go another html page

//      res.send("welcome" +req.body.name);
})




//this is to listen port
app.listen(port , function(){
    console.log(`your port is now running at ${port}`)
});