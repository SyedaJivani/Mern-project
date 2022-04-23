// create folder

import * as fs  from 'fs';


const DIR = 'ABC'

  fs.mkdir(DIR, (error) => {
    if(error){
      console.log('Folder exists already.')
    } else {
      console.log('New folder has been created.')
    }
  })
  // deleting folder

  fs.rmdir('XYZ', (error) => {
    if(error){
      console.log('file not found')
    } else {
      console.log('file has been deleted')
    }
  })

  //rename the folder
  const currPath = "EFG"
const newPath = "HIJ"

fs.rename(currPath, newPath, function(err) {
  if (err) {
    console.log("ERROR")
  } else {
    console.log("Successfully renamed the directory.")
  }
})
//delete file
fs.unlink('create.js', function (err) {
  if (err) throw err;
  // if no error, file has been deleted successfully
  console.log('File deleted!');
});

// rename file
let oldfile = "syeda.js"
let newfile = "module.js"
fs.rename( oldfile, newfile,function(err) {
  if (err) {
    console.log("ERROR")
  } else {
    console.log("Successfully renamed the directory.")
  }
})
