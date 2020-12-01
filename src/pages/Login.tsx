import { IonButton, IonLabel, IonSelectOption, IonSelect, IonCol, IonContent, IonGrid, IonInput, IonPage, IonRow } from '@ionic/react';
import React, {useState} from 'react';

import './Login.css';
import {loginUser,loadProducts} from '../Controller/UserController'

const Login: React.FC = () => {
  const  [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [entry, setEntry] = useState('/page/Inicio');
  
  const [tUser, setTUser] = useState('');
 
  async function login(){
        const res =  await loginUser(username, password);
        
      if (typeof res == "boolean"){
         
          console.log("ingrese")
      }else{
        console.log(res.code, res.message)
      }
  }

  
  return (
    <IonPage>
      <IonContent >
        <IonGrid class="bg">
          <IonRow class="cont">
            <IonCol>
            <IonRow>
               <IonLabel class="entrada">Ordenar por</IonLabel>
                <IonSelect  value={tUser} okText="Aceptar" cancelText="Cancelar" onIonChange = { (e : any) => setTUser(e.target.value)}>
                <IonSelectOption value="Tendero">Tendero</IonSelectOption>
                <IonSelectOption   value="Cliente">Cliente</IonSelectOption>
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
              <IonButton href ={entry} onClick = { () => {login()}} /*href={entry}*/>
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