
var nome = prompt("Qual é o seu nome?");

var idade = parseInt(prompt("Qual a sua idade?"));


if(idade <= 12) {
   alert(nome + " tem " + idade + " anos," + " por isso é criança");
} else if(idade >= 13 && idade < 18) {
    alert(nome + " tem " + idade + " anos," + " por isso é adolescente");
}else if(idade >= 18 && idade <= 60){
    alert(nome + " tem " + idade + " anos," + " por isso é adulto");
} else {
    alert(nome + " tem " + idade + " anos," + " por isso é idoso");
}



