import React, { Fragment, useState } from 'react';
import { IonLabel, IonIcon, IonGrid, IonRow, IonList,IonSelect, IonCol,IonItem,IonSelectOption, IonSearchbar,IonButton } from '@ionic/react';
import { searchCircleOutline} from 'ionicons/icons';
import ProductCard from '../SingleComponents/ProductCard'
import '../Styles/styles.css'
import './Productos.css'
import {produt,loadProducts} from "../Controller/UserController"
//import {produt} from "../Controller/UserController";


const list: produt[] = [];

const Productos: React.FC = () => {

 const[listaProduct, setListaProduct] = useState<produt[]>([]);

 async function loads() {
    var result = await loadProducts();
    if (typeof result !== "number"){
      setListaProduct(result);
    }
    
 }
loads();
  
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
              <IonSelectOption value="precio">Precio</IonSelectOption>
              <IonSelectOption value="Marca">Marca</IonSelectOption>
              <IonSelectOption value="Categoria">Categoria</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonList>
      </IonCol>
    </IonRow>
    {listaProduct.map((listaProduct, index) => {
            return (
              <div key={index}>
                <br/>
                <ProductCard key={index} Id = {listaProduct.id} name={listaProduct.name} medida = {listaProduct.medida} marca = {listaProduct.marca} /*UrlImg={listaProduct.img}*//>
              </div>
            );
          })}

 </IonGrid>
        </Fragment>
    );

}

export default Productos;
