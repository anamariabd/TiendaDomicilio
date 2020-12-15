import {  IonCol,  IonGrid,  IonRow} from '@ionic/react';
import React, {Fragment, useState} from 'react';
import {ListPedido} from "../Controller/tiendaController"
import TablaPedido from '../SingleComponents/TablaPedido'
import {ClientePedido} from '../SingleComponents/TablaPedido'
import {loadDataStore} from '../Controller/tiendaController'

async function listaPedido(){
  
  let result = await loadDataStore();
  if(typeof result !== "boolean" ){
      console.log(result.Id);
     const list = await ListPedido(result.Id)
     return list;
  }
}


const listapedido:ClientePedido[] = [
    {
        Nombre: "ana",
        Direccion: "cra",
        Total: 0
    }
]

const EstadoPedido: React.FC = () => {

 // setTimeout( ()=>{ listaPedido()}, 2300);

    const [showModal, setShowModal] = useState(false);
    const [nombre, setNombre] = useState("Ana");
  return (
    <Fragment>
        <IonGrid>
          <IonRow>
            <IonCol>
                <h1> AQUI VA LA FECHA</h1>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
                <h4>Pedidos en cola:</h4>
            </IonCol>
          </IonRow>
          <IonRow class="cabeceraTabla">
         <IonCol>
            <h6>Nombres</h6>
        </IonCol>
       <IonCol>
          <h6>Direccion</h6>
      </IonCol>
      <IonCol><h6>Total a pagar</h6></IonCol>
     <IonCol>
       <h6>Factura Electronica</h6>
     </IonCol>
     </IonRow>
   </IonGrid>

   {listapedido.map((listapedido, index) => {
       return (
              <div key={index}>
                <br/>
                <TablaPedido key={index} Nombre={listapedido.Nombre} Direccion={listapedido.Direccion} Total={0} />
              </div>)
              })
   }
    </Fragment>
  );
};

export default EstadoPedido;
