import { IonButton, IonSelect, IonSelectOption, IonCol, IonModal, IonLabel, IonContent, IonGrid, IonInput, IonPage, IonRow } from '@ionic/react';
import React, {useState, createRef} from 'react';
import './Register.css';
import  { loadStore, DataStore} from '../Controller/tiendaController'
import {registUser,RegisterData, userCurrent} from '../Controller/UserController';


const Register: React.FC = () => {
  
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [numberphone, setNumberphone] = useState<number>();
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [tUser, setTUser] = useState('');
  const [nameStore, setNameStore] = useState('');
  const [localizacion, setLocalizacion] = useState('');
  
  function photo(photo: File){ //funcion para cargar fotos
    loadStore(photo);
  }
  async function registerUser(){
    console.log(email, password)
    let emailReg = new RegExp('^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$');
   if(name.trim()==='' || username.trim() === '' || email.trim() === '' || numberphone === undefined || address.trim() === ''|| password.trim() === ''){
        console.log("Faltan campos por llenar");
    }else if(!emailReg.test(email)){
        console.log("No es un correo");
    }else{
      let resultado =  await registUser(email, password);
      const idUSer = await RegisterData(name, username, numberphone, address, email,tUser) //La funcion devuelve el valor de id del usuario logueado
    }
  }
  async function registStore(nombre : string, localizacion : string){
  /*  let id = await userCurrent();
    console.log(id)
    if(id !== undefined){
      await DataStore(nombre, id, localizacion) 
    }*/
  }

  const [imagen,  setImagen] = useState<File>();

  return (
    <IonPage>
      <IonContent >
        <IonGrid class="bg">
          <IonRow class="conte">
            <IonCol>
                 
           <IonRow>
               <IonLabel class="entrada">Registrar como: </IonLabel>
                <IonSelect  value={tUser} okText="Aceptar" cancelText="Cancelar" onIonChange = { (e : any) => setTUser(e.target.value)}>
                <IonSelectOption value="Tendero">Tendero</IonSelectOption>
                <IonSelectOption   value="Cliente">Cliente</IonSelectOption>
              </IonSelect>
            </IonRow>
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
              <IonButton /* routerLink="/login"*/  onClick={() =>{ registerUser(); (tUser === "Tendero")? setShowModal(true):console.log("cliente")}}>
                Registrarse
              </IonButton>
            </IonCol>
          </IonRow>
          {/*--------------------------------------- Modal ------------------------------------ */}
          <IonRow>
              <IonCol>
                <IonModal isOpen={showModal} cssClass='my-custom-class'>
                    <IonGrid>
                       
              <IonRow>
                <IonInput class="entrada" placeholder="Nombre de tienda" onIonChange ={(e:any)=>{setNameStore(e.target.value)}} > </IonInput>
              </IonRow>
              <IonRow>
                <IonInput class="entrada" placeholder="Direcion de domicilio" onIonChange = {(e:any)=>{setLocalizacion(e.target.value)}} > </IonInput>
              </IonRow>
              <IonRow>
                <IonLabel class="entrada">Ingrese foto de la tienda: </IonLabel>
              </IonRow>
              <IonRow>{/* ACA SE SUBE LA IMAGEN */}
                <input className="entrada" type="file" onChange= {(e:any)=>{setImagen(e.target.files)}} accept="image/png, image/jpeg" />
              </IonRow>
                    </IonGrid>
                    
              <IonButton /* routerLink="/login"*/ onClick = {() => {registStore(nameStore,localizacion)}}>
                Registrarse
              </IonButton>
              <IonButton onClick={() => setShowModal(false)}>Cerrar</IonButton>
                </IonModal>
                
              </IonCol>
          </IonRow>

        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Register;
