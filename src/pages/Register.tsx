import { IonButton, IonSelect, IonSelectOption, IonCol, IonModal, IonLabel, IonContent, IonGrid, IonInput, IonPage, IonRow } from '@ionic/react';
import React, {useState, createRef} from 'react';
import './Register.css';
import  { loadDataStore, DataStore, loadphotoStore} from '../Controller/tiendaController'
import {registUser,RegisterData, userCurrent} from '../Controller/UserController';
import { idUser, RegisterClient } from '../Controller/clienteController';
var aux:boolean; 

const Register: React.FC = () => {
  
  const [RegBarrio, setRegBarrio] = useState(false);
  const [confirmar, setConfirmar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  
  const [Barrio, setBarrio] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [numberphone, setNumberphone] = useState<number>();
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [tUser, setTUser] = useState('');
  const [nameStore, setNameStore] = useState('');
  const [localizacion, setLocalizacion] = useState('');
  
  const [entry, setEntry] = useState('/page/Inicio');
  function photo(photo: File){ //funcion para cargar fotos
    loadphotoStore(photo);
  }
  var aux1 :any;// Variable global, toma valores dependiendo del resultado de la creacion de usuarios
 // Variable global, toma valores dependiendo del resultado de la creacion de credenciales de acceso
  async function registerUser(){
    console.log(email, password)
    let emailReg = new RegExp('^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$');
   if(name.trim()==='' || username.trim() === '' || email.trim() === '' || numberphone === undefined || address.trim() === ''|| password.trim() === ''){
        console.log("Faltan campos por llenar");
    }else if(!emailReg.test(email)){
        console.log("No es un correo");
    }else{
      const resultado =  await registUser(email, password); //Registro de email 
      console.log("resultado",resultado)
      aux = resultado;
      console.log("resultado",aux)
      const idUSer = await RegisterData(name, username, numberphone, address, email,tUser) //La funcion devuelve el valor de id del usuario logueado
     //  aux1 = idUSer;
    }
  }
  //REGISTROS DATOS DE LA TIENDA
  let id:string;
  async function registStore(nombre : string, localizacion : string){
    let correo = await userCurrent();
    if (correo !==false){
     id = await idUser(correo)
    }
    await DataStore(nombre, id, localizacion) 
    
  }
  //REGISTRO DATOS DEL CLIENTE
  async function registClient(barrio:string,direccion:string) {
    let correo = await userCurrent();
    if (correo !==false){
     id = await idUser(correo)
    }
    await RegisterClient(barrio,direccion,id)
  }
  //VERIFICA
  const Signed =()=>{
    console.log(aux);
    if(aux){
      setShowModal(false);
      setRegBarrio(false);
      setConfirmar(true);
     // setModalError(false);
    }else{
    //  setModalError(true);

      setConfirmar(false);
    }
  }

  const RegistrarCliente = () =>{
    registClient(Barrio, address); 
    setTimeout( Signed ,3000);
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
                <IonSelect okText="Aceptar" cancelText="Cancelar" onIonChange={(e:any)=> {setTUser( e.detail.value);  setEntry("/"+e.detail.value); console.log(entry)}} value={tUser}>
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
              <IonButton  /* routerLink="/login"*/  onClick={() =>{ registerUser(); (tUser === "Tendero")? setShowModal(true) : setRegBarrio(true)}}>
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
                    
              <IonButton /* routerLink="/login"*/ onClick = {() => {registStore(nameStore,localizacion); setTimeout( Signed ,2500)}}>
                Registrarse
              </IonButton>
              <IonButton onClick={() => setShowModal(false)}>Cerrar</IonButton>
                </IonModal>
                
              </IonCol>
          </IonRow>

          {/*--------------------------------------- Modal ------------------------------------ */}

          <IonRow>
              <IonCol>
                <IonModal isOpen={RegBarrio} cssClass='my-custom-class'>
                    <IonGrid>
              <IonRow>
                <IonLabel class="entrada">Ingrese barrio o referencia: </IonLabel>
              </IonRow>
              <IonRow>
                <IonInput class="entrada" placeholder="Barrio, edificio, conjunto..." onIonChange ={(e:any)=>{setBarrio(e.target.value)}} > </IonInput>
              </IonRow>
                    </IonGrid>
                    
              <IonButton /* routerLink="/login"*/ onClick = {() => { RegistrarCliente() }}>
                Registrarse
              </IonButton>
                </IonModal>
              </IonCol>
          </IonRow>

          {/*--------------------------------------- Modal ------------------------------------ */}    

          <IonRow>
              <IonCol>
               <IonModal isOpen={confirmar} cssClass='my-custom-class'>
                <IonLabel class="entrada">Desea mantener la sesión iniciada? </IonLabel>
               <IonCol>  <IonButton href={"/page"+tUser+"/Inicio"} >Si</IonButton>  </IonCol>
                   <IonCol>   <IonButton href={"/page"+tUser+"/Inicio"}>No</IonButton>  </IonCol>
              
               </IonModal>
              </IonCol>
          </IonRow>  

        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Register;
