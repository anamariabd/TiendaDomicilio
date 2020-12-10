import {fireB, database} from "./firebaseConfig"
import "firebase/auth"
import { useState } from "react"
 
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
    await database.collection("usuarios").add({
      tipoUsuario : tUser,
      nombre : name,
      userName : username,
      celular : numberPhone ,
      correo : email,
      direccion : address
     })
     .then((doc) => {console.log(doc.id)})
     .catch((e : any) => {console.log(e,"que cagada")})
  }
  //let list:Array<produt> = new Array();
  
 // const[listaProduct, setListaProduct] = useState<produt[]>([]);

  export async function loadProducts() {
    
     const result =  await database.collection("producto").get() // TOMA LOS DATOS DE LA TABLA "producto" Y LOS OBTIENE
        .then(
          (querySnapshot) =>{
          
          let list: produt[] = [];
          querySnapshot.forEach((doc :  any) =>{
            console.log(doc.id,doc.data().nombre,doc.data().imagen)
            let id =  doc.id;
            let name = doc.data().nombre;
            let img = doc.data().imagen;
            let medida = doc.data().medida;
            let marca = doc.data().marca;
          
            list.push({id: id,name: name, img: img, medida: medida, marca: marca});
          }); 
      //    setListaProduct(list);
        //  return listaProduct;
        }) 
        .catch((e: any)=>{
          return 0;
        });
        console.log(result);
        return result;  
  }


  export async function loginUser(username: string, password:string ){
    console.log()
    const  resultado = await fireB.auth().signInWithEmailAndPassword(username, password)
       .then((e) => {
         console.log("Si entre")
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

  export function userCurrent(){
   let user =   fireB.auth().currentUser;
   if (user) {
          let doc =database.collection("usuarios").where("correo", "==",user.email).get()
          .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                console.log(doc.id, doc.data())
              })
          })
          .catch()
         
    } else {
          console.log("no hay usuarios logiados") // No user is signed in.
    }
 }
  

  export async function registUser(email: string, password: string){
      let reg = await fireB.auth().createUserWithEmailAndPassword(email,password).then((e:any) => {return e}).catch((e:any) => {return e})
      console.log(reg)

  } 


