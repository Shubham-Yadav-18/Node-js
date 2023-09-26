const { log } = require('console');
const os=require('os');
// info about current user
const user=os.userInfo();
console.log(user)

//  method return the system uptime in seconds
console.log(`The ststem uptime is ${os.uptime()} seconds`);

// get os info
const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freemem:os.freemem()
}
console.log(currentOS);
 