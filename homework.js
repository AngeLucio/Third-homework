'use strict'

const { prototype } = require("combined-stream");

// Las funciones nFactoria y nFibonacci deben resolverlas
// usando recursión. Una vez realizadas de esa forma pueden probar hacerlas
// de forma iterativa pero esto último no es obligatorio.

// --------------------- nFactorial: por iteracion ------------------------------

function nFactorial(n) {
  var facto = 1;

for ( var i = n ; i >=1  ; i--) {
    facto = facto * i; 
    
     
  
	} 
return facto;
}


nFactorial(5)


// -------------------------- nFactorial por recursion ----------------------------------
function nFactorial(n){ 
  if (n === 0) {
    return 1;
  }
  
  return n* nFactorial(n-1)
}

nFactorial(5)


function nFibonacci(n) {
  // Secuencia de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,…
  // Retorna el enésimo numero de la serie
  // nFibonacci(0) // 0  // el elemento 0 es cero
  // nFibonacci(1) // 1 // el elemento 1 es 1
  // nFibonacci(6) // 1 // el elemento 6 es 8
  
  //------------------ por iteracion --------------------------
    
  // Cantidad de números que deseamos imprimir
	var fibo = [0,1];

	for( let i=2; i <= n; i++){
		fibo[i] = (fibo[i-2] + fibo[i-1]);
		  	
	}
    return (fibo[n]);
}

// --------revisar--------------- por Recursion ------------------------------

  // if( n === 0 || n === 1 ){ return (n)
  //  } else { 
  //    return ( nFibonacci( n-1 ) + nFibonacci( n-2 ) );
  //  }

  // }


// Para esta parte no es necesario utilizar recursión.
// Implementa la clase Queue que debe contener los siguientes métodos:
// enqueue: Agrega un valor a la queue. Respeta el orden existente.
// dequeue: Remueve un valor de la queue. Obedece a FIFO y respeta el underflow (devuelve undefined cuando la queue tiene size cero, o sea, cuando no tiene ningún elemento).
// size: Devuelve el número de elementos que contiene la queue.


function Queue() {
  this.array = [];
}

Queue.prototype.enqueue = function (array) {
  return this.array.push(array);
}

Queue.prototype.dequeue = function (array) {
  return this.array.shift(array);
  
}

Queue.prototype.size = function (array) {
  return this.array.length;
}

var cars = new Queue();

cars.enqueue("hola");
cars.enqueue("chau");
cars.enqueue("adios");

console.log(cars)

console.log(cars.dequeue());
console.log(cars);

console.log(cars.size())

// esto solo crea el constructor pero para utilizarlo necesito asignarselo a una variable, cars por ejemplo
// luego todas las funciones que creamos son parte de cars, asi podemos agregar y quitar objetos.


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
