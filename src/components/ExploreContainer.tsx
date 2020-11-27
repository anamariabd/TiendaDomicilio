import React from 'react';
import Productos from './Productos'
import Carrito from './Carrito'
import './ExploreContainer.css';
import Historial from './Configuracion'
import Notificaciones from './Notificaciones'
import BuscarTienda from './BuscarTienda';
import Configuracion from './Configuracion';

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
         case 'Mi perfil':
         return ( 
         <Configuracion/>
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
