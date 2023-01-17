//-----------------Promesas-----------------------
 

//------------------Async/await------------------------------
async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; // wait until the promise resolves (*)

  alert(result); // "done!"
}

f();
 
 // Ejercicio 1
 const promise = new Promise((resolve, reject) => {
    const res = true;
    // An asynchronous operation.
    if (res) {
      resolve('Resolved!');
    }
    else {
      reject(Error('Error'));
    }
  });
  
  promise.then((res) => console.log(res), (err) => alert(err)); 

// Ejercicio 2
  const enMiCumpleaños = (estaJennyEnferma) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!estaJennyEnferma) {
          resolve(2);
        } else {
          reject(new Error("Estoy triste"));
        }
      }, 2000);
    });
  };
  
  enMiCumpleaños(false)
    .then((result) => {
      console.log(`I have ${result} cakes`); // In the console: I have 2 cakes  
    })
    .catch((error) => {
      console.log(error); // Does not run
    })
    .finally(() => {
      console.log("Party"); // Shows in the console no matter what: Party
    });


// ------ Async/await --------

    async function asinc(){
        const promise = new Promise((resolve,reject)=>{
          const res = true;
          
          if(res){
            resolve('Resolved!')
          }else{
            reject(Error('Error'))
          }
        });
        
         let result = await promise; 
         console.log(result)
        
      }
      
      asinc()

      //second2

      async function cumpleaños(estaJennyEnferma){
        const promise = new Promise((resolve,reject) =>{
           setTimeout(() => {
              if (!estaJennyEnferma) {
                resolve(console.log('Jenny va a ir a la fiesta'));
              } else {
                reject(new Error("Estoy triste"));
              }
            }, 2000);
        });
        let result = await promise;
        console.log(result)
      }
      
      cumpleaños()