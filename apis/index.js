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
const getgames = async() =>{
    const response = await fetch('https://www.amiiboapi.com/api/amiibo/?character=zelda&showusage')
    const {amiibo} = await response.json()
    console.log(amiibo)
     display(amiibo)

}

 function display(data){
     data.forEach(el =>{
         let lista = document.getElementById('list')
         lista.innerHTML += `
         <p>${el.character}</p>
         <img src="${el.image}">
         `
     })
 }

 getgames()
//-------------------------------
//-------------------------------
