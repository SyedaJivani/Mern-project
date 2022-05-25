import express from 'express';
import path from 'path';
import {dirname} from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port= 8000;

// app.use(express.static('public'))

app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/',(req,res)=>{
    res.send('hello');
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
