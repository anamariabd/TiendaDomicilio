import React from 'react';
import Productos from './Productos'
import Carrito from './Carrito'
import './ExploreContainer.css';
import MisCompras from './MisCompras'
import Notificaciones from './Notificaciones'
import BuscarTienda from './BuscarTienda';
import MiPerfil from './MiPerfil';

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
          <Productos key={1}/>
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
          <Productos key={2}/>
         )
         case 'Tienda':
         return (
          <BuscarTienda/>
         )
         case 'MisCompras':
         return ( 
         <MisCompras/>
         )
         case 'Perfil':
         return ( 
         <MiPerfil/>
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
