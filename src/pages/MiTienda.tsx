import React from 'react';
import Clasificacion from '../SingleComponents/Clasificación' 
import {TiendaCard, DatosTienda} from '../SingleComponents/TiendaCard'
import '../Styles/styles.css'
import { IonList} from '@ionic/react';


//Simulando los datos
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
  
  const MiTienda: React.FC = () => (
    <div>

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
    </div>
  );
  
  export default MiTienda;