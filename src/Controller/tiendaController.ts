import {fireB, database} from "./UserController"
import "firebase/auth"



export async function registerShopman(id:string ){
  await database.collection('tendero').add({ idUsuario: id})
  .then()
  .catch()
}

export async function DataStore(name: string, idTendero : string, localizacion: string) {
        registerShopman(idTendero);
        await database.collection("tienda").add({
            nombre : name,
            localizacion : localizacion,
            idTendero : idTendero
        })
        .then(()=>{console.log("tienda registrada")})
        .catch()
}

  export function loadStore(file : File){
    const result = fireB.storage().ref(`/tiendas/${file.name}`)
    .put(file)
    .then((querySnapshot)=>{
      console.log(querySnapshot);
    }).catch((e:any) => {
      console.log(e);
    })
  }  