
console.log("abc");
import fs from 'fs';
import http from 'http';

http.createServer(function (req , res){
    var dataContent = "This is content for test writing";

    var writer = fs.createWriteStream('write.txt');
    writer.write(dataContent, 'UTF-8');
    
    writer.end();
    writer.on('finish', function(){
        console.log("writing completed");
    }).on('error',function(err){
        console.log(err);

    })

// read and write stream
    var content = '';
    var reader = fs.createReadStream ('read.txt');
    reader.setEncoding('UTF-8');
    reader.on('error' , function(err){
        console.log(err);
    }).on('data' , function(chunk){
        content += chunk;

    }).on('end' , function(){
        res.on ('error' , function(err){
            console.log(err)
        });
        res.setHeader('200' ,{'Content-Type':'plain/text'})
        res.write(content);
        res.end();

})
}).listen(8080);