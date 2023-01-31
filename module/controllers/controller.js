const data = require('./data')
 console.log(data)

const songData = async(cancion) =>{
  const cancionData = await data.find( item => item.cancion === cancion )
  console.log(cancionData)
   if(!cancionData){
      console.log("La canción no se encuentra en esta base de datos")
   } else if(!cancionData.artista){
      console.error("EL artista no se encuentra en esta base de datos")
   }
  return cancionData
  }

  const artistaData = async(artista) =>{
    const artistData = await data.find( item => item.artista === artista )
    console.log(artistData)
     if(!artistData ){
        console.log("El/la artista no se encuentra en nuestra base de datos")
     } else if(!artistData.artista){
        console.error("EL artista no se encuentra en esta base de datos")
     }
    return artistData
    }

    module.exports = {
     songData,
     artistaData
    }
