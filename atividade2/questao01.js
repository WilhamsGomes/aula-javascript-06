var txt = "abcdefghijklm";
console.log("Posição da letra H: " + txt.search("h"));

var txt2 = "Posso comer bananas o dia todo";
console.log(txt2.slice(12,19))

var txt3 = "Olá, mundo";
var substituir = txt3.replace("Olá", "Bem vindo");
console.log(substituir);

var txt4 = "olá, mundo";
var resultado = txt4.toUpperCase();
console.log(resultado)

var txt5 = "OLá, mundo";
var resultado2 = txt5.toLowerCase();
console.log(resultado2)

var txt6 = "Posso comer bananas o dia todo";
console.log(txt6.length)

//

let str1 = "Hello "
let str2 = "World"
let resultadoString = str1.concat(str2);
console.log(resultadoString)


//

const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
fruits.sort();
console.log(fruits)

fruits.splice(1,2)
console.log(fruits)

fruits.push("Kiwi")
fruits.push("Caju")
fruits.push("Uva")
fruits.sort();
console.log(fruits)

fruits.unshift("Pera")
fruits.unshift("Manga")

fruits.pop()

console.log(fruits)