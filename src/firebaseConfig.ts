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
 // const email = username;
 /* try{
    const res  = await firebase.auth().signInWithEmailAndPassword(/*email*/ /*username, password)
    return true; 
  }catch(error){
    console.log (error);
    return false;
  } 
*/
firebase.auth().signInWithEmailAndPassword(username, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
}


