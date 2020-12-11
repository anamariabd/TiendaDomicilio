import {firebaseConfig} from "../firebaseConfig"
import firebase from "firebase/app"
import  "firebase/firestore"
import  "firebase/auth"

 
  export interface produt {
    id:  number,
    name:  string,
    img: string,
    medida: string,
    marca: string

  }
  
  export const fireB = firebase.initializeApp(firebaseConfig)
  export const database = fireB.firestore(); // Inicializacion de la base de datos
  require('firebase/auth')
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

  export  async function loginUser(username: string, password:string ){
    try{
      var aux;
      const resultado = await firebase.auth().signInWithEmailAndPassword(username, password).then( (user) =>{
        
        console.log(user.user, " User Entro");
        aux = user;
        return user;
      })
      alert("Hola")
      return resultado;
      console.log(aux);
    }catch( error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        
        console.log(error)
        return false;
      } 
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

    var user = firebase.auth().currentUser;
    
    firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log(user);
    } else {
      console.log("NADIE");
    }
  });
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