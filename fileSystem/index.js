//first  print all the folders then print only first three folders
console.log("Here are all the folders");
import fs from 'fs'
fs.readdir('folders', (err, dir) => {
    dir.forEach(dir => {
        
       console.log(dir);
       
    });
    console.log("first three folders");
for(let i = 0; i < 3;i++){
    console.log(dir[i]);
}
});
