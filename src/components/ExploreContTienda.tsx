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

const ExploreContTienda: React.FC<ContainerProps> = ({ name }) => {
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
         case 'Reportes':
         return ( 
          <Carrito/>         )
         case 'Pedidos':
         return (
          <Notificaciones/>
         )
         case 'Tiendas':
         return (
          <Productos/>
         )
         case 'Domiciliarios':
         return (
          <BuscarTienda/>
         )
         case 'MisProductos':
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

export default ExploreContTienda;
