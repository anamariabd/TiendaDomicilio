import React, { Fragment, useState } from 'react';
import { IonLabel, IonIcon, IonGrid, IonRow, IonList,IonSelect, IonCol,IonItem, useIonViewWillEnter, IonSelectOption, IonSearchbar,IonButton } from '@ionic/react';
import { searchCircleOutline, searchCircleSharp} from 'ionicons/icons';
import ProductCard from '../SingleComponents/ProductCard'
import '../Styles/styles.css'
import './Productos.css'
<<<<<<< HEAD
import {database} from "../Controller/firebaseConfig"
=======
import {database} from "../Controller/UserController"
>>>>>>> 11d2f20fdae0d9a61de800a572d670952b1a419c
import {produt} from "../Controller/UserController";


const list: produt[] = [];

const Productos: React.FC = () => {

 const[listaProduct, setListaProduct] = useState<produt[]>([]);

async function loadProducts() {
    
  const result =  await database.collection("producto").get() // TOMA LOS DATOS DE LA TABLA "producto" Y LOS OBTIENE
     .then(
      (querySnapshot) =>{
        querySnapshot.forEach((doc :  any) =>{
          list.push({id: doc.id,name:doc.data().nombre, img: doc.data().imagen, medida: doc.data().medida, marca:  doc.data().marca});
        }); 
       return list;
      }) 
     .catch((e: any)=>{
       return 0;
     });
     setListaProduct(list);

     return result;  
}

useIonViewWillEnter( ()=>{ loadProducts(); } )

  
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
