// commonJS , every file is module by default
// Modules - Encapsulated Code (only Share minimum)
const names=require('./4-names');
const sayHi=require('./5-utils'); 
const data=require('./6-alternative-flavour');
const addValues=require('./7-mind-grinade')
addValues();
console.log(data);
sayHi(names.john);