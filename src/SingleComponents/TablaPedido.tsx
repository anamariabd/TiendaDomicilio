import { IonButton, IonCol,  IonGrid,  IonRow, IonModal } from '@ionic/react';
import React, {Fragment, useState} from 'react';
import '../pages/EstadoPedido.css'

export interface ClientePedido{
    Nombre: string;
    Direccion: string;
    Total: number;
}

const TablaPedido: React.FC <ClientePedido>  = ({Nombre, Direccion, Total}) => {
    const [showModal, setShowModal] = useState(false);
    const [nombre, setNombre] = useState("Ana");

  return (
      <Fragment>
<IonRow>
  <IonCol>
      <h6>
         {Nombre}
      </h6>
  </IonCol>
  <IonCol>
      <h6>
          {Direccion}
      </h6>
  </IonCol>
  <IonCol>
      <h6>
          {Total}
      </h6>
  </IonCol>
  <IonCol>
      <IonButton href="page/Tenderos/ListaPedidos">
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
                      <h4>Nombre del cliente: {nombre} </h4>
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

</Fragment>
  );
};

export default TablaPedido;

