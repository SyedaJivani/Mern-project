import http from 'http';
import express from 'express';

const app = express()
const port = 3000

app.set("view engine", "ejs" );
app.get('/', (req, res) => {
    let citiesOfPkistan =[
        {city:'Karachi',famousPlace:'Mazare Quaid'},
        {city:'Lahore',famousPlace:'Minare Pakistan'},
        {city:'Islamabad',famousPlace:'Margall Hills'},
        
    ]
    let comments="welcome to cities of Pakistan";

  res.render("index",{
      cities:citiesOfPkistan,
      note:comments
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})