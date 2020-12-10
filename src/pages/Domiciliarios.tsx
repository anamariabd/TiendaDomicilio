import { IonHeader,IonButton, IonSelect, IonSelectOption, IonCol, IonLabel, IonContent, IonGrid, IonInput, IonPage, IonRow, IonToolbar, IonButtons, IonIcon, IonModal, IonCard, IonCardContent, IonCardTitle, IonImg } from '@ionic/react';
import { notifications, personCircle } from 'ionicons/icons';
import React, {Fragment, useState} from 'react';
import './Domiciliarios.css';

const Domiciliarios: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
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
                <IonButton  onClick={() => setShowModal(true)}>
                  Añadir Domiciliario
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonModal isOpen={showModal} cssClass='my-custom-class'>
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                             <IonInput class="entrada" placeholder="Nombre:"> </IonInput>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                             <IonInput class="entrada" placeholder="Apellido:"> </IonInput>
                            </IonCol>
                        </IonRow>
              <IonRow>
                <IonLabel class="entrada">Ingrese foto del domiciliario: </IonLabel>
              </IonRow>
              <IonRow>
                <input className="entrada" type="file" />
              </IonRow>
                    </IonGrid>
                    <IonButton onClick={() => setShowModal(false)}>Cerrar</IonButton>
                </IonModal>
                
              </IonCol>
          </IonRow>
        </IonGrid>
    </Fragment>
  );
};

export default Domiciliarios;
