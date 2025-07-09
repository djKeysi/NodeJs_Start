require("./module");

const person = {
  name: "Vladilen",
  age: 28,
};

function getName(p) {
  return p.name;
}

console.log(getName(person));

//node index запуск ноде
console.log(__filename); // глобальные переменные
console.log(__dirname);
