
import express from 'express';

import fetch from 'node-fetch'

const app = express();
const PORT = 8080;


app.get('/fetch/:id',function (req ,res){

// async function getPKR() {
//   let response = await fetch("https://v6.exchangerate-api.com/v6/5003ccf5b2bcf119d45d9c33/latest/USD");
//   let data = await response.json()
//   return data;
// }
// getPKR()
//   .then(data =>{
//       console.log(data);
    
//     var getdata = data.conversion_rates;
//     console.log(getdata);
//     const pkr = getdata.PKR;
//     console.log(pkr);
//      res.send(req.params.id)
//      console.log(req.params.id* pkr);

//         })

async function getResponse() {
	const response = await fetch(
		'https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel?distance=100&vehicle=SmallDieselCar',
		{
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'carbonfootprint1.p.rapidapi.com',
				'x-rapidapi-key': 'your_api_key'
			}
		}
	);
	const data = await response.json(); // Extracting data as a JSON Object from the response
  console.log(data);
}

     });
        
    

  app.listen(PORT);