import { IonHeader,IonButton, IonSelect, IonSelectOption, IonCol, IonLabel, IonContent, IonGrid, IonInput, IonPage, IonRow, IonToolbar, IonButtons, IonIcon, IonModal } from '@ionic/react';
import { notifications, personCircle } from 'ionicons/icons';
import React, {Fragment, useState} from 'react';
import './EstadoPedido.css';



const EstadoPedido: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
        <IonGrid>
          <IonRow>
            <IonCol>
                <h1>
                    AQUI VA LA FECHA
                </h1>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
                <h4>
                    Pedidos en cola:
                </h4>
            </IonCol>
          </IonRow>
          <IonRow class="cabeceraTabla">
            <IonCol>
                <h6>
                    Nombres
                </h6>
            </IonCol>
            <IonCol>
                <h6>
                    Direccion
                </h6>
            </IonCol>
            <IonCol>
                <h6>
                    Total a pagar
                </h6>
            </IonCol>
            <IonCol>
                <h6>
                    Factura Electronica
                </h6>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
                <h6>
                    Nombres aqui
                </h6>
            </IonCol>
            <IonCol>
                <h6>
                    Direccion aqui
                </h6>
            </IonCol>
            <IonCol>
                <h6>
                    Total a pagar aqui
                </h6>
            </IonCol>
            <IonCol>
                <IonButton onClick={() => setShowModal(true)}>
                   Ver
                </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
              <IonCol>
                <IonModal isOpen={showModal} cssClass='my-custom-class'>
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <h4>Fecha : 00/00/00</h4>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <h4>Nombre del cliente: Ana Patricia :v</h4>
                            </IonCol>
                        </IonRow>
                        <IonRow class="cabeceraTabla">
                            <IonCol>
                                <h4>Producto</h4>
                            </IonCol>
                            <IonCol>
                                <h4>Cantidad</h4>
                            </IonCol>
                            <IonCol>
                                <h4>Valor Unitario</h4>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <h4>Arroz</h4>
                            </IonCol>
                            <IonCol>
                                <h4>4</h4>
                            </IonCol>
                            <IonCol>
                                <h4>2500</h4>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol class="cabeceraTabla">
                                <h4>Total a pagar : 10000</h4>
                            </IonCol>
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

export default EstadoPedido;
