// require , export, module,_dirname, _filename 

//console.log(__dirname);
//console.log(__filename);
//chunk is a callback function use to create method such as get put delete set
// When you use a method like that you have to use response.on in liue of response.writeHead

let name = ['Rahim','Karim','Sattar'];
let age = [30,40,50];

//module.exports.name = name 
//module.exports.age = age
                           //Both are same // How to create module 
  exports.name = name 
  exports.age = age
  exports.data = [1,2,3]
  module.exports.apple = 'apple'



console.log(module);