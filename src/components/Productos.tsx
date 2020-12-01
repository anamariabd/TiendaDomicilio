import React, { Fragment, useState } from 'react';
import { IonLabel, IonIcon, IonGrid, IonRow, IonList,IonSelect, IonCol,IonItem, IonContent, IonSelectOption, IonButtons, IonSearchbar, IonToolbar, IonButton } from '@ionic/react';
import { searchCircleOutline, searchCircleSharp} from 'ionicons/icons';
import ProductCard from '../SingleComponents/ProductCard'
import '../Styles/styles.css'
import './Productos.css'
import {loadProducts} from "../Controller/UserController"

 async function cargaDato(){ //devuelve datos en una lista de productos
   const resultado = await loadProducts();
   if(typeof resultado !== "number"){ // resultado es una lista de productos.
       for(let element of resultado){
        console.log(element.id, element.name, element.marca); // mostrando id del producto, nombre y otros detalles
       }   
   }else{
     console.log("error")
   }
 }
interface DatosProduct{
  name: string;
  medida: string;
  marca: string;
  Precio: number;
  UrlImg: string
}

const Product: DatosProduct[] = [
  {
    name: 'Arroz',
    medida: '500g',
    marca: 'Roa ',
    Precio: 1200,
    UrlImg: 'https://www.arrozroa.com/landingarrozroa/wp-content/uploads/2019/12/arroz-roa-fortiplus.png'
  },
  {
    name: 'Frijol Rojo',
    medida: '500g',
    marca: 'N.n.',
    Precio: 800,
    UrlImg: 'https://www.midia.com.co/sites/default/files/styles/product_detail/public/2020-06/7705946351805.png?itok=A6LSWDWp'
  }
]


const Productos: React.FC = () => {
  
    return(
        <Fragment>    
  <IonGrid>
    <IonRow>
      <IonCol size="9">
        <IonSearchbar animated placeholder="Buscar"></IonSearchbar>
      </IonCol>
      <IonCol size="2">
        <IonButton id="botonBuscar">
          <IonIcon md={searchCircleOutline}></IonIcon>
        </IonButton>
      </IonCol>
    </IonRow>
    <IonRow>
      <IonCol>
        <IonList>
          <IonItem>
            <IonLabel>Ordenar por</IonLabel>
            <IonSelect value="brown" okText="Aceptar" cancelText="Cancelar">
              <IonSelectOption value="brown">Precio</IonSelectOption>
              <IonSelectOption value="blonde">Marca</IonSelectOption>
              <IonSelectOption value="black">Categoria</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonList>
      </IonCol>
    </IonRow>
   {/* */}
    
   {Product.map((Product, index) => {
      
            return (
             <div>
              <br/>
              <ProductCard name = {Product.name} medida = {Product.medida} marca = {Product.marca} precio={Product.Precio} UrlImg = {Product.UrlImg} />
              </div>
            );
          })}
  </IonGrid>
        </Fragment>
    );

}

export default Productos;
