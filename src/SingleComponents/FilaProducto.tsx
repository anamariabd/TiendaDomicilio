import React, { useState } from 'react';
import {  IonRow, IonCol, IonIcon, IonButton } from '@ionic/react';
import { pencilOutline, addCircleOutline, removeCircleOutline, trashOutline} from 'ionicons/icons';
import './Clasificacion.css'

const FilaProducto: React.FC = () => {
    const [count, setCount] = useState(1);
    const [precio, setPrecio] = useState(1200);
    const precioUnit = 1200; 
    return(
      <IonRow>  
            <IonCol>{/**/}Arroz Roa 500g</IonCol>
            <IonCol> <IonButton className="btnCircle" onClick={() =>{ if(count > 1 ){ setCount(count - 1);
             setPrecio(precio-precioUnit)}}} ><IonIcon md={removeCircleOutline}> 
            </IonIcon>
            </IonButton> {count}<IonButton  className="btnCircle" onClick={() => {setCount(count + 1);
             setPrecio(precioUnit*(count+1))}}>
            <IonIcon md={addCircleOutline}> </IonIcon> </IonButton>
            </IonCol>
            <IonCol>{precioUnit}</IonCol>
            <IonCol>{precio}</IonCol>
            <IonCol><IonButton  color = "danger" className="btnCircle"> <IonIcon md={trashOutline}> </IonIcon> </IonButton> 
            <IonButton className="btnCircle"  > <IonIcon md={pencilOutline}> </IonIcon> </IonButton> 
            </IonCol>
      </IonRow>
    );

}

export default FilaProducto;