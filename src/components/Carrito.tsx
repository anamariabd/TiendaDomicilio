import React from 'react';
import { IonGrid, IonRow, IonCol, IonContent, IonCardContent, } from '@ionic/react';
import '../Styles/styles.css'
import FilaProducto from '../SingleComponents/FilaProducto'

const Carrito: React.FC = () => {

    return(
       <IonCardContent> 

      <IonGrid>
      <IonRow>
        <IonCol>Producto</IonCol>
        <IonCol> Unidades </IonCol>
        <IonCol>Precio unit.</IonCol>
        <IonCol>Precio total</IonCol>
        <IonCol></IonCol>
      </IonRow>
      <br/>
      <FilaProducto/>
      <br/>
      <FilaProducto/>
    </IonGrid>                     

        </IonCardContent>
    );

}

export default Carrito;