import { IonButton, IonLabel, IonSelectOption, IonSelect, IonCol, IonContent, IonGrid, IonInput, IonPage, IonRow } from '@ionic/react';
import React, {useState} from 'react';
import firebase from 'firebase'
import './Login.css';
import {loginUser, userCurrent} from '../Controller/UserController'

let TipoUser;

const Login: React.FC = () => {
  const  [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [entry, setEntry] = useState('/page/Inicio');
  
  const [tUser, setTUser] = useState('');
 
async function login(){
  var Usuar;

  const resultado = await firebase.auth().signInWithEmailAndPassword("elpepe@gmail.com", "123456")
  .then( (userAuth)=>{ console.log("DAME SEÑAL DE VIDA ERDA");
  console.log(userAuth)
return true;}
  ).catch( (error) =>{
    
    var errorCode = error.code;
    var errorMessage = error.message;
    return false;
  } );
  console.log("okkk");
  
  return resultado;

    Usuar= await loginUser(username, password);
       if (Usuar){
          console.log("ingresé")
          console.log(Usuar);
          return true;
        }else{
          console.log("NO ingresé") // este sirve
          return false;
        }
  }


  return (
    <IonPage>
      <IonContent >
        <IonGrid class="bg">
          <IonRow class="cont">
            <IonCol>
            <IonRow>
               <IonLabel class="entrada">Tipo de usuario:</IonLabel>
                <IonSelect onIonChange={(e:any)=> {setTUser( e.detail.value);  setEntry("/"+e.detail.value); console.log(entry)}} value={tUser} okText="Aceptar" cancelText="Cancelar" >
                <IonSelectOption value="Tendero">Tendero</IonSelectOption>
                <IonSelectOption  value="Cliente">Cliente</IonSelectOption>
              </IonSelect> 
            </IonRow>
              <IonRow>
                <IonInput class="entrada" 
                  placeholder="Nombre de usuario"
                  onIonChange = {(e: any)=> setUsername(e.target.value)}>
                </IonInput>
              </IonRow>
              <IonRow>
                <IonInput class="entrada" type ="password" placeholder="Contraseña" onIonChange = {(e:any) => setPassword(e.target.value)}> </IonInput>
              </IonRow>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol id="bIngresar">
              <IonButton href ={"/page"+entry+"/Inicio"} onClick = { ()=>{login()}} /*href={entry}*/>
                Iniciar Sesion
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default Login;