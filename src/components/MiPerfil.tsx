import React, { Fragment, useState } from 'react';
import { IonButton, IonModal, IonLabel, IonListHeader,  IonBackdrop } from '@ionic/react';
import {logOut} from '../Controller/UserController'
import {loadData, idUser} from "../Controller/clienteController"

var ID;

const MiPerfil: React.FC = () => {

  function idCurrent(mail:string){
      idUser(mail)
  }

  async function showData() {
    let result = await loadData();
  
    setName(result.name);
    setNumberphone(result.numberPhone)
    setAddress(result.address)
    ID = result.id;
    setEmail(result.email)
    setLast_name(result.userName);  
    console.log( idCurrent(email),email," ", "id :", ID)
  }
  

  const [name , setName] =useState("");
  const [last_name, setLast_name] =useState(""); 
  const [address, setAddress]=useState("");
  const [numberPhone, setNumberphone] = useState("");
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);

  return(
        <Fragment> 
    {/*-- Default List Header --*/}
    <IonListHeader>
      <IonLabel>Nombre :  {" "+ name } </IonLabel>
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
      <IonLabel>telefono: {" "+ numberPhone}</IonLabel>
    </IonListHeader>

    <IonButton onClick = {logOut} href = "/logo"> LOGOUT </IonButton>
    <IonButton onClick={showData} > user current </IonButton>
    <IonButton onClick = {()=>setShow(true)} > Editar </IonButton>

{/* <IonModal isOpen={show}>
<IonLabel>  </IonLabel>
</IonModal> */}


        </Fragment>
    );

}

export default MiPerfil;