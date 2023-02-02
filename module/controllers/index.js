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


// const ctx = document.getElementById('myChart');

// const data = [
//   { year: 2010, count: 10 },
//   { year: 2011, count: 20 },
//   { year: 2012, count: 15 },
//   { year: 2013, count: 25 },
//   { year: 2014, count: 22 },
//   { year: 2015, count: 30 },
//   { year: 2016, count: 28 },
// ];

// new Chart(ctx, {
//   type: 'scatter',
//   data: {
//     labels: data.map(row => row.year),
//     datasets: [
//       {
//         label: 'Acquisitions by year',
//         data: data.map(row => row.count)
//       }
//     ]
//   }
// });