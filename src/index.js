// src/index.js
const Server = require('../server');  // Importing the server.js module

const server = new Server();
server.start();  // Accessing the server and calling the start method

// Dynamically update the page content from JavaScript
document.querySelector('p').textContent = 'This content was dynamically updated from index.js';
