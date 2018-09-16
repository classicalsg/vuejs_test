// src/server.js 
const express = require('express'); 
// Constants 
const PORT = 8082; 
const HOST = '0.0.0.0'; 
// App 
const app = express(); 
app.get('/', (req, res) => { 
    res.send('Hello world\n'); 
}); 
app.listen(PORT, HOST); 
console.log('Running on http://${HOST}:${PORT}');
