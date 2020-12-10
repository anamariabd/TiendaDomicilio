import firebase from "firebase/app"
import  "firebase/firestore"
export  const firebaseConfig = {
    apiKey: "AIzaSyCxnH8cNOZ6oDen6AKjjz--BmOPnG3ngIU",
    authDomain: "app-tiendas-7f8ba.firebaseapp.com",
    databaseURL: "https://app-tiendas-7f8ba.firebaseio.com",
    projectId: "app-tiendas-7f8ba",
    storageBucket: "app-tiendas-7f8ba.appspot.com",
    messagingSenderId: "1009980955989",
    appId: "1:1009980955989:web:23b41e169c7280bc95a3dc",
    measurementId: "G-21B0HGT1T8"
  };

  export const fireB = firebase.initializeApp(firebaseConfig)
  export const database = fireB.firestore(); // Inicializacion de la base de datos

  