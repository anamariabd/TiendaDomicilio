import { IonButton, IonCol, IonContent, IonGrid, IonInput, IonPage, IonRow } from '@ionic/react';
import React, {useState} from 'react';
import './Register.css';

const Register: React.FC = () => {
  return (
    <IonPage>
      <IonContent >
        <IonGrid class="bg">
          <IonRow class="conte">
            <IonCol>
              <IonRow>
                <IonInput class="entrada" placeholder="Nombre Completo"> </IonInput>
              </IonRow>
              <IonRow>
                <IonInput class="entrada" placeholder="Nombre de usuario"> </IonInput>
              </IonRow>
              <IonRow>
                <IonInput class="entrada" placeholder="Correo Electronico"> </IonInput>
              </IonRow>
              <IonRow>
                <IonInput class="entrada" placeholder="Numero de telefono"> </IonInput>
              </IonRow>
              <IonRow>
                <IonInput class="entrada" placeholder="Direcion de domicilio"> </IonInput>
              </IonRow>
              <IonRow>
                <IonInput type ="password" class="entrada" placeholder="Contraseña"> </IonInput>
              </IonRow>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol id="bIngresar">
              <IonButton routerLink="/login">
                Registrarse
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Register;
