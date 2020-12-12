import React, { useState } from 'react';

import { IonButton,useIonViewDidEnter, IonCol, IonModal, IonLabel, IonContent, IonGrid, IonInput, IonPage, IonRow, useIonViewWillEnter } from '@ionic/react';
import Clasificacion from '../SingleComponents/Clasificación' 
import {TiendaCard, DatosTienda} from '../SingleComponents/TiendaCard'
import '../Styles/styles.css'
import { IonList} from '@ionic/react';
import {loadDataStore,editStore} from "../Controller/tiendaController"
import { registUser } from '../Controller/UserController';

var ID:string ;
//Simulando los datos
const Tiendas: DatosTienda[] = [
    {
      name: 'Tienda mi super fresh',
      Localizacion: 'Localización',
      Calificacion: 2,
      Id: "1",
      UrlImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7L9WW1ZfI60LtfM74zaBl-16DwDNIfB_aLw&usqp=CAU"
    },
    {name: 'Tienda la barata',
    Localizacion: 'Localización',
    Calificacion: 1,
    Id: "2",
    UrlImg: "https://image.freepik.com/vector-gratis/diseno-logotipo-supermercado-lema-tienda_23-2148458443.jpg"
  
    }
  ]
  
  const MiTienda: React.FC = () => {

    const [name , setName] = useState('');
    const[address, setAddress] = useState('');
    const [showModal, setShowModal] =useState(true)
    
  
      async function dataStore() {
        let result = await loadDataStore();
        if(typeof result !== "boolean" ){
          setAddress(result.Localizacion);
          setName(result.name)
            ID = result.Id
        }

      }

      async function editData() {
        await editStore(ID,name,address)
      }
      //useIonViewWillEnter(dataStore())
      dataStore()
    return(
      
   /* <div>
      <IonList>
         
      {Tiendas.map((Tiendas, index) => {
              return (
                <div key={index}>
                  <br/>
                  <TiendaCard key={index} Id = {Tiendas.Id} name={Tiendas.name} Localizacion = {Tiendas.Localizacion} Calificacion = {Tiendas.Calificacion} UrlImg={Tiendas.UrlImg}/>
                </div>
              );
            })}
      </IonList>
    </div> */
  
   <IonRow>
    <IonCol>
      <IonModal isOpen={showModal} cssClass='my-custom-class'>
          <IonGrid>
             
    <IonRow>
      <IonInput class="entrada" type = "text" onIonChange ={(e:any)=> {setName(e.target.value)}} value = {name}> </IonInput>
    </IonRow>
    <IonRow>
      <IonInput  class="entrada"  type = "text"  onIonChange = {(e:any)=> setAddress(e.target.value)} value= {address}> </IonInput>
    </IonRow>
    <IonRow>
      <IonLabel class="entrada">Ingrese foto de la tienda: </IonLabel>
    </IonRow>
   {/* <IonRow> ACA SE SUBE LA IMAGEN 
      <input className="entrada" type="file" onChange= {(e:any)=>{} accept="image/png, image/jpeg" />
    </IonRow>*/}
          </IonGrid>
          
    <IonButton onClick = {() => {setShowModal(false);editData()}}>
      Guardar
    </IonButton>
    <IonButton onClick={() => setShowModal(false)}>Cerrar</IonButton>
      </IonModal>
      
    </IonCol>
</IonRow>

  );}
  
  export default MiTienda;