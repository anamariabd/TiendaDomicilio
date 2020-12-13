import React, { Fragment, useState } from 'react';

import { IonButton,IonItem, IonCol, IonModal, IonLabel, IonGrid, IonInput,IonRow} from '@ionic/react';
import { DatosTienda} from '../SingleComponents/TiendaCard'
import '../Styles/styles.css'
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
    const [UrlImg, setUrlImg] =useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7L9WW1ZfI60LtfM74zaBl-16DwDNIfB_aLw&usqp=CAU")
    const [Localizacion, setLocalizacion] =useState("nose")
    
    const [showModal, setShowModal] =useState(false)
    
    
  
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

      <IonCol>
        
      <IonItem>
      <div id = "articles">
                <div className="article-item" id = "article-template">
                    <div className = "image-wrap">
                        <img src={UrlImg} alt = "Tienda">
                         </img>
                    </div>
                      <IonLabel>{name}</IonLabel>
                     <span>500Lb</span>
                     <p>{Localizacion}</p>
                </div>
                
      </div>
       <input type="button" name = "submit" className="btn" value="Ver tienda"/>
      </IonItem>
      
  
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

</IonCol>

  );}
  
  export default MiTienda;