import React, { useState } from 'react';
import {  IonRow, IonCard,  IonCardContent, IonCardTitle } from '@ionic/react';
import './Clasificacion.css'

export interface DatosProduct {
  name: string;
  medida: string;
  marca:  string;
  Id : number;
 // precio: number;
  // UrlImg: string;
}

export const listCard :DatosProduct[] = [];

function validate(key:number){
  let aux : boolean;
  aux = true;
  listCard.forEach((element)=>{
    if(element.Id === key){
       aux = false;
    }
  })
  return aux;
}
  
function listProd(data:number ,name : string, marca : string, medida : string){
  if(validate(data)){
    listCard.push({Id: data, name : name, medida : medida, marca : marca});
  }
}

const ProductCard: React.FC<DatosProduct> = ({name, medida, marca, Id}) => {
  //const [ ProdAdd, setProdAdd] = useState(0);
  //IdProduct = ProdAdd;
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
            <button value = {Id} onClick= { ()=>{ listProd(Id, name, marca, medida); console.log(listCard)}}>Agregar a Carrito</button>
          </IonCard>
        </div>
      </IonRow>
    );

}
export default ProductCard;