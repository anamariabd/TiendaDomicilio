import { IonHeader,IonButton, IonSelect, IonSelectOption, IonCol, IonLabel, IonContent, IonGrid, IonInput, IonPage, IonRow, IonToolbar, IonButtons, IonIcon, IonModal, IonCard, IonCardContent, IonCardTitle, IonImg } from '@ionic/react';
import { notifications, personCircle } from 'ionicons/icons';
import React, {useState} from 'react';
import './Domiciliarios.css';

const Domiciliarios: React.FC = () => {
    
  return (
    <IonPage>
        <IonHeader >
            <IonToolbar color = "primary">
            <IonButtons slot="secondary">
                <IonButton>
                <IonIcon slot="icon-only" icon={notifications} />
                </IonButton>
                <IonButton>
                <IonIcon slot="icon-only" icon={personCircle} />
                </IonButton>
            </IonButtons>
            </IonToolbar>
        </IonHeader>
      <IonContent >
        <IonGrid>
            <IonRow>
                <IonCol>
                    <IonCard>
                      <IonCardContent>
                        <IonRow>
                          <IonCol>
                          <IonImg src="https://image.shutterstock.com/image-vector/user-icon-trendy-flat-style-260nw-418179865.jpg" />
                          </IonCol>
                          <IonCol>
                            <IonRow>
                              <h1>Nombre del Domiciliario</h1>
                            </IonRow>
                            <IonRow>
                              <h2>Vehiculo</h2>
                            </IonRow>
                            <IonRow>
                              <IonButton>
                                Eliminar
                              </IonButton>
                            </IonRow>
                          </IonCol>
                        </IonRow>
                      </IonCardContent>
                    </IonCard>
                </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton>
                  Añadir Domiciliario
                </IonButton>
              </IonCol>
            </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Domiciliarios;
