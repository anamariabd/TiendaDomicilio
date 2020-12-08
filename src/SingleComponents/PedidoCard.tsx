import React, { useState } from 'react';
import { IonAvatar, IonLabel, IonItem, IonItemOption, IonItemOptions, IonContent} from '@ionic/react';
import './Clasificacion.css'

import Clasificacion from '../SingleComponents/Clasificación' 


const PedidoCard: React.FC = () => {
    return( 
    <div>
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
 
      </div>
    );

}
export default PedidoCard;