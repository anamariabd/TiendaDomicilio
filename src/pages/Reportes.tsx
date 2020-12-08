import { IonHeader,IonButton, IonSelect, IonSelectOption, IonCol, IonLabel, IonContent, IonGrid, IonInput, IonPage, IonRow, IonToolbar, IonButtons, IonIcon, IonModal, IonProgressBar } from '@ionic/react';
import { notifications, personCircle } from 'ionicons/icons';
import React, {Fragment, useState} from 'react';
import './Reportes.css';



const Reportes: React.FC = () => {
    
  return (
    <Fragment>
        <IonGrid>
          <IonRow>
            <IonCol>
              <h3>Reportes del dia</h3>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol class="cabeceraTabla">
              <h4>Valor de las ventas</h4>
            </IonCol>
            <IonCol class="cabeceraTabla">
              <h4>Diferencia</h4>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <h4>1500000</h4>
            </IonCol>
            <IonCol>
              <h4>2%</h4>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonProgressBar value={0.5} id="barraAyer" color = "secondary"></IonProgressBar><br />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonProgressBar value={0.7} id="barraHoy" color="tertiary"></IonProgressBar><br />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <h3>Reportes del mes</h3>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol class="cabeceraTabla">
              <h4>Valor de las ventas</h4>
            </IonCol>
            <IonCol class="cabeceraTabla">
              <h4>Diferencia</h4>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <h4>1500000</h4>
            </IonCol>
            <IonCol>
              <h4>2%</h4>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonProgressBar value={0.5} id="barraAyer" color = "secondary"></IonProgressBar><br />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonProgressBar value={0.7} id="barraHoy" color="tertiary"></IonProgressBar><br />
            </IonCol>
          </IonRow>
        </IonGrid>
    </Fragment>
  );
};

export default Reportes;
