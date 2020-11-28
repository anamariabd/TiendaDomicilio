import React from 'react';
import { IonGrid, IonRow, IonCol, IonContent, IonCardContent, } from '@ionic/react';
import '../Styles/styles.css'
import FilaProducto from '../SingleComponents/FilaProducto'

interface ProductsCarrito{
  name: string;
  Precio: number;
}

const Productos: ProductsCarrito[] = [
  {
    name: 'Arroz Roa 500g',
    Precio: 1200
  },
  {
    name: 'Frijol Rojo 500g',
    Precio: 2000
  }
]

const Carrito: React.FC =() => {


    return(
       <IonCardContent> 

      <IonGrid>
      <IonRow>
        <IonCol>Producto</IonCol>
        <IonCol> Unidades </IonCol>
        <IonCol>Precio total</IonCol>
        <IonCol></IonCol>
      </IonRow>

      {Productos.map((Productos, index) => {
            return (
             <div>
              <br/>
              <FilaProducto name = {Productos.name} precio={Productos.Precio} />
              </div>
            );
          })}

    </IonGrid>                     

        </IonCardContent>
    );

}

export default Carrito;