import React, { useState } from 'react';
import {  IonRow, IonCol, useIonViewWillEnter, IonIcon, IonButton} from '@ionic/react';
import {addCircleOutline, removeCircleOutline, trashOutline} from 'ionicons/icons';
import {listCard} from '../SingleComponents/ProductCard'
import './Clasificacion.css'

interface DatosProduct {
  name: string;
  precio: number;
  Id: number;
  handle( name: string, id:number, con: number, precio: number): void;
  eliminar(key: number): void;
}

class FilaProducto extends React.Component<DatosProduct> {

  state = {
    count:1,
    nombre: this.props.name,
    precio: 1200, 
    precioTotal: 1200,
    list: listCard,
    key: this.props.Id,
    listPedido: [{
      name: "",
      Id: this.props.Id,
      count: 1
    }]
  }
  
  add = () => {
    this.setState((state) => {return {count: this.state.count + 1} });
          this.setState((state) => { return{precioTotal: this.state.precioTotal + this.state.precio}})
  }
  
  resta = () => {
    this.setState((state) => {if(this.state.count>1)return {count: this.state.count - 1}
          });
          
          this.setState((state) =>  { if(this.state.count>1) return{precioTotal: this.state.precioTotal - this.state.precio}})
  }

    
  render(){



    const {handle} = this.props;

    
   handle(this.props.name, this.props.Id, this.state.count, this.state.precioTotal);
    return(
      <IonRow>  
            <IonCol>{this.props.name}</IonCol>
            <IonCol> 
              <IonButton className="BtnCircle" onClick={this.resta} >
                <IonIcon md={removeCircleOutline}> </IonIcon>
              </IonButton> {this.state.count}<IonButton  className="BtnCircle" onClick={ this.add}>
              <IonIcon md={addCircleOutline}> </IonIcon> </IonButton>
            </IonCol>
            <IonCol>{this.state.precioTotal} </IonCol>
            <IonButton onClick={ ()=>{this.props.eliminar(this.state.key)}} color = "danger" className="BtnCircle"> 
              <IonIcon md={trashOutline}> </IonIcon> 
            </IonButton>     
      </IonRow>
    );
  }

}
//export default FilaProducto;
export {FilaProducto}