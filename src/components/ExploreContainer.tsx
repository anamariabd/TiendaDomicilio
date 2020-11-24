import React from 'react';
import { IonButtons, IonFooter, IonContent, IonHeader, IonMenuButton, IonPage, IonSearchbar, IonToolbar } from '@ionic/react';
import Productos from './Productos'
import Carrito from './Carrito'
import './ExploreContainer.css';
import Historial from './Historial'
import Notificaciones from './Notificaciones'
import Inicio from './Inicio';
import Buscador from './Buscador'
import BuscarTienda from './BuscarTienda';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">

      {(() => {
         switch (name) {
         case 'Inicio':
         return (
           <div>
          <Productos/>
           </div>    
         )
         case 'Carrito':
         return ( 
          <Carrito/>         )
         case 'Notificaciones':
         return (
          <Notificaciones/>
         )
         case 'Productos':
         return (
          <Productos/>
         )
         case 'Tienda':
         return (
          <BuscarTienda/>
         )
         case 'Historial':
         return ( 
         <Historial/>
         )
         default:
         return (
           <div>404 NOT FOUND :c</div>
         )
        }

       })()}
    </div>
  );
};

export default ExploreContainer;
