import React, { Fragment } from 'react';
import { IonButton, IonItem, IonLabel, IonList, IonListHeader } from '@ionic/react';
import {userCurrent,logOut} from '../Controller/UserController'

const MisCompras: React.FC = () => {

    return(
        <Fragment> 
    {/*-- Default List Header --*/}
    <IonListHeader>
      <IonLabel>List Header</IonLabel>
    </IonListHeader>

    {/*-- List Header with Outline Button --*/}
    <IonListHeader>
      <IonLabel>New This Week</IonLabel>
      <IonButton fill="outline">See All</IonButton>
    </IonListHeader>

    {/*-- List Header Full Lines --*/}
    <IonListHeader lines="full">
      <IonLabel>New This Week</IonLabel>
      <IonButton>See All</IonButton>
    </IonListHeader>

    {/*-- List Header Inset Lines --*/}
    <IonListHeader lines="inset">
      <IonLabel>New This Week</IonLabel>
      <IonButton>See All</IonButton>
    </IonListHeader>

    <IonButton onClick = {logOut} href = "/logo"> LOGOUT </IonButton>
    <IonButton onClick={userCurrent} > user current </IonButton>
        </Fragment>
    );

}

export default MisCompras;