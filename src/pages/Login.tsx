import { IonButton, IonCol, IonContent, IonGrid, IonInput, IonPage, IonRow } from '@ionic/react';
import React, {useState} from 'react';
import './Login.css';

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonContent >
        <IonGrid class="bg">
          <IonRow class="cont">
            <IonCol>
              <IonRow>
                <IonInput class="entrada" placeholder="Nombre de usuario"> </IonInput>
              </IonRow>
              <IonRow>
                <IonInput class="entrada" placeholder="Contraseña"> </IonInput>
              </IonRow>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol id="bIngresar">
              <IonButton routerLink="/page/Inicio">
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
