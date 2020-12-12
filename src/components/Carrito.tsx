import React, { useState } from 'react';
import { IonGrid, IonRow, IonCol, useIonViewWillEnter, IonCardContent, IonButton, } from '@ionic/react';
import '../Styles/styles.css'
import {FilaProducto} from '../SingleComponents/FilaProducto'
import {listCard, DatosProduct} from '../SingleComponents/ProductCard'

interface ProductsCarrito{
  name: string;
  medida: string;
  marca: string;
  Precio: number;
}

export interface pedido{
  name: string;
  Id: number;
  count:number;
}

const Carrito: React.FC =() => {

  var listaPed:pedido[] = [];
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
    
    console.log(listCard);
  }  

  const cantidad = (e:any) =>{
    console.log(e);
  }

  const total = (e:number) => {
    console.log(e);
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
              <FilaProducto eliminar={Delete}
               Id={listCard.Id} key = {listCard.Id} 
               name = {listCard.name+" "+listCard.marca +" "+ listCard.medida} 
               precio={1200} listPedido = {listaPed} handle = {total} />
              </div>
            );
          })}

          
      <IonRow>
        <IonCol> Cantidad total: {0}</IonCol>
        <IonCol>Total a pagar: {total}</IonCol>
      </IonRow>
     <IonButton onClick={cantidad}> Comprar </IonButton>
    </IonGrid>                     

        </IonCardContent>
    );

}

export default Carrito;