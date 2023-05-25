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
//-------------------Fetch con botón de actualización --------------------
  /// 
//   function Api() {
//     const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
//     fetch(url)
//       .then(response => response.json())
//       .then(result => {
//         console.log(result);
//         render(result.drinks);
//       })
//       .catch(err => console.log(err));
//   }

//   function render(data) {
//     let elementDiv = document.getElementById('element');
//     elementDiv.innerHTML = ''; // Limpiar contenido existente

//     data.forEach(element => {
//       let el = document.createElement('div');
//       el.innerHTML = `
//         <p>${element.strDrink}</p>
//         <img src="${element.strDrinkThumb}">
//       `;
//       elementDiv.appendChild(el);
//     });
//   }

//   // Agregar manejador de eventos al botón de refrescar
//   document.getElementById('refreshButton').addEventListener('click', () => {
//     Api();
//   });

//   // Llamar a la función Api() al cargar la página
//   Api();
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

 const url = "https://www.amiiboapi.com/api/amiibo/?character=zelda&showusage"
 const options = {
     method: "GET",
      headers: {
      'Content-Type': 'application/json',
      }
     // body: JSON.stringify(update),
     };
 
     fetch(url, options)
     .then(response => response.json())
     .then(result =>{
         console.log(result.amiibo)
       render(result.amiibo)
     })
     .catch((err) => console.log(err))

   const render = (amiibo) =>{
        amiibo.forEach(element => {
            let el = document.getElementById('element')
            el.innerHTML += `
            <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${element.image}">
            <div class="card-body">
            <h5 class="card-title" >${element.name}</h5>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>

            </div>
            `
        });
    }

//--------------axios-----------------
// https://dinosaur-facts-api.shultzlab.com/dinosaurs 
//  const getinfo = async() =>{
//     const respuesta = await axios
//     .get('https://dinosaur-facts-api.shultzlab.com/dinosaurs')
//     .then((response) => {
//      console.log(response.data)
//      render(response.data)
//     }
//     )
//     .catch((err)=> console.log(err))
//  }
//   const render = (data) => {
//       data.forEach(element => {
//           let lista = document.getElementById('list')
//           lista.innerHTML += `
//           <p>${element.Name} </p>
//           <p>${element.Description} </p>
//           `
//       });
//   }

//  getinfo()


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