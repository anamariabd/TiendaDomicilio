import {IonButton, IonLabel,IonSelectOption, IonModal, IonSelect, IonCol, IonContent, IonGrid, IonInput, IonPage, IonRow } from '@ionic/react';
import React, {useState, useEffect} from 'react';
import './Login.css';

import { Redirect} from 'react-router-dom';
import {loginUser, usuarios, usuario, userCurrent} from '../Controller/UserController'

const list: usuario[] = [];

var IsAuth:boolean;
const Login: React.FC = () => {

  const  [IsUser, setIsUser] = useState(false);
  const  [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [entry, setEntry] = useState('/page/Inicio');
  
  const [ModalError, setModalError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [tUser, setTUser] = useState('');
 const expressEmail = new RegExp('^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$');
 function validateEmail(){
    if(expressEmail.test(username)){
      return true
    }
    return false;
 }
async function login(){
 if(validateEmail()){
  if( usuarios(username,tUser)){
    IsAuth = await loginUser(username, password);
    if(IsAuth){
      setIsUser(true);
      return true;
    }
    else{
      setIsUser(false);
      return false;
    }
  }
 }else{
   alert("Ingresa un correo valido")
 }  
}

 const Signed =()=>{
   console.log(IsAuth);
   if(IsAuth){
     setShowModal(true);
     setModalError(false);
   }else{
     setModalError(true);
     setShowModal(false);
   }
 }

  return (
    <IonPage>
      <IonContent >
        <IonGrid class="bg">
          <IonRow class="cont">
            <IonCol>
            <IonRow>
               <IonLabel class="entrada">Tipo de usuario:</IonLabel>
                <IonSelect onIonChange={(e:any)=> {setTUser( e.detail.value);  setEntry("/"+e.detail.value)}} value={tUser} okText="Aceptar" cancelText="Cancelar" >
                <IonSelectOption value="Tendero">Tendero</IonSelectOption>
                <IonSelectOption  value="Cliente">Cliente</IonSelectOption>
              </IonSelect> 
            </IonRow>
            <form>
              <IonRow>
                <IonInput class="entrada" 
                  placeholder="Nombre de usuario"
                  onIonChange = {(e: any)=> setUsername(e.target.value)}>
                </IonInput>
              </IonRow>
              <IonRow>
                <IonInput class="entrada" type ="password" placeholder="Contraseña" onIonChange = {(e:any) => setPassword(e.target.value)}> </IonInput>
              </IonRow>
            </form>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol id="bIngresar">
              <IonButton onClick = {()=>{ login(); setTimeout( Signed , 3000 ); }}  >
                { /*  href={"/page"+entry+"/Inicio"} */}
                Iniciar Sesion
              </IonButton>
            </IonCol>
          </IonRow>

          <IonRow>
              <IonCol>
                <IonModal isOpen={showModal} cssClass='my-custom-class'>
             
                <IonLabel class="entrada">Desea mantener la sesión iniciada? </IonLabel>
           
                <IonCol>  <IonButton href={"/page"+tUser+"/Inicio"} >Si</IonButton>  </IonCol>
                   <IonCol>   <IonButton href={"/page"+tUser+"/Inicio"}>No</IonButton>  </IonCol>
                </IonModal>
              </IonCol>
          </IonRow>  
          
          <IonRow>
                <IonModal isOpen={ ModalError} cssClass='my-custom-class'>
              <IonRow>
                <IonLabel class="entrada">Error en su correo o Contraseña </IonLabel>
              </IonRow>
              
              <IonButton /* routerLink="/login"*/href={"/login"} >
                Intentar nuevamente
              </IonButton>
                </IonModal>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export {Login, IsAuth};