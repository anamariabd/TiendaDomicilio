import React, { useState } from 'react';
import { IonGrid, IonRow, IonCol, useIonViewWillEnter, IonCardContent, IonButton, } from '@ionic/react';
import '../Styles/styles.css'
import FilaProducto from '../SingleComponents/FilaProducto'
import {listCard, DatosProduct} from '../SingleComponents/ProductCard'
import {compra} from "../Controller/clienteController"
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

  //const [precioTotal, setPrecioTotal] = useState(0);
  //const [ ProductAdd, setProductAdd] = useState(0);
 var total = 0;

 
 const[listaProduct, setListaProduct] = useState<DatosProduct[]>([]);
  //setListaProduct(listCard);
    return(
       <IonCardContent> 

      <IonGrid>
      <IonRow>
        <IonCol>Producto</IonCol>
        <IonCol> Unidades </IonCol>
        <IonCol>Precio total</IonCol>
      </IonRow>

      {listCard.map((listCard, index) => {
            return (
             <div  key={index}>
              <br/>
<<<<<<< HEAD
              <FilaProducto key={listCard.Id} name = {listCard.name+" "+listCard.marca+listCard.medida} precio={1200} />
=======
              <FilaProducto key  = {listCard.Id} name = {listCard.name+" "+listCard.marca + " " + listCard.medida} precio={1200} />
>>>>>>> Fredy
              </div>
            );
          })}

          
      <IonRow>
        <IonCol>Total a pagar: {total}</IonCol>
      </IonRow>
     <IonButton> Comprar </IonButton>
    </IonGrid>                     

        </IonCardContent>
    );

}

export default Carrito;