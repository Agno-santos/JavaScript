//o que são vetores ou matrizes

//1- como declarar um array
//deve ser declarado entre colchetes "[]";

//let array = ['string', 1, true];
//console.log(array);

//como um array pode guardar difentes valores inclusive outras matrizes

let array = ['string', 1, true, ['array1'],
    ['array2'],
    ['array3'],
    ['array4']
];
console.log(array);

/* // como acessar o índice de uma matriz
console.log(array[0]); */


//manipulando uma matriz

//forEach - realiza uma função para cada item do array
//array.forEach(function(item, index) { console.log(item, index); })

//push - adicionar item sem final do array
//array.push('novo item');
//console.log(array);

//pop - remover o último item do array
//array.pop();
//console.log(array);

//shift - remover o primeiro item do array
//   array.shift();
//  console.log(array);

//unshift - adicionar item sem início do array
//  array.unshift('novo item');
//  console.log(array);

//indexOf - retorna o índice de um item do array
//  console.log(array.indexOf(true));

//emenda - remover ou substituir item por índice
//array.splice(0, 2);
//console.log(array);

//fatia - retorna uma parte de uma matriz existente 
//let novoArray = array.slice(0, 3);
//console.log(novoArray);


 // o que são objetos como declarar um objeto
let objeto = propriedade1: 'valor1', propriedade2: 'valor2' }
//deve ser declarado entre chaves "{}";
console.log(objeto); 

//assim como matrizes como propriedades de objetos pode guardar quaisquer valores que objeto = { string: 'string', número: 1, booleano: verdadeiro, array: ['array'], objectInterno: { objetoInterno: 'objeto Interno' } };

/* // como acessar propriedades de objetos
usando ponto "."
console.log (object.objectInterno); */

//manipulando objeto desestruturando objeto
/* let string = objeto.string;
let number = objeto.number;
let boolean = objeto.boolean; */


// desestruturando usando chaves 
//let { string, number, boolean } = objeto; 
//console.log(string, number, booleano);