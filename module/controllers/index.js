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

//   const {songData, artistaData} = require('./controller')

//   console.log(songData('Sin miedo'))
//   console.log(artistaData('Dua Lipa'))

//  songData('Sin miedo')
//  .then((response) => console.log('response', response))
// artistaData('Dua Lipa')
//  .then((response) => console.log('response', response))
//---------------
// const getData = async () => {
//      const sngdata = await songData('Sin miedo')
//      const artdata = await artistaData('Dua Lipa')
//       console.log('aqui cancion', sngdata)
//       console.log('aqui artista', artdata)
//    }


//    getData()

//----------------------Chart.js-------------------------

   // const getgames = async() =>{
   //     const response = await fetch('https://services.arcgis.com/afSMGVsC7QlRK1kZ/arcgis/rest/services/Future_Land_Use_2040/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson')
   //     const {features} = await response.json()
   //     console.log(features)
   //    //   display(amiibo)
   // }
   
//    getgames()

 //   function display(data){
 //       data.forEach(el =>{
 //           let lista = document.getElementById('list')
 //           lista.innerHTML += `
 //           <p>${el.character}</p>
 //           <img src="${el.image}">
 //           `
 //       })
 //   }



//   const url = ''
//   fetch(url)
//   .then(response => response.json())
//   .then(result => {
//       console.log(result)
  
//   })
//   .catch(err=>console.log(err))

//---------------------------------------

const ctx = document.getElementById('myChart');

const data = [
  { year: 2010, count: 10 },
  { year: 2011, count: 20 },
  { year: 2012, count: 15 },
  { year: 2013, count: 25 },
  { year: 2014, count: 22 },
  { year: 2015, count: 30 },
  { year: 2016, count: 28 },
];

new Chart(ctx, {
  type: 'scatter',
  data: {
    labels: data.map(row => row.year),
    datasets: [
      {
        label: 'Acquisitions by year',
        data: data.map(row => row.count)
      }
    ]
  }
});