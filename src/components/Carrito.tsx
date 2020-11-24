import React, { Fragment, useState } from 'react';
import { IonGrid, IonRow, IonCol, IonContent, IonIcon, IonButton } from '@ionic/react';
import { cartOutline,cartSharp, pencilOutline, addCircleOutline, removeCircleOutline, trashOutline} from 'ionicons/icons';
import '../Styles/styles.css'

const Carrito: React.FC = () => {

  const [count, setCount] = useState(1);

    return(
       <Fragment> 

      <IonGrid>
      <IonRow>
        <IonCol>Producto</IonCol>
        <IonCol> Unidades </IonCol>
        <IonCol>Precio unit.</IonCol>
        <IonCol>Precio total</IonCol>
        <IonCol></IonCol>
      </IonRow>
      <br/>
      <IonRow>  
        <IonCol>Arroz Roa 500g</IonCol>
        <IonCol> <IonButton className="btnCircle" onClick={() => setCount(count - 1)}><IonIcon md={removeCircleOutline}> 
        </IonIcon>
        </IonButton> {count}<IonButton  className="btnCircle" onClick={() => setCount(count + 1)}>
          <IonIcon md={addCircleOutline}> </IonIcon> </IonButton>
         </IonCol>
        <IonCol>1200</IonCol>
        <IonCol>2400</IonCol>
        <IonCol><IonButton  color = "danger" className="btnCircle"> <IonIcon md={trashOutline}> </IonIcon> </IonButton> 
        <IonButton className="btnCircle"  > <IonIcon md={pencilOutline}> </IonIcon> </IonButton> 
        </IonCol>
      </IonRow>

    </IonGrid>                     

        </Fragment>
    );

}

export default Carrito;