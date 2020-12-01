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
            <IonCol> <IonButton className="btnCircle" onClick={() =>{ if(count > 1 ){ setCount(count - 1);
             setNuevoPrecio(nuevoPrecio-precio)}}} ><IonIcon md={removeCircleOutline}> 
            </IonIcon>
            </IonButton> {count}<IonButton  className="btnCircle" onClick={() => {setCount(count + 1);
             setNuevoPrecio(precio+nuevoPrecio)}}>
            <IonIcon md={addCircleOutline}> </IonIcon> </IonButton>
            </IonCol>
            <IonCol>{nuevoPrecio}</IonCol>
            <IonCol><IonButton  color = "danger" className="btnCircle"> <IonIcon md={trashOutline}> </IonIcon> </IonButton>
            </IonCol>
      </IonRow>
    );

}

export default FilaProducto;