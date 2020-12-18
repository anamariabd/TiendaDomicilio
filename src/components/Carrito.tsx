import React, { useState, useContext } from 'react';
import { IonGrid, IonRow, IonCol,  IonCardContent, IonButton, } from '@ionic/react';
import '../Styles/styles.css'
import {FilaProducto} from '../SingleComponents/FilaProducto'
import {listCard, DatosProduct} from '../SingleComponents/ProductCard'
import {compra} from "../Controller/clienteController"
import { localStorageAdd, localStorageGet } from '../Controller/StorageLocal'

interface ProductsCarrito{
  name: string;
  medida: string;
  marca: string;
  Precio: number;
}

export const handleId= (e:string) =>{
 
  IdTienda=e;
  console.log("ID",IdTienda);
  localStorageAdd( "ID", IdTienda);
  return IdTienda;

}


var IdTienda:string;
let valor = localStorageGet("ID");
if(typeof valor === "string"){
    IdTienda = valor;
    console.log("VALOR ID TIEENDA: ", IdTienda);
}

function comprar(lista:Array<pedido>, IdTienda:string){
  console.log("Id en comprar", IdTienda);
  compra(lista, IdTienda);

}

export interface pedido{
  name: string;
  Id: number;
  precio: number;
  count:number;
}


let listaPedido:pedido[] = []

let list:pedido[] = []
const Carrito: React.FC =() => {

  var listaPed:pedido[] = [];
  const[listaProduct, setListaProduct] = useState<DatosProduct[]>([]);
  const[Total, setTotal] = useState(0);
  
  const[compra, setCompra] = useState(false);
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
  var product;
  const total = (name:string, id: number, cantidad: number, precio: number) => {  // esa es la handle
    product = {name: name, Id: id, precio: precio, count: cantidad};
    if(compra){
      listaPedido.push(product);
    }
    list = listaPedido;
  }

  //setListaProduct(listCard);
  
  console.log(list);
 // console.log(listaPedido);
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
               precio={1200} handle = {total} />
              </div>
            );
          })}
      <IonRow>
        <IonCol> Cantidad total: {0}</IonCol>
        <IonCol>Total a pagar: {Total}</IonCol>
      </IonRow>
     <IonButton onClick={()=>{ setCompra(true);setTimeout( ()=>{comprar(list, IdTienda)}, 2000 );}}> Comprar </IonButton>
    </IonGrid>                     

        </IonCardContent>
    );

}

export default Carrito;