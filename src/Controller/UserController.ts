import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCxnH8cNOZ6oDen6AKjjz--BmOPnG3ngIU",
    authDomain: "app-tiendas-7f8ba.firebaseapp.com",
    databaseURL: "https://app-tiendas-7f8ba.firebaseio.com",
    projectId: "app-tiendas-7f8ba",
    storageBucket: "app-tiendas-7f8ba.appspot.com",
    messagingSenderId: "1009980955989",
    appId: "1:1009980955989:web:23b41e169c7280bc95a3dc",
    measurementId: "G-21B0HGT1T8"
 };
  
    firebase.initializeApp(firebaseConfig);

  require('firebase/auth')
  //Autenticacion con firebase 
  export async function loginUser(username: string, password:string ){
   //const email = username;
   try{
     const res  = await firebase.auth().signInWithEmailAndPassword(/*email*/username, password)
      
    }
    catch(error){
      console.log(error);
   }
  }
  
  export async function logOut(){
    try{
    
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