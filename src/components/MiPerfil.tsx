import React, { Fragment, useState } from 'react';
import { IonButton,  IonLabel, IonListHeader } from '@ionic/react';
import {userCurrent,logOut} from '../Controller/UserController'
import {loadData} from "../Controller/clienteController"

var ID;

const MiPerfil: React.FC = () => {

  async function showData() {
      let result = await loadData();

      setName(result.name);
      setNumberphone(result.numberPhone)
      setAddress(result.address)
      ID = result.id;
      setEmail(result.email)
      setLast_name(result.userName);  
  }

  const [name , setName] =useState("");
  const [last_name, setLast_name] =useState(""); 
  const [address, setAddress]=useState("");
  const [numberPhone, setNumberphone] = useState("");
  const [email, setEmail] = useState("");

  return(
        <Fragment> 
    {/*-- Default List Header --*/}
    <IonListHeader>
      <IonLabel>Nombre :  {" "+ name} </IonLabel>
    </IonListHeader>

    {/*-- List Header with Outline Button --*/}
    <IonListHeader>
      <IonLabel>Nombre de usuario:{" "+ last_name}</IonLabel>
    </IonListHeader>
    {/*-- List Header Full Lines --*/}
    <IonListHeader>
      <IonLabel>Dirección: {" "+ address}</IonLabel>
    </IonListHeader>
    {/*-- List Header Inset Lines --*/}   
    <IonListHeader> <IonLabel>Correo: {" "+ email}</IonLabel>
    </IonListHeader>
    {/*-- List Header Inset Lines --*/}   
    <IonListHeader>
      <IonLabel>Mtelefono: {" "+ numberPhone}</IonLabel>
    </IonListHeader>

    <IonButton onClick = {logOut} href = "/logo"> LOGOUT </IonButton>
    <IonButton onClick={userCurrent} > user current </IonButton>
        </Fragment>
    );

}

export default MiPerfil;