import {fireB, database} from "../Controller/UserController"
import "firebase/auth"


export async function registerDomiciliario(name : string, lastName : string, Idstore : string){
    await database.collection("domiciliario").add({
        nombre : name,
        apellido : lastName,
        idTienda : Idstore
    })
    .then(()=>{
        console.log("Domiciliario agreagado")
    })
    .catch(()=>{
        console.log("Error al agregar domiciliario")
    })
}

export async function actual() {
    let auth = fireB.auth();
    let user = auth.app.auth().currentUser
    console.log(user,"user")
    auth.onAuthStateChanged((user)=>{ 
        console.log(user) /////
        if(user!== null){
            console.log("Hay un usuario logueado", user.email)
        }else{
            console.log("No hay un usuario logueado")
        }
    })
}