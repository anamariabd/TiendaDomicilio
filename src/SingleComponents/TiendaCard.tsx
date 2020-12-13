import React, { Fragment } from 'react';
import {  IonLabel, IonItem} from '@ionic/react';
import './Clasificacion.css'

import Clasificacion from '../SingleComponents/Clasificación' 

export interface DatosTienda{
    name: string;
    Localizacion: string;
    Calificacion:  number;
    Id : string;
    UrlImg: string;
  }  

export const TiendaCard: React.FC<DatosTienda> = ({name, Localizacion, Calificacion, Id, UrlImg}) => {
    return( 
    <Fragment>
    <IonItem href = "#">
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
              
         <div> <Clasificacion/> </div>  
    </div>
     <input type="button" name = "submit" className="btn" value="Ver tienda"/>
    </IonItem>
    </Fragment>
    );

} 