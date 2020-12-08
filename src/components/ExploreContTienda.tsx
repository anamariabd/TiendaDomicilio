import React from 'react';
import Productos from './Productos'
import Reportes from '../pages/Reportes'
import './ExploreContainer.css';
import BuscarTienda from './BuscarTienda';
import MiPerfil from './MiPerfil';
import EstadoPedido from '../pages/EstadoPedido';
import Domiciliarios from '../pages/Domiciliarios';

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
          <Reportes/>         )
         case 'Pedidos':
         return (
          <EstadoPedido/>
         )
         case 'Tiendas':
         return (
          <BuscarTienda/>
         )
         case 'Domiciliarios':
         return (
          <Domiciliarios/>
         )
         case 'MisProductos':
         return ( 
         <Productos/>
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
