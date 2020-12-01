import React from 'react';
import Clasificacion from '../SingleComponents/Clasificación' 
import Buscador from './Buscador'
import '../Styles/styles.css'
import { IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent } from '@ionic/react';

const BuscarTienda: React.FC = () => (
  <div>

     <Buscador/>
      
      <input type="button" name = "submit" className="btn" value="Buscar"/>
      
      <Clasificacion/>

    {/*-- List of Text Items --*/}
    <IonList>
      <IonItem href = "#">
      <div id = "articles">
                <div className="article-item" id = "article-template">
                    <div className = "image-wrap">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7L9WW1ZfI60LtfM74zaBl-16DwDNIfB_aLw&usqp=CAU" alt = "Tienda">
                         </img>
                    </div>
         <IonLabel>Tienda mi super fresh</IonLabel>
                    <span>500Lb</span>
                    <p>Localización</p>
                    
                </div>
                
      <div> <Clasificacion/> </div>  
          </div>
        <input type="button" name = "submit" className="btn" value="Ver tienda"/>
      </IonItem>
      <IonItem href = "#">
      <div id = "articles">
                <div className="article-item" id = "article-template">
                    <div className = "image-wrap">
                        <img src="https://image.freepik.com/vector-gratis/diseno-logotipo-supermercado-lema-tienda_23-2148458443.jpg" alt = "Tienda">
                         </img>
                    </div>

        <IonLabel>Tienda la barata</IonLabel>
                    <span>500Lb</span>
                    <p>Localización</p>
                    
                </div>
                
            <div> <Clasificacion/> </div>  
            </div>
        <input type="button" name = "submit" className="btn" value="Ver tienda"/>
      </IonItem>
    </IonList>
  </div>
);

export default BuscarTienda;