const http = require('http');
const express = require('express');
const fs = require('fs');
const PORT = 3000;

// Connecting Server using Node.js
const server = http.createServer((req,res)=>{
  res.writeHead(200,{'Content-Type': 'text/plain'});
  res.end('Hello World');
});

server.listen(PORT,()=>{
  console.log(`Server is listening on ${PORT}`);
  console.log("Sum of elements of array :",sumOfArray([10,11,12,13]));
})

//Connecting Server using express.js
const app = express();

app.get('/',(req,res)=>{
  res.send('Hello Wrold');
})

app.listen(PORT,()=>{
  console.log(`Server is listening on ${PORT}`);
})

//Function to add numbers in array
const sumOfArr = (req,res)=>{
  const arr = req.body;
  return arr.reduce((sum,i)=>sum += i,0);
}

//Function to add numbers in array
const sumOfArray = (array)=>{ 

  //by using reduce function
  return array.reduce((sum,i)=> sum += i,0);

  //by using tradional loop
  var sum = 0;
  for(var i=0;i<array.length;i++)
    sum += array[i];
  return sum;
}

// Asynchronous File Handling
const filename = 'data.txt';

fs.readFile(filename, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  const words = data.split(/\s+/).filter(word => word !== '');
  const wordCount = words.length;

  console.log(`Total word count in \'${filename}\': ${wordCount}`);
});
