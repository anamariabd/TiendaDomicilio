import { IonButtons,  IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar, IonIcon, IonButton} from '@ionic/react';
import React, {useState} from 'react';
import {personCircleOutline, personCircleSharp} from 'ionicons/icons';
import './Page.css';

const Login: React.FC = () => {

  const [userName] = useState('');

  function LoginUser(){
      
  }

  return (
    <IonPage id="page">

      <IonContent fullscreen>
        <IonInput placeholder="username"></IonInput>
        <IonInput type="password" placeholder="contraseña"></IonInput>
      <IonButton onClick={LoginUser}> click me </IonButton>
    
      </IonContent>
    </IonPage>
  );
};

export default Login;
