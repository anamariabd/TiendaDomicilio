import React, { Fragment, useState } from 'react';
import { IonGrid, IonRow, IonCol, IonContent } from '@ionic/react';
import Productos from './Productos'

const Carrito: React.FC = () => {

    

    return(
        <Fragment> 

<IonGrid>
      <IonRow>
        <IonCol>Producto</IonCol>
        <IonCol>Cantidad</IonCol>
        <IonCol>Precio unit.</IonCol>
        <IonCol>Precio total</IonCol>
        <IonCol>-</IonCol>
      </IonRow>

      <IonRow>  
        <IonCol>ion-col</IonCol>
        <IonCol>ion-col</IonCol>
        <IonCol>ion-col</IonCol>
        <IonCol>ion-col</IonCol>
        <IonCol>ion-col   <br />#</IonCol>
      </IonRow>

    </IonGrid>                     

        </Fragment>
    );

}

export default Carrito;