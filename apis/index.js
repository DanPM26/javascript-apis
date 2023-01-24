//---------------fetch----------------
// const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
// fetch(url)
// .then(response => response.json())
// .then(result => {
//     console.log(result)
//     render(result.drinks)
// })
// .catch(err=>console.log(err))

// const render = (data) =>{
//     data.forEach(element => {
//         let el = document.getElementById('element')
//         el.innerHTML += `
//         <p>${element.strDrink}</p>
//         <img src="${element.strDrinkThumb}">
//         `
//     });
// }

//--------------async/await-----------------
// const getgames = async() =>{
//     const response = await fetch('https://www.amiiboapi.com/api/amiibo/?character=zelda&showusage')
//     const {amiibo} = await response.json()
//     console.log(amiibo)
//      display(amiibo)
// }

//  function display(data){
//      data.forEach(el =>{
//          let lista = document.getElementById('list')
//          lista.innerHTML += `
//          <p>${el.character}</p>
//          <img src="${el.image}">
//          `
//      })
//  }

//  getgames()


//---------------fetch-(method)---------------
//https://ponyweb.ml/#character 
// const url = "https://ponyweb.ml/v1/character/all"
// const options = {
//     method: "GET",
//     // headers: {
//     // 'Content-Type': 'application/json',
//     // }
//     // body: JSON.stringify(update),
//     };
   
//     fetch(url, options)
//     .then(response => response.json())
//     .then(result =>{
//         console.log(result)
//          render(result.data)
//     })
//     .catch((err) => console.log(err))

//   const render = (data) =>{
//        data.forEach(element => {
//            let el = document.getElementById('element')
//            el.innerHTML += `
//            <p>${element.name}</p>
//            <img src="${element.image}">
//            `
//        });
//    }

//--------------axios-----------------
// https://dinosaur-facts-api.shultzlab.com/dinosaurs 
 const getinfo = async() =>{
    const respuesta = await axios
    .get('https://dinosaur-facts-api.shultzlab.com/dinosaurs')
    .then((response) => {
     console.log(response.data)
     render(response.data)
    }
    )
    .catch((err)=> console.log(err))
 }
  const render = (data) => {
      data.forEach(element => {
          let lista = document.getElementById('list')
          lista.innerHTML += `
          <p>${element.Name} </p>
          <p>${element.Description} </p>
          `
      });
  }

 getinfo()


//---------------Ejercicio----------------
// https://hp-api.onrender.com/

//  const getinfo = async() =>{
//     const respuesta = await axios
//     .get('https://hp-api.onrender.com/api/characters')
//     .then((response) => {
//      console.log(response.data)
//     render(response.data)
//     }
//     )
//     .catch((err)=> console.log(err))
//  }

//   const render = (data) => {
//       data.forEach(element => {
//           let lista = document.getElementById('list')
//           lista.innerHTML += `
//           <p>${element.actor} </p>
//           <img src="${element.image}">
//           `
//       });
//   }

//  getinfo()