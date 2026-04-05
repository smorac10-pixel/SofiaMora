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

