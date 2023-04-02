
let nome = prompt("Qual é o seu nome?");

let peso = parseFloat(prompt(nome + ', digite o seu peso. Exemplo: 82.0'))
let altura = parseFloat(prompt(nome + ', Digite o sua altura. Exemplo: 1.85'))
const calculoImc = (peso / (altura * altura)).toFixed(2);


if(calculoImc < 18.5) {
    alert("Seu imc é: "+ calculoImc + ".Abaixo do peso");
} else if(calculoImc >= 18.5 & calculoImc < 24.5) {
    alert("Seu imc é: "+ calculoImc + ".Peso ideal");
} else {
    alert("Seu imc é: "+ calculoImc + ".Acima do peso");
}



