import { IonButton, IonCol, IonContent, IonGrid, IonInput, IonPage, IonRow } from '@ionic/react';
import React, {useState} from 'react';

import Page from '../pages/Page';
import './Login.css';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import {loginUser} from '../firebaseConfig'

const Login: React.FC = () => {
 
  const  [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  async function login(){
    //const res = await
     loginUser(username, password)
   // console.log( `${res ? "login success" : "login failed"}`);
   console.log(`loginUser(username, password)`);
  }
 
  return (
    <IonPage>
      <IonContent >
        <IonGrid class="bg">
          <IonRow class="cont">
            <IonCol>
              <IonRow>
                <IonInput class="entrada" 
                  placeholder="Nombre de usuario"
                  onIonChange = {(e: any)=> setUsername(e.target.value)}>
                </IonInput>
              </IonRow>
              <IonRow>
                <IonInput class="entrada" placeholder="Contraseña" onIonChange = {(e:any) => setPassword(e.target.value)}> </IonInput>
              </IonRow>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol id="bIngresar">
              <IonButton onClick = { () => {login()}} href="/page/Inicio">
                Iniciar Sesion
              </IonButton>
              
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;
