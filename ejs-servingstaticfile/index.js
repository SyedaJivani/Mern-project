import express from 'express';

// import {dirname} from 'path';
// import { fileURLToPath } from 'url';
// const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express()
const port = 8000;

// set the view engine to ejs
app.set('view engine', 'ejs');
// app.use(express.static('public'))
app.use('/static', express.static('public/css'))

app.get('/', (req, res) => {
    

  res.render("index")
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })