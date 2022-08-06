// tipos primitivos

// nulo = undefined
var variavel;
console.log(variavel);
console.log(typeof(variavel));

//booleanos
var VouF = false;
console.log(VouF);
console.log(typeof(VouF));

//number
var numero = 1;
console.log(numero);
console.log(typeof(numero));

// string
var nome = 'pedro';
console.log(nome);
console.log(typeof(nome));

// como declarar variaveis global, local e constante

// var escopo global e local, pode ser alterado, se nao tiver um valor inicial sera tratado como null
var variavel = 'agno';
variavel = 'geisa';
console.log(variavel);
console.log(typeof(variavel));

// let escopo local de bloco, pode ser alterado, se nao tiver um valor inicial sera tratado como null
let variavel2 = 'agno';
variavel2 = 'aghata';
console.log(variavel2);
console.log(typeof(variavel2));

// const escopo local de bloco, so pode leitura, o valor inicial sera é obrigatorio e nao pode ser alterado
const constante = 'agno';
console.log(constante);
console.log(typeof(constante));

//  escopo global e local

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopolocal() {
    let escopolocal = 'local';
    console.log(escopolocal);
}
escopolocal();
//console.log(escopolocal); nao pode fora da função

/* // atribuição
  var atribuicao = 'agno';

  // comparação
  var comparacao = "0" == 0;
  console.log(comparacao);
  
  // comparação identica
  var comparacaoIdentica = "0" === 0;
  console.log(comparacaoIdentica); */


/*  // operadores aritméticos
 // adição
 var adicao = 1 + 1;
 console.log(adicao);
 //subtração
 var subtracao = 2 - 1;
 console.log(subtracao);
 //multiplicação
 var multiplicacao = 2 * 3;
 console.log(multiplicacao);
 //divisão real
 var divisaoReal = 6 / 2;
 console.log(divisaoReal);
 //divisão inteira
 var divisaoInteira = 5 % 2;
 console.log(divisaoInteira);;
 //potenciação
 var potenciacao = 2**10;
 console.log(potenciacao); */


/*  // operadores relacionais
 // maior que
 var maiorQue = 5 > 2;
 console.log(maiorQue);
 
 // menor que
 var menorQue = 5 < 2;
 console.log(menorQue);
 
 // maior ou igual a
 var maiorOuIgual = 5 >= 2;
 console.log(maiorOuIgual);
 
 // menor ou igual a
 var menorOuIgual = 5 <= 2;
 console.log(menorOuIgual); */


/*  // operadores lógicos
 // && - todos os valores devem ser true
 var e = true && true;
 console.log(e);
 // || - somente um valor deve ser true
 var ou = true || false;
 console.log(ou);
 // ! - inverte os valores
 var nao = !true;
 console.log(nao); */