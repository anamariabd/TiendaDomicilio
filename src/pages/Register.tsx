import { IonButton, IonCol, IonContent, IonGrid, IonInput, IonPage, IonRow } from '@ionic/react';
import React, {useState} from 'react';
import './Register.css';
import {registUser} from '../Controller/UserController';


const Register: React.FC = () => {
  
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [numberphone, setNumberphone] = useState<number>();
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');

  async function registerUser(){
    console.log(email, password)
    
      
     
    let emailReg = new RegExp('^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$');

   if(name.trim()==='' || username.trim() === '' || email.trim() === '' || numberphone === undefined || address.trim() === ''|| password.trim() === ''){
        console.log("Faltan campos por llenar");
    }else if(!emailReg.test(email)){
        console.log("No es un correo");
    }else{
      let resultado =  await registUser(email, password);
    }
  }

  return (
    <IonPage>
      <IonContent >
        <IonGrid class="bg">
          <IonRow class="conte">
            <IonCol>
              <IonRow>
                <IonInput class="entrada" placeholder="Nombre Completo" onIonChange = { (e : any) => setName(e.target.value)}> </IonInput>
              </IonRow>
              <IonRow>
                <IonInput class="entrada" placeholder="Nombre de usuario"  onIonChange = { (e : any) => setUsername(e.target.value)}> </IonInput>
              </IonRow>
              <IonRow>
                <IonInput class="entrada" type = "email" placeholder="Correo Electronico" onIonChange = { (e : any) => setEmail(e.target.value)}> </IonInput>
              </IonRow>
              <IonRow>
                <IonInput class="entrada" type= "number" placeholder="Numero de telefono" onIonChange = { (e : any) => setNumberphone(e.target.value)}> </IonInput>
              </IonRow>
              <IonRow>
                <IonInput class="entrada" placeholder="Direcion de domicilio" onIonChange = { (e : any) => setAddress(e.target.value)}> </IonInput>
              </IonRow>
              <IonRow>
                <IonInput type ="password" class="entrada" placeholder="Contraseña"  onIonChange = { (e : any) => setPassword(e.target.value) }> </IonInput>
              </IonRow>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol id="bIngresar">
              <IonButton /* routerLink="/login"*/ onClick = {() => {registerUser()}}>
                Registrarse
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Register;
