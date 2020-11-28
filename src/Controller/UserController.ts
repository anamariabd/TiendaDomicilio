
import firebase  from "firebase/app"
import {firebaseConfig} from "../firebaseConfig"


  const a = firebase.initializeApp(firebaseConfig)
  require('firebase/auth')
  //Autenticacion con firebase 

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


