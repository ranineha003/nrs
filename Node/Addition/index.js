console.log('hi');
const p1 = require('./module1');
console.log(p1.add(process.argv.splice(2)));
//console.log(p1.add(()=>{}));

console.log(__dirname);
console.log(__filename);
//console.log(process.env);
//console.log(process.argv);
