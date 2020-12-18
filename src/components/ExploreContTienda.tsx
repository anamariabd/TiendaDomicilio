import React from 'react';
import Productos from './Productos'
import Reportes from '../pages/Reportes'
import './ExploreContainer.css';
import MiTienda from '../pages/MiTienda';
import MiPerfil from './MiPerfil';
import EstadoPedido from '../pages/EstadoPedido';
import Domiciliarios from '../pages/Domiciliarios';
import Inicio from './Inicio';
import ListaPedidos from '../SingleComponents/ListaPedidos'

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
          <Inicio/>
           </div>    
         )
         case 'Reportes':
         return ( 
          <Reportes/>         )
         case 'Pedidos':
         return (
          <EstadoPedido/>
         )
         case 'Tienda':
         return (
          <MiTienda/>
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
         case 'ListaPedidos':
          return(
            <ListaPedidos/>
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
