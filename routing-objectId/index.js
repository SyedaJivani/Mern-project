
import express from 'express';
var app = express();
var port = 8000;
app.set('view engine', 'ejs');
app.get('/country/:id',function(req,res){
    const country =[
        {id:'US', countryName:"America", currency:"US Dollar"},
        {id:'PK', countryName:"Pakistan", currency:"PKR"},
        {id:'IR', countryName:"Iran", currency:"Toman"},
    ];
    var c = req.params['id'];
    var c = c.toUpperCase();
    
      
     const found = country.find(element =>element.id==c);
    console.log(found);
    console.log(c);
    // res.send(found);
    res.render("country",{
      country:found
    
   })
    
    
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
