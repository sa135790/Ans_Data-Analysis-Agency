const http = require('http')
const fs = require('fs');
const {Console}  = require('console');

const dir = './public/';



const server =http.createServer((req,res)=>{

    if(req.url==='/'){
        render(res,'index.html') 
    }

    else if(req.url==='/about'){
        render(res,'about.html') 
    }

    else if(req.url==='/contact'){
        render(res,'contact.html') 
    }
    else{
        res.writeHead(300,{'content-type':'text/html'})
        res.end('<h1>Server Getting Error</h1>')
    }


    }).listen(3000,()=>{
        console.log('http://localhost:3000');

    })
        
    



  
    
    
    



 const render =(res,file)=>{
    fs.readFile(dir+ file,(err,data)=>{
        if(err){
            res.writeHead(300,{'content-type':'text/html'})
            res.end('<h1>Something wrong with your code</h1>')
            
        }
        res.writeHead(400,{'content-type':'text/html'})
        return res.end(data)
    });
    
} 



