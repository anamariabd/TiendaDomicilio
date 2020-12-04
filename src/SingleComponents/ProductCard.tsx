import React, { useState } from 'react';
import {  IonRow, IonCard, IonIcon, IonButton, IonCardContent, IonCardTitle } from '@ionic/react';
import {addCircleOutline, cartOutline, cartSharp,} from 'ionicons/icons';
import './Clasificacion.css'

interface DatosProduct {
  name: string;
  medida: string;
  marca:  string;
 // precio: number;
   UrlImg: string;
}
const FilaProducto: React.FC<DatosProduct> = ({name, medida, marca, UrlImg}) => {

    return( 
    <IonRow>
        <div id="articles">
          <IonCard  className="article-item" id = "article-template">
            <div className = "image-wrap">
         <img id="img" src={UrlImg} alt="arroz"></img>
            </div>
            <IonCardContent>
              <IonCardTitle>
               {name}
              </IonCardTitle>
              <p>
                Peso: {medida}
                Marca: {marca}
                Precio : 1200
              </p>
            </IonCardContent>
            <button>Agregar a Carrito</button>
          </IonCard>
        </div>
      </IonRow>
    );

}
export default FilaProducto;