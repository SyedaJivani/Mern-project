import express from 'express';
const app = express();
const port = 8000;
app.set('view engine', 'ejs');
app.use(express.static('public'))
// app.use('/static', express.static('public/css'));
app.get('/login',function(req,res){
  // res.sendFile(__dirname + '/login.ejs')
  res.render("login")
    
});
app.get('/register',function(req,res){
// res.sendFile(__dirname + '/login.ejs')
  res.render("register")
    
});

const student =[
  {id:'1', Name:"Ali", Age:20, Course:"BCA", MarksObtained:79},
  {id:'2', Name:"Hasan", Age:21, Course:"BBA", MarksObtained:82},
  {id:'3', Name:"Sana", Age:21,Course:"M.tech", MarksObtained:75},
  {id:'4', Name:"Amna", Age:22,Course:"B.Tech", MarksObtained:95},
  {id:'5', Name:"Sara", Age:21, Course:"BCA",MarksObtained:85},
  {id:'6', Name:"Abbas", Age:22,Course:"BBA", MarksObtained:78},
  {id:'7', Name:"Rida", Age:20, Course:"BCA",MarksObtained:74},
  {id:'8', Name:"Raza", Age:20,Course:"BCA", MarksObtained:77},
  {id:'9', Name:"Rabab", Age:20,Course:"B.Tech", MarksObtained:87},
  {id:'10', Name:"Saba", Age:20, Course:"BBA",MarksObtained:97}
];
app.get('/index/:id',function(req,res){
  var s = req.params['id'];
    
    
      
  const studentId = student.find(element =>element.id==s);
  console.log(studentId);
    
  // res.send(found);
    
  res.render("index",{
    studentId:studentId
    
  })
    
    
});




      
      

  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
  