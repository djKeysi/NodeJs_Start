const path = require("path");

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename).slice(1));
console.log(path.parse(__filename));
console.log(path.resolve(__dirname, "..", "./modules", "./app.js")); // пытается найти определенный файл
console.log(path.resolve(__dirname, "..", "./modules", "./app.js")); // берет и конткатенирет строчки
