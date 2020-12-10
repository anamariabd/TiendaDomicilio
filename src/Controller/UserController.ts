import {fireB, database} from "../firebaseConfig"
import "firebase/auth"
import { useState } from "react"
import { barbellOutline } from "ionicons/icons"
import { formatDiagnosticsWithColorAndContext } from "typescript"
import { promises } from "dns"
 
  export interface produt {
    id:  number,
    name:  string,
    img: string,
    medida: string,
    marca: string

  }


//export const database = fireB.firestore()
  //require('firebase/auth')
  //Autenticacion con firebase 
   // CONEXION A BASE DE DATOS

  export async function RegisterData(name:string,username: string, numberPhone: Number,address:string, email : string, tUser : string) {
    const result = await database.collection("usuarios").add({
      tipoUsuario : tUser,
      nombre : name,
      userName : username,
      celular : numberPhone ,
      correo : email,
      direccion : address
     })
     .then((doc) => {return doc.id})
     .catch((e : any) => {return 0})
     if(typeof result === "string"){
        return result;
     }
  }
  let list:Array<produt> = new Array();
  
 // const[listaProduct, setListaProduct] = useState<produt[]>([]);

  export async function loadProducts() {
    
     const result =  await database.collection("producto").get() // TOMA LOS DATOS DE LA TABLA "producto" Y LOS OBTIENE
        .then(
          (querySnapshot) =>{
            querySnapshot.forEach((doc :  any) =>{
              console.log(doc.id,doc.data().nombre,doc.data().imagen)
              let id =  doc.id;
              let name = doc.data().nombre;
              let img = doc.data().imagen;
              let medida = doc.data().medida;
              let marca = doc.data().marca;
              list.push({id: id,name: name, img: img, medida: medida, marca: marca});
            }); 
          return list;
        }) 
        .catch((e: any)=>{
          return 0;
        });
        
        return result;  
  }

  export async function loginUser(username: string, password:string ){
    console.log()
    const  resultado = await fireB.auth().signInWithEmailAndPassword(username, password)
       .then((e:any) => {
         console.log("Si entre",e.credential)
         return true
       })
       .catch((e) => {
         console.log("nada no entre")
         return e
      });
       return resultado; 
  }
  
  export async function logOut(){
    try{
     fireB.auth()
     .signOut()
     .then((e: any) => {
       console.log(e,"chao")
     })
     .catch((evet: any) =>{
       console.log("error", evet)
     });
     console.log("Saliendo Gracias");
    }catch(error){
    
    console.log(error);
    };
  }

  export async function userCurrent(){
   let user =   fireB.auth().currentUser;
    if (user) {
        let result;
       await database.collection("usuarios").where("correo", "==",user.email).get()
         .then((querySnapshot) => {
            let m;
              querySnapshot.forEach((doc) => {
                 m = doc.id
                //console.log(doc.id)
                //console.log(doc.id, doc.data())
              })
              
              result = m;
            })
          .catch()
      console.log(result,"resultado")    
      return String(result);
      
    } else {
          console.log("no hay usuarios logiados") // No user is signed in.
    }
 }

  export async function registUser(email: string, password: string){
      let reg = await fireB.auth().createUserWithEmailAndPassword(email,password).then((e:any) => {return e}).catch((e:any) => {return e})
      console.log(reg)

  } 


  export async function registerClient(id:string,barrio:string, direccion: string, localizacion: string ){
    await database.collection('cliente').add({ 
      idUsuario: id,
      barrio: barrio,
      direccion: direccion,
      localizacion: localizacion
    })
    .then()
    .catch()
  }