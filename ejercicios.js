function sumar (){
    n1 = parseInt (document.getElementById("n1").value)
    n2 = parseInt (document.getElementById("n2").value)
    suma = n1 + n2
    //mostar en input
    document.getElementById("resultado").value = suma
    //mostrar en h1
    texto=document.getElementById("resultex").textContent
    document.getElementById("resultex").textContent=texto+suma
    
}