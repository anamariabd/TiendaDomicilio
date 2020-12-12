import { useIonViewWillEnter, IonButton, IonLabel, IonSelectOption, IonSelect, IonCol, IonContent, IonGrid, IonInput, IonPage, IonRow } from '@ionic/react';
import React, {useState} from 'react';
import './Login.css';
import {loginUser, usuarios, usuario} from '../Controller/UserController'

const list: usuario[] = [];

var IsAuth;
const Login: React.FC = () => {
  const  [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [entry, setEntry] = useState('/page/Inicio');
  
  const [tUser, setTUser] = useState('');
 
async function login(){

  IsAuth = await loginUser(username, password);
  if(!IsAuth){
    return true;
  }
  else{
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
              <IonButton href ={"/page"+entry+"/Inicio"} onClick = {login} /*href={entry}*/>
                Iniciar Sesion
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export {Login, IsAuth};