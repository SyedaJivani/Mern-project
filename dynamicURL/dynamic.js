

import fs from 'fs'
import http from 'http'
import url from 'url';

var server = http.createServer(function(req, res){
    console.log(req.url);

    var myurl = url.parse(req.url,true).pathname;
    let result = myurl.trim();
    console.log(myurl);
    console.log(result);
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