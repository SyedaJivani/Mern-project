import express from 'express';
const app = express();
const port = 8000;

app.get('/contact/:id(\\d+)/forms/:formid(\\d+)', function(req ,res){
    res.sendFile('contact.html', {root: './' });
    // res.send(req.params.formid);
    //  res.send("hello contact");
});
app.listen(port , function(){
        console.log(`your port is now running at ${port}`)
});