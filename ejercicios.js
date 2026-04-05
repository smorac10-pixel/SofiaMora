function PrecioconIva(){
    let precio = parseFloat(document.getElementById("Precio").value)
    let Iva = parseFloat(document.getElementById("Iva").value)
    let precioFinal = precio + (precio * (Iva / 100))
    document.getElementById("resultado").value = "El precio con Iva es: " + precioFinal.toFixed(2)
}


function calcularAreayperimetro(){

