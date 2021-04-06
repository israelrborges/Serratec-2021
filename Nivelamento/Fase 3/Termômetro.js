const prompt = require('prompt-sync') ();

  console.log("Termômetro \n");
  var celsius = prompt ("Digite a temperatura em graus celcius:");
  console.log(celsius + "ºC");

  var fah = (celsius * 9) / 5 + 32;
  console.log("A temperatura de " + celsius + "º Celsius equivale a " + fah + "º Fahrenheich");
