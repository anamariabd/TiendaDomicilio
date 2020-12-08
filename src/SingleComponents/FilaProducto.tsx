import React, { useState } from 'react';
import {  IonRow, IonCol, IonIcon, IonButton } from '@ionic/react';
import {addCircleOutline, removeCircleOutline, trashOutline} from 'ionicons/icons';
import './Clasificacion.css'

interface DatosProduct {
  name: string;
  precio: number;
}

const FilaProducto: React.FC<DatosProduct> = ({name, precio}) => {

    const [count, setCount] = useState(1);
    const [nuevoPrecio, setNuevoPrecio] = useState(precio);
    const [nombre] = useState(name);

    return(
      <IonRow>  
            <IonCol>{nombre}</IonCol>
            <IonCol> <IonButton className="BtnCircle" onClick={() =>{ if(count > 1 ){ setCount(count - 1);
             setNuevoPrecio(nuevoPrecio-precio)}}} ><IonIcon md={removeCircleOutline}> 
            </IonIcon>
            </IonButton> {count}<IonButton  className="BtnCircle" onClick={() => {setCount(count + 1);
             setNuevoPrecio(precio+nuevoPrecio)}}>
            <IonIcon md={addCircleOutline}> </IonIcon> </IonButton>
            </IonCol>
            <IonCol>{nuevoPrecio} </IonCol>
            <IonButton  color = "danger" className="BtnCircle"> <IonIcon md={trashOutline}> </IonIcon> </IonButton>           
           
      </IonRow>
    );

}

export default FilaProducto;