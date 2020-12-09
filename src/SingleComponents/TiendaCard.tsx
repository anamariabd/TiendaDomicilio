import React, { Fragment, useState } from 'react';
import { IonAvatar, IonLabel, IonItem, IonItemOption, IonItemOptions, IonContent} from '@ionic/react';
import './Clasificacion.css'

import Clasificacion from '../SingleComponents/Clasificación' 
import { url } from 'inspector';

export interface DatosTienda{
    name: string;
    Localizacion: string;
    Calificacion:  string;
    Id : number;
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