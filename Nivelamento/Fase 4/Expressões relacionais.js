const prompt = require('prompt-sync') ();

  console.log("\n");
  console.log("¨¨¨¨¨¨¨¨¨¨¨¨¨ Expressões Relacionais ¨¨¨¨¨¨¨¨¨¨¨¨ \n");
  console.log("Esse programa serve para determinarmos se as expressões");
  console.log("abaixo são verdadeiras ou falsas. \n");
  console.log("Valores: x = 6.0, y = 2.0, z = 4.0, a = 8.0, b = 7.5, c = 12.0 \n");
  console.log("Simbologia: M - maior que; m - menor que; MI - maior ou igual; mi - menor ou igual; mod - resto; <> - diferente \n");
  
var x = 6.0;
var y = 2.0;
var z = 4.0;
var a = 8.0;
var b = 7.5;
var c = 12.0;

var expressaoa = (x - y) > a;
var expressaob = (x - y) * a > c % 2;
var expressaoc = y != c;
var expressaod = (x * y) != c;
var expressaoe = (c % y) <= (y % c);
var expressaof = a < b;
var expressaog = z / (a + x) * (y - 5) >= b;
var expressaoh = c * (z + 2) == a * (x + y);
var expressaoi = c == (z + b);
var expressaoj = (y * 2) != (7 - b);

  console.log("a) x - y M a  ==============>", expressaoa);
  console.log("b) x - y * a M c mod y =====>", expressaob);
  console.log("c) y <> c ==================>", expressaoc);
  console.log("d) x * y <> c ==============>", expressaod);
  console.log("e) c mod y mi y mod c ======>", expressaoe);
  console.log("f) a m b ===================>", expressaof);
  console.log("g) z/ a + x * y - 5 MI b ===>", expressaog);
  console.log("h) c * z + 2 = a * x + y ===>", expressaoh);
  console.log("i) c = z + b ===============>", expressaoi);
  console.log("j) y * 2 <> 7 - b===========>", expressaoj);