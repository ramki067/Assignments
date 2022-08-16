
const os = require("os");

// get host name
const hostName = os.hostname();
console.log(hostName);
console.log(os.platform());


const colors = require('colors');
console.log('Hello'.red);
console.log('Welcome to Node JS'.rainbow);
