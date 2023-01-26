

//  function valor(){
//     let name = document.getElementById("nombre").value;
//     let fullname = document.getElementById("apellido").value;
//     let age = document.getElementById("edad").value ;
//     let correo = document.getElementById("correotxt").value
//   let regex = /\S+@\S+\.\S+/; 
 

//      if (name == null || name.length <= 3){
//       alert("Favor de agregar tu nombre")
//       return false
//       } else if( fullname == null || fullname.length <= 3){
//        alert("El apellido no puede estar en blanco")
//        return false
//       } else if ( age == null || isNaN(age)){
//        alert("ingresa un número")
//        return false
//       } 

//       if( correo.match(regex)){
//          alert("Ingresaste un correo valido")
//          return true
//      } else {
//          alert("Esto no es un correo valido")
//          return false
//      }

//  }
//--------------------------------
// function validate(){
//  const valid = () => {
//     let name = document.getElementById("nombre").value;
//     let fullname = document.getElementById("apellido").value;
  
//     if(name && fullname == null || name.length && fullname.length <= 3 ){
//       alert("Favor de llenar correctamente los datos")
//       return false
//     } else {
//       return true
//     }
//  }

//  const edad = () => {
//     let age = document.getElementById("edad").value;
//     if(age == null || isNaN(age)){
//         alert("Favor de ingresar un número")
//         return false
//     } else {
//         return true
//     }
//  }

//  const correo = () => {
//     let correo = document.getElementById("correotxt").value
//     let regex = /\S+@\S+\.\S+/; 

//     if( correo.match(regex)){
//         alert("Ingresaste un correo valido")
//         return true
//     } else {
//         alert("Esto no es un correo valido")
//         return false
//     }
//  }

//  if( valid && edad && correo){
//     alert("datos llenados")
//     return false
//  } else {
//     alert("Falta llenar datos")
//     return true
//  }
// }

//  function enviar(){
//      let correo = document.getElementById("correotxt").value
//      let regex = /\S+@\S+\.\S+/; 
//      if( correo.match(regex)){
//          alert("Ingresaste un correo valido")
//          return true
//      } else {
//          alert("Esto no es un correo valido")
//      }
//  }

//------------------------------------
 function validar(){
  let name = document.getElementById("nombre").value;
   let fullname = document.getElementById("apellido").value;
   if(name && fullname == null || name.length && fullname.length <= 3 ){
     alert("Favor de llenar correctamente los datos de nombre y apellido")
     return false
   } else {
     return true
   }
 }

 function age(){
     let age = document.getElementById("edad").value;
     if(age == null || isNaN(age)){
         alert("Favor de ingresar un número")
         return false
     } else {
         return true
     }
 }

function email(){
    let email2 = document.getElementById("correo").value;

    if(!email2.match(/\S+@\S+\.\S+/)){
        alert("Esto no es un correo valido")
        return false
    } else{
        return true
    }
}

function valor(){
    if (!validar() || !age() || !email()){
        alert("Favor de corregir los datos")
        return false
    } else {
        alert("Datos enviados")
    }
}