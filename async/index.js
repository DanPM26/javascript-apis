//-----------------Promesas-----------------------
const count = true;

let countValue = new Promise(function (resolve, reject) {
    if (count) {
        resolve("There is a count value.");
    } else {
        reject("There is no count value");
    }
});

console.log(countValue);
// ---------------

var promise = new Promise(function(resolve, reject) {
    const x = "geeksforgeeks";
    const y = "geeksforgeeks"
    if(x === y) {
    resolve();
    } else {
    reject();
    }
    });
    
    promise.then(function () {
    console.log('Excelente, eres un GEEK a mucha honra');
    }).catch(function () {
    console.log('Algún error ha ocurrido');
    });
// ---------------
    //  const imprimiren2seg = (saludo,valor) => {
    //      return new Promise(resolve => {
    //        setTimeout(() => {
    //          console.log(saludo,valor);
    //          resolve();
    //        },2000)
    //      })
    //    }
    //    imprimiren2seg("hola mundo",2)
    //    .then(() => imprimiren2seg("hola mundo",3))
    //    .then(() => imprimiren2seg("hola mundo",4))

//-------------
 let success = true;
 function getUsers() {
   return new Promise((resolve, reject) => {
     setTimeout(() => {
       if (success) {
         resolve([
           { username: 'john', email: 'john@test.com' },
           { username: 'jane', email: 'jane@test.com' },
         ]);
       } else {
         reject('Failed to the user list');
       }
     }, 1000);
   });
 }
 function onFulfilled(users) {
   console.log(users);
 }
 function onRejected(error) {
   console.log(error);
 }
 const promise = getUsers();
 promise.then(onFulfilled, onRejected);
 

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