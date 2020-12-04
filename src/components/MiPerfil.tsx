import React, { Fragment } from 'react';
import { IonButton,  IonLabel, IonListHeader } from '@ionic/react';
import {userCurrent,logOut} from '../Controller/UserController'

const MiPerfil: React.FC = () => {

    return(
        <Fragment> 
    {/*-- Default List Header --*/}
    <IonListHeader>
      <IonLabel>Nombre</IonLabel>
    </IonListHeader>

    {/*-- List Header with Outline Button --*/}
    <IonListHeader>
      <IonLabel>Apellido</IonLabel>
    </IonListHeader>
    {/*-- List Header Full Lines --*/}
    <IonListHeader>
      <IonLabel>Dirección:</IonLabel>
    </IonListHeader>
    {/*-- List Header Inset Lines --*/}   
    <IonListHeader>
      <IonLabel>Mi telefono:</IonLabel>
    </IonListHeader>

    <IonButton onClick = {logOut} href = "/logo"> LOGOUT </IonButton>
    <IonButton onClick={userCurrent} > user current </IonButton>
        </Fragment>
    );

}

export default MiPerfil;