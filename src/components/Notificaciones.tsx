import React, { Fragment } from 'react';
import Buscador from './Buscador'
import {downloadOutline, downloadSharp, eyeOutline, eyeSharp} from 'ionicons/icons';
import '../Styles/styles.css'
import { IonList, IonToggle, IonIcon,  IonButton } from '@ionic/react';
import PedidoCard from '../SingleComponents/PedidoCard'

const BuscarTienda: React.FC = () => (
  <Fragment>
      <IonList>

          <h2 className="sub-title"> Estado del pedido: </h2>
          <p>Su pedido n°12 ya está en camino! en 5 minutos llegará su pedido</p>   
          <h2 className="sub-title">Domiciliario: </h2>
          <br/>
          
          <IonButton className="btn-invisible" ><IonIcon ios={downloadSharp} md={downloadOutline}/></IonButton><p>Descargar factura en PDF</p>
          <IonButton className="btn-invisible" > <IonIcon ios={eyeSharp} md={eyeOutline}/></IonButton><p>Visualizar factura</p>            
          <h2 className="sub-title">Tienda: </h2>
      
          <PedidoCard/>
        </IonList>
  </Fragment>
);

export default BuscarTienda;