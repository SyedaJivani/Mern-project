 //getting api by using fetch api
import express from 'express';

import fetch from 'node-fetch'

const app = express();
const PORT = 8080;


app.get('/promise/:id',function (req ,res){
  fetch(
    "https://v6.exchangerate-api.com/v6/5003ccf5b2bcf119d45d9c33/latest/USD"
  ).then((response) => response.json())
    .then((data) => {
        
        var getdata = data.conversion_rates;
        // console.log(getdata);
        const pkr = getdata.PKR;
        // console.log(pkr);
        // var idValue = req.params['id'];
        // var idValue = getdata.USD;
        // console.log(idValue);
        res.send(req.params.id)
        console.log(req.params.id* pkr);

    })
    .catch((err) => console.log(err));

});




app.listen(PORT);