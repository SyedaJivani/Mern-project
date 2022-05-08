console.log('hello');
import fs from 'fs';
import http from 'http';

http.createServer(function(req , res){
//     fs.readFile('object.js', 'utf-8' ,(err , data) =>{
    
//         if(err){
//             console.error(err)
//             return
//         }
//         res.end(data);
        
//     })
    let person = {
    firstName:"Syeda",
    lastName:"Jivani",
    Age:28,
    profession:"Web Developer"
    };
    var obj = JSON.stringify(person);
res.end(obj);

}).listen(8080);