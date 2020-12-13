import React, { Fragment } from 'react';
import { IonButton, IonLabel, IonList, IonListHeader } from '@ionic/react';
import {userCurrent,logOut} from '../Controller/UserController'

const MisCompras: React.FC = () => {

    return(
        <Fragment> 
    {/*-- Default List Header --*/}
    <IonListHeader>
      <IonLabel>Historial de compras</IonLabel>
    </IonListHeader>

    {/*-- List Header with Outline Button --*/}
    <IonListHeader>
      <IonLabel>New This Week</IonLabel>
      <IonButton fill="outline">See All</IonButton>
    </IonListHeader>
    <IonList>
      
    </IonList>


    <IonButton onClick = {logOut} href = "/logo"> LOGOUT </IonButton>
    <IonButton onClick={userCurrent} > user current </IonButton>
        </Fragment>
    );

}

export default MisCompras;