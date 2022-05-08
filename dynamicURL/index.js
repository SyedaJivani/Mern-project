console.log("redirection");

import fs from 'fs'
import http from 'http'
import url from 'url';

http.createServer(function(req ,res){
    if(req.url === '/about'){
        fs.readFile('about.html' , 'utf8' ,(err , data) =>{
            if (err){
                console.error(err)
                return
            }
            res.end(data);
        })
    }
}).listen(8080);