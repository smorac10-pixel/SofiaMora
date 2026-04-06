//ejercicio 1 precio con iva//
function PrecioConIva(){
    let precio = parseFloat(document.getElementById("Precio").value)
    let Iva = parseFloat(document.getElementById("Iva").value);
    let precioFinal = precio + (precio * (Iva / 100));
    document.getElementById("resultado").value = precioFinal
} 


//ejercicio 2 area y perimetro de un cuadrado//
function calcularAreayperimetro(){
    let lado = parseFloat(document.getElementById("Lado").value)
    let area = lado * lado;
    let perimetro = 4 * lado;
    document.getElementById("area").value = area
    document.getElementById("perimetro").value = perimetro
}

//ejercicio 3 sacar decenas y unidades de un numero//
function DecenasYUnidades(){
    let numero = parseInt(document.getElementById("Numero").value)
    let decenas = Math.floor(numero / 10);
    let unidades = numero % 10;
    document.getElementById("decenas").value = decenas
    document.getElementById("unidades").value = unidades
}


//ejercicio 4 calcular las cantidades de ingredientes necesarias segun la cantidad de comensales//
function CalcularIngredientes(){
    let comensales = parseInt(document.getElementById("Personas").value)
    const gramosdepatatas= comensales * 200
    const patataskilos = gramosdepatatas / 1000;
    const huevos = patataskilos * 5;
    const cebolla = patataskilos * 300;
    document.getElementById("patatas").value = patataskilos + " kg"
    document.getElementById("huevos").value = huevos + " huevos"
    document.getElementById("cebolla").value = cebolla + " gramos"
}

//ejercicio 5 Adivinar un numero entre 1 y 100//

    let intentos = 15;
    let listaintentos = [];
    let NumeroSecreto = Math.floor(Math.random() * 100)                                                   // El Math.random genera el número secreto al inicio //
function AdivinarNumero(){
    if (intentos===0){                                                                                    //termina el juego cuando se acaben los intentos//
        alert("¡perdiste! Te has quedado sin intentos, Recarga la página para jugar de nuevo.")
        return;
    }
    let NumeroIngresado = parseInt(document.getElementById("NumeroIngresado").value)                     // Capturar lo que escribió el usuario//
    document.getElementById("intentos").value = intentos
    listaintentos.push(NumeroIngresado)
    intentos = intentos - 1;
    if (NumeroIngresado === NumeroSecreto){
        alert("¡Felicidades! Has adivinado el número secreto.")
    } else if (NumeroIngresado < NumeroSecreto){
        document.getElementById("resultadoAdivinar").value = "El número es mayor. ¡Sigue intentando!";
    } else if (NumeroIngresado > NumeroSecreto){
        document.getElementById("resultadoAdivinar").value = "El número secreto es menor. Intenta de nuevo."
    }
}


//ejercicio 6 generar la serie de Fibonacci//

function GenerarSerie() {
    let cantidad = parseInt(document.getElementById("cantidadNumeros").value);                                //Leer cuántos números quiere ver el usuario//
    let serie = [0, 1];                                                                                       //Crear la lista con los dos primeros números (siempre son 0 y 1)//
    for (let i = 2; i < cantidad; i++) {                                                                      //suma los números anteriores// y los agrega a la lista//
        let siguienteNumero = serie[i - 1] + serie[i - 2];
        serie.push(siguienteNumero);
    }
    if (cantidad === 1) {
        serie = [0];
    }
    document.getElementById("resultadoSerie").value = serie.join(", ");
}

//ejercicio 7 comparar dos numeros y decir cual es mayor o si son iguales//

function calcularMayoroIgual() {
    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("num2").value)
    if (num1 > num2) {                                 
        document.getElementById("esMayor").value = "El mayor es: " + "El primer numero";
    } else if (num2 > num1) {
        document.getElementById("esMayor").value = "El mayor es: " + "El segundo numero";
    } else {
        document.getElementById("esMayor").value = "Los números son iguales.";
    }
}

//ejercicio 8 calcular el factorial de un numero//

function CalcularFactorial() {
    let numero = parseInt(document.getElementById("numFactorial").value)
    let factorial = 1
    if (numero < 0) {
        alert("¡Error! No se puede calcular el factorial de un número negativo.");
        return;
    }
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    document.getElementById("resFactorial").value ="El factorial de " + numero + " es: " + factorial;
}

//ejercicio 9 buscar los multiplos de 6 entre dos numeros ingresados por el usuario//

function BuscarMultiplos() {
    let num1 = parseInt(document.getElementById("numero1").value)
    let num2 = parseInt(document.getElementById("numero2").value)
    let minimo = Math.min(num1, num2);                                                                 // El Math.min encuentra el número menor entre los dos ingresados, para que el ciclo FOR empiece desde ahí //
    let maximo = Math.max(num1, num2);
    let multiplosDeSeis = [];                                                                          // Creamos una lista vacía para guardar los múltiplos de 6 que encontremos //

    for (let i = minimo; i <= maximo; i++) {                                                           // El ciclo FOR recorre todos los números entre el mínimo y el máximo // 
        if (i % 6 === 0) {                                                                             // Si el número es múltiplo de 6 (es decir, si el resto de dividirlo entre 6 es 0) //
            multiplosDeSeis.push(i);
        }
    }
    if (multiplosDeSeis.length === 0) {                                                                // Si no encontramos ningún múltiplo de 6, mostramos un mensaje indicando que no hay múltiplos en ese rango //
        document.getElementById("resMultiplos").value = "No hay múltiplos de 6 en este rango.";
    } else {
        document.getElementById("resMultiplos").value = multiplosDeSeis.join(", ");
    }
}

