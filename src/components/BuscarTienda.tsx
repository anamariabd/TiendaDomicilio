import React, { useState } from 'react';
import Clasificacion from '../SingleComponents/Clasificación' 
import Buscador from './Buscador'
import {TiendaCard, DatosTienda} from '../SingleComponents/TiendaCard'
import '../Styles/styles.css'
import { IonButton, IonList, useIonViewWillEnter} from '@ionic/react';
import {listStore,store} from '../Controller/clienteController'
import {handleId} from './Carrito'

const BuscarTienda: React.FC = () => {
  const [stores,setStores] = useState<store[]> ([]);
  
  async function ListStore() {
    const result = await listStore();  
    if(typeof result !== "number"){
      setStores(result)
    }
  }

 const handleSearch = (e:any) =>{
    console.log(e);
    
  }

  ListStore()
  return (
    <div>

      <Buscador HandleSearch={handleSearch} />
        
        <Clasificacion/>

      {/*-- List of Text Items --*/}
      <IonList>
        
      {stores.map((stores, index) => {
              return (
                <div key={index}>
                  <br/>
                  <TiendaCard HandleID={handleId} key={index} Id = {stores.id} name={stores.name} Localizacion = {stores.address} Calificacion = {stores.score} UrlImg={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7L9WW1ZfI60LtfM74zaBl-16DwDNIfB_aLw&usqp=CAU"}/>
                </div>
              );
            })}
      </IonList>
    </div>
  );
}

export default BuscarTienda;