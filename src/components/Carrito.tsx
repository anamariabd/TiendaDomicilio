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
const Productos: DatosProduct[] = [
  {
    name: 'Arroz',
    medida: '500g',
    marca: 'Roa ',
    Id: 12
    //Precio: 1200
  },
  {
    name: 'Frijol Rojo',
    medida: '500g',
    marca: 'N.n.',
    Id: 10
   // Precio: 2000
  }
]

const Carrito: React.FC =() => {

  //const [precioTotal, setPrecioTotal] = useState(0);
  //const [ ProductAdd, setProductAdd] = useState(0);
  // const[listaProduct, setListaProduct] = useState<DatosProduct[]>([]);
 var total = 0;
 const[listaProduct, setListaProduct] = useState<DatosProduct[]>([]);
  //setListaProduct(listCard);

  const Delete = (dato:number) =>{
    var i = 0;
    listCard.map((ind)=>{
      if(ind.Id === dato){
        listCard.splice(i,1);
        setListaProduct([...listaProduct]);
      }
      i++;
    });
    
    console.log(listCard.length);
  }  
 
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
              <FilaProducto eliminar={Delete} Id={listCard.Id} key = {listCard.Id} name = {listCard.name+" "+listCard.marca + " " + listCard.medida} precio={1200} />
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