import { IonButtons,  IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar, IonIcon, IonButton, IonImg, IonFooter, IonGrid, IonRow, IonCol} from '@ionic/react';
import React, { useState} from 'react';
import './Logo.css';
import im3 from '../Assets/im3.png';
const Logo: React.FC = () => {

  return (
    <IonPage>
        <IonContent>
            <IonGrid id="bg">
                <IonRow>
                    <IonCol>
                        <IonImg src={im3} id="im3" />
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonButton routerLink="/login" class="btn" color="primary" expand="block">Iniciar Sesion</IonButton>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                    <IonButton routerLink="/register" class="btn" color="primary"  expand="block">Registrate Aqui</IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
            
        </IonContent>
    </IonPage>
  );
};

export default Logo;
