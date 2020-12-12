import React, { useState } from 'react';
import Clasificacion from '../SingleComponents/Clasificación' 
import Buscador from './Buscador'
import {TiendaCard, DatosTienda} from '../SingleComponents/TiendaCard'
import '../Styles/styles.css'
import { IonList, useIonViewWillEnter} from '@ionic/react';
import {listStore,store} from '../Controller/clienteController'

/*Simulando los datos
const Tiendas: DatosTienda[] = [
  {
    name: 'Tienda mi super fresh',
    Localizacion: 'Localización',
    Calificacion: 'Roa ',
    Id: 1,
    UrlImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7L9WW1ZfI60LtfM74zaBl-16DwDNIfB_aLw&usqp=CAU"
  },
  {name: 'Tienda la barata',
  Localizacion: 'Localización',
  Calificacion: 'Roa ',
  Id: 2,
  UrlImg: "https://image.freepik.com/vector-gratis/diseno-logotipo-supermercado-lema-tienda_23-2148458443.jpg"

  }
]
*/
const BuscarTienda: React.FC = () => {
  const [stores,setStores] = useState<store[]> ([]);
  
  async function ListStore() {
    const result = await listStore();  
    if(typeof result !== "number"){
      setStores(result)
    }
  }
  useIonViewWillEnter( ()=>{ListStore()} )
  return (
    <div>

      <Buscador/>
        
        <input type="button" name = "submit" className="btn" value="Buscar"/>
        
        <Clasificacion/>

      {/*-- List of Text Items --*/}
      <IonList>
        
      {stores.map((stores, index) => {
              return (
                <div key={index}>
                  <br/>
                  <TiendaCard key={index} Id = {stores.id} name={stores.name} Localizacion = {stores.address} Calificacion = {stores.score} UrlImg={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7L9WW1ZfI60LtfM74zaBl-16DwDNIfB_aLw&usqp=CAU"}/>
                </div>
              );
            })}
      </IonList>
    </div>
  );
}

export default BuscarTienda;