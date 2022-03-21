


var pant = document.getElementById("pantallita");
var num1 = document.getElementById("numero1");
var num2 = document.getElementById("numero2");
var num3 = document.getElementById("numero3");
var num4 = document.getElementById("numero4");
var num5 = document.getElementById("numero5");
var num6 = document.getElementById("numero6");
var num7 = document.getElementById("numero7");
var num8 = document.getElementById("numero8");
var num9 = document.getElementById("numero9");
var num0 = document.getElementById("numero0");


var suma = document.getElementById("sumar");
var resta = document.getElementById("restar")
var multiplicar = document.getElementById("multiplicacion");
var dividir = document.getElementById("division");
var pant2 = document.getElementById("segundapantalla");
var borrar = document.getElementById("borrar");
var enter = document.getElementById("igual")


var pantallaseleccionada = "pant";




enter.addEventListener("click" , function(){

   if(pantallaseleccionada == "pant"){
      pantallaseleccionada = "pant2";
   }else{
         pantallaseleccionada = "pant";

   }


   })


function digitos (numero){
  if(pantallaseleccionada == "pant"){
   pant.value +=numero;
   }else{
      pant2.value += numero;

   }

  }






num1.addEventListener("click", function(){
   
   digitos(1);

})
 

num2.addEventListener("click", function(){

 digitos(2);

})

num3.addEventListener("click", function(){

   digitos(3);
     
   
   })



num4.addEventListener("click", function(){

     digitos(4);
        
      
   })



num5.addEventListener("click", function(){

  digitos(5);

})

      

num6.addEventListener("click", function(){
   
   digitos(6);
           
         
      })

num7.addEventListener("click", function(){

  digitos(7);
                    
      })

num8.addEventListener("click", function(){


   digitos(8);
           
         
         })

num9.addEventListener("click", function(){
   
   digitos(9);
         
})



num0.addEventListener("click", function(){

   digitos(0);
     
   
   })



   
            
borrar.addEventListener("click" , function(){

   pant.value = "";
   pant2.value = " ";

})
         
         




   
suma.addEventListener("click" , function(){

  var operacionsuma = parseInt(pant.value) + parseInt(pant2.value);


   pant2.value = operacionsuma;

   pant.value = " ";
 

})


resta.addEventListener("click" , function(){

   var operacionresta = parseInt(pant.value) - parseInt(pant2.value);
 
 
   pant2.value = operacionresta;

   pant.value = " ";
 
 
 
 })




 multiplicar.addEventListener("click" , function(){

   var operacionmultiplicar = parseInt(pant.value) * parseInt(pant2.value);
 
 
   pant2.value = operacionmultiplicar;

   pant.value = " ";
 
 
 })




 dividir.addEventListener("click" , function(){

   var operaciondividir = parseInt(pant.value) / parseInt(pant2.value);
 
 
   pant2.value = operaciondividir;

   pant.value = " ";
 
 
 })

