import React, { useState } from 'react';
import {  IonRow, IonCard, IonIcon, IonButton, IonCardContent, IonCardTitle } from '@ionic/react';
import './Clasificacion.css'

interface DatosProduct {
  name: string;
  medida: string;
  marca:  string;
  Id : number;
 // precio: number;
  // UrlImg: string;
}

export let IdProduct = 0;

const ProductCard: React.FC<DatosProduct> = ({name, medida, marca, Id}) => {
  const [ ProdAdd, setProdAdd] = useState(0);
  IdProduct = ProdAdd;
    return( 
    <IonRow>
        <div id="articles">
          <IonCard  className="article-item" id = "article-template">
            <div className = "image-wrap">
        {/* <img id="img" src={UrlImg} alt="arroz"></img>*/}
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
            <button value = {Id} onClick= { ()=>{ setProdAdd(Id) }}>Agregar a Carrito</button>
          </IonCard>
        </div>
      </IonRow>
    );

}
export default ProductCard;