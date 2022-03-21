var escrito = document.getElementById("digito")
var may = document.getElementById("mayuscula")
var minus = document.getElementById("minuscula")
var caracteres = document.getElementById("cantidad")




may.addEventListener("click" , function(){

  

   escrito.value = escrito.value.toUpperCase()

})


minus.addEventListener("click" , function(){

  
  escrito.value = escrito.value.toLowerCase()

})


caracteres.addEventListener("click" , function(){

     escrito.value = escrito.value.length
  
})