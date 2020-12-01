import firebase  from "firebase/app"
import {firebaseConfig} from "../firebaseConfig"
import "firebase/firestore"



  const fb = firebase.initializeApp(firebaseConfig)
  require('firebase/auth')
  //Autenticacion con firebase 
  export const database = firebase.firestore() // CONEXION A BASE DE DATOS
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
  export async function loadProducts() {
     const result =  await database.collection("cliente").get() // TOMA LOS DATOS DE LA TABLA "producto" Y LOS OBTIENE
        .then(/*(querySnapshot) =>{
          querySnapshot.forEach((doc) =>{
            console.log(`${doc.id} => ${doc.data()}`)})}*/
            ()=>{console.log("si carga productos")})
        .catch((e: any)=>{
          return 0});
        return result;
  }

  export async function loginUser(username: string, password:string ){
       const  r = await firebase.auth().signInWithEmailAndPassword(/*email*/username, password).then(e => {return true }).catch((e) => {return e });
       return r; 
  }
  
  export async function logOut(){
    try{
     firebase.auth().signOut();
     console.log("Saliendo Gracias");
    }catch(error){
    
    console.log(error);
    };
  }
  export function userCurrent(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          console.log("Entre");
        } else {
           // No user is signed in.
        }
      });
  }

  export async function registUser(email: string , password: string){

      let reg = await firebase.auth().createUserWithEmailAndPassword(email,password).then((e:any) => {return e}).catch((e:any) => {return e})

      console.log(reg)

  } 


