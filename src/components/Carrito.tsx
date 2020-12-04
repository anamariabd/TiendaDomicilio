import React, { useState } from 'react';
import { IonGrid, IonRow, IonCol, IonContent, IonCardContent, } from '@ionic/react';
import '../Styles/styles.css'
import FilaProducto from '../SingleComponents/FilaProducto'

interface ProductsCarrito{
  name: string;
  medida: string;
  marca: string;
  Precio: number;
}
//Simulando los datos
const Productos: ProductsCarrito[] = [
  {
    name: 'Arroz',
    medida: '500g',
    marca: 'Roa ',
    Precio: 1200
  },
  {
    name: 'Frijol Rojo',
    medida: '500g',
    marca: 'N.n.',
    Precio: 2000
  }
]

const Carrito: React.FC =() => {

  const [precioTotal, setPrecioTotal] = useState(0);

 var total = 0;

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
             <div  key={index}>
              <br/>
              <FilaProducto name = {Productos.name+" "+Productos.marca+Productos.medida} precio={Productos.Precio} />
              </div>
            );
          })}

          
      <IonRow>
        <IonCol>Total a pagar: {total}</IonCol>
      </IonRow>
     
    </IonGrid>                     

        </IonCardContent>
    );

}

export default Carrito;