import React, { Fragment } from 'react';
import Clasificacion from '../SingleComponents/Clasificación' 
import Buscador from './Buscador'
import {downloadOutline, downloadSharp, eyeOutline, eyeSharp} from 'ionicons/icons';
import '../Styles/styles.css'
import {IonAvatar, IonItem, IonLabel, IonList, IonToggle, IonIcon, IonItemSliding, IonItemOption, IonItemOptions, IonContent, IonButton } from '@ionic/react';

const BuscarTienda: React.FC = () => (
  <Fragment>
          <h2 className="sub-title"> Estado del pedido: </h2>
          <p>Su pedido n°12 ya está en camino! en 5 minutos llegará su pedido</p>   
       
         
          <br/>
          
          <IonButton className="btn-invisible" ><IonIcon ios={downloadSharp} md={downloadOutline}/></IonButton><p>Descargar factura en PDF</p>
          <IonButton className="btn-invisible" > <IonIcon ios={eyeSharp} md={eyeOutline}/></IonButton><p>Visualizar factura</p>            
         
     
        <IonList>
         <IonAvatar id="perfil"> 
        <img src="https://sociedadcivilnavarra.com/wp-content/uploads/2015/08/perfil-hombre.jpg" />
        </IonAvatar>
        
        <IonLabel>Juanchito Trucupei</IonLabel>
        <div className="article-item" id = "article-template">
                    <div className = "image-wrap">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7L9WW1ZfI60LtfM74zaBl-16DwDNIfB_aLw&usqp=CAU" alt = "Tienda">
                         </img>
                    </div>
        </div>
        <IonLabel>Tienda mi super fresh</IonLabel>
                    <span>500Lb</span>
                    <p>Localización</p>
                    
             
      <div id ="star"> <Clasificacion/> </div>  
        <input type="button" name = "submit" className="btn" value="Ver tienda"/>
     
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
            </div>
            <div> <Clasificacion/> </div>  
        <input type="button" name = "submit" className="btn" value="Ver tienda"/>
        </IonList>
  </Fragment>
);

export default BuscarTienda;