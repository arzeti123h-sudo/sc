/*Function
  - declaration
  - expression
*/

//declaration
/* 
  function name(parameter){
    codeblock;
    }

  parameter is optional
*/
function sayHi(){
  return "HIIIIIIIIIIIIIIII hoomans.";
}
console.log(sayHi());

function sapaName(name){
  return "my name is " + name;
}
console.log(sapaName("Arezzzzzzzz turu"));
console.log(sapaName("Affaaaaaaaaa konser"));

//e.g.
//menghitung luas persegi panjang menggunakan function
//Lp = p.l

function PersegiP(panjang, lebar){
  let luas = panjang*lebar;
  return "Luas persegi panjang adalah " + luas;
}
console.log(PersegiP(4, 5));
console.log(PersegiP(100, 63));

//luas segitiga dengan function
//Ls = 1/2 * alas * tinggi

function segitiga(alas, tinggi){
  let luas = 1/2*alas*tinggi;
  return "Luas segitiga ialah " + luas;
}
console.log(segitiga(5, 4))

//konversi suhu dari farenheit ke celcius usin function
// C = (5/9)*(f-32)

function suhu(f){
  let r = (5/9)*(f-32)
  return f + "F = " + r + "C" 
}
console.log(suhu(50));

//function expression

const hello = function(){
  return "Hi world"
}
console.log(hello)
console.log(hello())

/*
  1. sapa nama
  2. Lp
  3. Ls
  4. konversi suhu
*/

const sapa = function(jeneng){
  return "hi life, hi fate, hi " + jeneng
}
console.log(sapa)
console.log(sapa("manusia"))

const pP = function(p, l){
  let lP = p*l
  return "Luas persegi panjang = " + lP
}
console.log(pP)
console.log(pP(8, 5))
// 3.
const sg = function(a, t){
  let lS = 1/2*a*t
  return "Luas segitiga = " + lS
}
console.log(sg)
console.log(sg(8,2))
// 4.
const temp = function(F){
  let rumus = (5/9)*(F-32);
  return F + "F = " + rumus + "C";
}
console.log(temp);
console.log(temp(59));

//function Arrow;
const PP = (length, width) => "Luas Persegi Panjang adalah " + length*width;
console.log(PP(5, 6));

/*
  1. say hello
  2. sapa nama
  3. luas segitiga
  4. konfersi suhu
*/
const hai = () => "Helloo hai user!";
console.log(hai());

const greet = (nama) => "Hello " + nama;
console.log(greet("User"));

const triangle = (base, height) => "Luas segitiga adalah " + 1/2*base*height;
console.log(10, 4);

const KS = (f) => f + "F = " + (5/9)*(f-32) + "C";
console.log(KS(50));