//ejercicio 10 generar 20 numeros aleatorios entre 1 y 100, guardarlos en una lista, y luego crear dos listas nuevas, una con los números pares y otra con los impares//

function procesarNumeros() {
    let original =[]                                                       //Crear las 3 listas (arreglos) vacías//
    let pares = []
    let impares = []
    for (let i = 0; i < 20; i++) {                                        //Ciclo para generar 20 números aleatorios//    
        let numAleatorio = Math.floor(Math.random() * 101)                //Generar un número aleatorio entre 1 y 100//
        original.push(numAleatorio)                                       //Agregar el número generado a la lista "original"//
        if (numAleatorio % 2 === 0) {                                         //Si el número es par (es decir, si el resto de dividirlo entre 2 es 0)//
            pares.push(numAleatorio)                                              //Agregar el número a la lista "pares"//
        }   
        else {                                                                      //Si el número no es par, entonces es impar//
            impares.push(numAleatorio)                                              //Agregar el número a la lista "impares"//
        }   
    }
    document.getElementById("listaOriginal").value = original.join(", ")     //Mostrar las 3 listas en la página HTML, separando los números con comas//
    document.getElementById("listaPares").value = pares.join(", ")
    document.getElementById("listaImpares").value = impares.join(", ")
}

//ejercicio 11 generar 10 numeros aleatorios entre 10 y 20, guardarlos en una lista, y luego eliminar los múltiplos de 3 de esa lista//

function EliminarMultiplos() {
    let original = [];
    let filtrado = [];
    for (let i = 0; i < 10; i++) {
        let num = Math.floor(Math.random() * (20 - 10 + 1)) + 10; 
        original.push(num);
        if (num % 3 !== 0) filtrado.push(num);
    }
    document.getElementById("resorigal").value = original.join(", ");
    document.getElementById("resfinal").value = filtrado.join(", ");
}

//ejercicio 12 determinar el tipo de triángulo según las longitudes de sus lados, y calcular su área//

function TipodeTriangulo() {
    let a = parseFloat(document.getElementById("ladoA").value)
    let b = parseFloat(document.getElementById("ladoB").value)
    let c = parseFloat(document.getElementById("ladoC").value)

    if (a + b <= c || a + c <= b || b + c <= a) {
        alert("¡Error! Estos números no pueden formar un triángulo, Asegúrate de que los lados no sean demasiado diferentes entre sí.");
        return; 
    }
    let tipo = "";
    if (a === b && b === c) tipo = "Equilátero";
    else if (a === b || b === c || a === c) tipo = "Isósceles";
    else tipo = "Escaleno";
    
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    document.getElementById("resultadoTriangulo").value = `Tipo: ${tipo}, Área: ${area.toFixed(2)}`;
}

//ejercicio 13 contar el número de caracteres en cada palabra de una lista, y mostrar el total de caracteres//

function ContadordeCaracteres() {
    let palabras = ["Sofia", "Software", "NaiApp", "JavaScript"]; 
    let conteo = palabras.map(p => p.length);
    let total = conteo.reduce((a, b) => a + b, 0);
    document.getElementById("resultadoContador").value = `Letras: ${conteo.join(", ")} | Total caracteres: ${total}`;
}


//ejercicio 14 invertir el orden de los elementos en una lista sin usar funciones predefinidas, y luego hacerlo usando la función reverse()//

function InvertirArreglo() {
    let original = []
    for (let i = 0; i < 10; i++) {
        original.push(Math.floor(Math.random() * 101))
    }
    let manual = []
    for (let i = original.length - 1; i >= 0; i--) {
        manual.push(original[i]);
    }
    let auto = [...original].reverse();

    document.getElementById("arregloOriginal").value = original.join(" - ")
    document.getElementById("arregloInvertido").value = manual.join(" - ")
    document.getElementById("arregloReverse").value = auto.join(" - ")
}

//ejercicio 15 crear una calculadora básica que permita sumar, restar, multiplicar y dividir dos números ingresados por el usuario//

function CalculadoraBasica() {
    let num1 = parseFloat(document.getElementById("n1").value);
    let num2 = parseFloat(document.getElementById("n2").value);
    let resultado = 0;

    let operacionSeleccionada = document.querySelector('input[name="operacion"]:checked');
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, ingresa ambos números.");
        return;
    }
    let accion = operacionSeleccionada.value;
    if (accion === "sumar") {
        resultado = num1 + num2;
    } else if (accion === "restar") {
        resultado = num1 - num2;
    } else if (accion === "multiplicar") {
        resultado = num1 * num2;
    } else if (accion === "dividir") {
        
        if (num2 === 0) {
            alert("No se puede dividir por cero.");
            return;
        }
        resultado = num1 / num2;
    }
    document.getElementById("resCalculadora").value = "El resultado es: " + resultado;
}