import React, { Fragment, useState } from 'react';
import { IonLabel, IonIcon, IonGrid, IonRow, IonList,IonSelect, IonCol,IonItem, useIonViewWillEnter, IonSelectOption, IonSearchbar,IonButton } from '@ionic/react';
import { searchCircleOutline, searchCircleSharp} from 'ionicons/icons';
import ProductCard from '../SingleComponents/ProductCard'
import '../Styles/styles.css'
import './Productos.css'
import {database} from "../firebaseConfig"
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
       console.log(listaProduct.length)
       return listaProduct;
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
              <div>
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
