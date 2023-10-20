/*
	Node Zipper
*/

/*
external modules consumed in the project
*/
const fs = require('fs')
const path = require('path')
const zl = require("zip-lib")

// The path intended to read
const directoryName = 'node_modules'

// The path read from the console
const Path = process.argv.slice(2).toString();

// Method to make all the node_modules into a zip file
function ZipCreater(directoryPath) {
    // variables
    let files = fs.readdirSync(directoryPath);
	
    for(let x in files) { 
        let next = path.join(directoryPath, files[x])
       
        if(fs.lstatSync(next).isDirectory() == true){ 
		
            if(next.split('\\').pop() == directoryName){
                zip_path = directoryPath +"\\"+ "node_modules.zip"
                
                zl.archiveFolder(next, zip_path).then(function () {
                    console.log("Zip folder is created...");
                }, function (err) {
                    console.log(err);
                }).then(function(){
                    // deleting the node_modules after creating the zip file
                    fs.rmdir(next, { recursive: true }, err => {
                        if (err) {
                          throw err
                        }
                        console.log(`${directoryName} The folder is deleted...!`)
						
                      }); 
					  
                });     
            }
           ZipCreater(next)
        }
    }
	
}
ZipCreater(Path);