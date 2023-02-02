// //Primeros pasos
// let myApp = ( function(){
 
//     var foo = 'Module Pattern';
//     var bar = 'ver 1.0';
   
//     // función privada 
//     var sum = function( param1, param2 ){
//       return param1 + param2;
//     }
   
//     // función publica
//     return {
//       myMessage: function(){
//         return foo + ' ' + bar;
//       }
//     }
//   })
  
//   ();

// console.log( myApp.myMessage() ); // Module Pattern ver 1.0
// console.log( myApp.sum( 10, 5 ) ); // myApp.sum is not a function. sum es privada

//-----------------------Module--------------------------


  //  const {songData, artistaData } = require('./controller')
    // console.log(songData('La Santa'))
    // console.log(artistaData('Clairo'))

  //  songData('Sin miedo')
  //  .then((response) => console.log('response', response))
  // artistaData('Dua Lipa')
  //  .then((response) => console.log('response', response))


//  const getData = async () => {
//       const sngdata = await songData()
//       const artdata = await artistaData()
//       console.log(sngdata)
//       console.log(artdata)
//       render()
//     }

    // const render = (data) =>{
    //   data.forEach(element => {
    //     let lista = document.getElementById("lista")
    //     lista.innerHTML += `
    //     <p>${element.cancion}</p>
    //     <p>${element.artista}</p>
    //     `
    //   });

    // }

    // getData()

//----------------------Chart.js-------------------------


 const ctx = document.getElementById('myChart');
 const data = [
  {"id":1,"cancion":"Sin miedo","artista":"La Garfield", "año":2013,"escuchas":14263},
  {"id":2,"cancion":"La Santa","artista":"Bad Bunny", "año":2019, "escuchas":149263},
  {"id":3,"cancion":"Bags","artista":"Clairo","año":2019, "escuchas":130263},
  {"id":5,"cancion":"Hallucinate","artista":"Dua Lipa","año":2020, "escuchas":163263},
  {"id":6,"cancion":"Serotonin","artista":"Girl in Red","año":2018,"escuchas":560262}
 ];


 new Chart(ctx, {
   type: 'line', //'scatter','bar',doughnut,line
   data: {
     labels: data.map(row => row.año),
     datasets: [
       {
         label: 'Escuchas por año',
         data: data.map(row => row.escuchas)
       }
     ]
   }
 });