import React, { Fragment, useState } from 'react';
import {  IonLabel, IonButton, IonCol, IonRow} from '@ionic/react';
import './Clasificacion.css'

import Clasificacion from '../SingleComponents/Clasificación' 

export interface DatosTienda{
    name: string,
    Localizacion: string,
    Calificacion:  number,
    Id : string,
    UrlImg: string
  }  

  interface Data{
    name: string,
    Localizacion: string,
    Calificacion:  number,
    Id : string,
    UrlImg: string,
    HandleID(e:any):void
  }


  class TiendaCard extends React.Component<Data> {

    state = {
      IdTienda: ""
    }
    
  render(){

    
    const {HandleID} = this.props;

  return(  

    <Fragment>
    <IonRow>
    <div id = "articles">
              <div className="article-item" id = "article-template">
                  <div className = "image-wrap">
                      <img src={this.props.UrlImg} alt = "Tienda">
                       </img>
                  </div>
                    <IonLabel>Tienda {this.props.name}</IonLabel>
                   <p>{this.props.Localizacion}</p>
              </div>
              
         <div> <Clasificacion/> </div>  
    </div>

     {/* <input type="button" name = "submit" className="btn" value="Ver tienda"/> */}
    </IonRow>
    <IonCol>
      
    <IonButton href={"/page/Cliente/Productos"} onClick={()=>{ HandleID(this.props.Id) }}> Comprar aquí </IonButton>
    </IonCol>
    <br className="Clear-fix"/>
    </Fragment>
    );}

} 

export {TiendaCard};