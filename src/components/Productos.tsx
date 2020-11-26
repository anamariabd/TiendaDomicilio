import React, { Fragment, useState } from 'react';
import { IonLabel, IonIcon, IonGrid, IonRow, IonList,IonSelect,IonCardTitle, IonCol, IonCard,IonCardContent,  IonItem, IonContent, IonSelectOption, IonButtons, IonSearchbar, IonToolbar, IonButton } from '@ionic/react';
import { searchCircleOutline, searchCircleSharp} from 'ionicons/icons';

import '../Styles/styles.css'
import './Productos.css'

const Productos: React.FC = () => {

  const [precio, setPrecio] = useState<string>();

    return(
        <Fragment>    
  <IonGrid>
    <IonRow>
      <IonCol size="9">
        <IonSearchbar animated placeholder="Buscar"></IonSearchbar>
      </IonCol>
      <IonCol size="2">
        <IonButton id="botonBuscar">
          <IonIcon md={searchCircleOutline}></IonIcon>
        </IonButton>
      </IonCol>
    </IonRow>
    <IonRow>
      <IonCol>
        <IonList>
          <IonItem>
            <IonLabel>Ordenar por</IonLabel>
            <IonSelect value="brown" okText="Aceptar" cancelText="Cancelar">
              <IonSelectOption value="brown">Precio</IonSelectOption>
              <IonSelectOption value="blonde">Marca</IonSelectOption>
              <IonSelectOption value="black">Categoria</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonList>
      </IonCol>
    </IonRow>
    <IonRow>
      <div id="articles">
        <IonCard  className="article-item" id = "article-template">
          <div className = "image-wrap">
          <img id="img" src="../Assets/arroz.png" alt="arroz"></img>
          </div>
          <IonCardContent>
            <IonCardTitle>
              Arroz 
            </IonCardTitle>
            <p>
              Peso: 500gr
              Marca: roa
              Precio : 2.500
            </p>
          </IonCardContent>
        </IonCard>
      </div>
    </IonRow>
  </IonGrid>
        </Fragment>
    );

}

export default Productos;
