const prompt = require('prompt-sync') ();

  console.log("\n");
  console.log(">>>>>>>>>>>>>> Departamento Pessoal <<<<<<<<<<<<<<<");
  console.log("\n");

var nome = prompt ("Digite o nome completo do colaborador ==>");
var horas = prompt ("Digite a quantidade de horas trabalhadas ==>");
var valorhora = prompt ("Digite o valor homem-hora ==>");
var desconto = prompt ("Digite o valor do desconto do INSS (Ex.: 0.10, 0.15 ==>");
var horaextra = prompt ("Digite a quantidade de horas extras. Caso não tenha digite 0 ==>")
  console.log("\n");

var salariobruto = horas * valorhora;
var inss = salariobruto * desconto;
var calculodeex = (valorhora * horaextra)/2;
var salarioliquido = salariobruto + calculodeex - inss;

  console.log(">>>>>>>>>>>>>> Contra-Cheque <<<<<<<<<<<<<<<");
  console.log("    Restaurante Self-Service Bom Apetite");
  console.log("  Nome do colaborador:", nome);
  console.log("\n");
  console.log("Salário Bruto ---------- R$", salariobruto .toFixed(2));
  console.log("Valor do INSS ---------- R$", inss .toFixed(2));
  console.log("Horas Extras (50%)------ R$",calculodeex .toFixed(2));
  console.log("Salário Líquido -------- R$", salarioliquido .toFixed(2));
