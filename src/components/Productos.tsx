import React, { Fragment, useState } from 'react';
import { IonLabel, IonListHeader, IonItem, IonSelect, IonSelectOption, IonButtons, IonSearchbar, IonToolbar, IonButton } from '@ionic/react';
import '../Styles/styles.css'

const Productos: React.FC = () => {

  const [precio, setPrecio] = useState<string>();

    return(
        <Fragment>
             <IonListHeader>
            <IonLabel>
              Buscar por:
            </IonLabel>
          </IonListHeader>

          <IonItem>
            <IonLabel>Precio</IonLabel>
            <IonSelect value={precio} placeholder="Select One" onIonChange={e => setPrecio(e.detail.value)}>
              <IonSelectOption value="500 - 1000">500 - 1000</IonSelectOption>
              <IonSelectOption value="1100 - 2000">1100 - 2000</IonSelectOption>
              <IonSelectOption value="2100 - 3000">2100 - 3000</IonSelectOption>
              <IonSelectOption value="3100 - 4000">3100 - 4000</IonSelectOption>
              <IonSelectOption value="4100 - 5000">4100 - 5000</IonSelectOption>              
              <IonSelectOption value="5100 - 6000">5100 - 6000</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem>
            <IonLabel>Marca</IonLabel>
            <IonSelect value={precio} placeholder="Select One" onIonChange={e => setPrecio(e.detail.value)}>
              <IonSelectOption value="female">Sin marca</IonSelectOption>
              <IonSelectOption value="male">1100 - 2000</IonSelectOption>
              <IonSelectOption value="male">2100 - 3000</IonSelectOption>
              <IonSelectOption value="male">3100 - 4000</IonSelectOption>
              <IonSelectOption value="male">4100 - 5000</IonSelectOption>              
              <IonSelectOption value="male">5100 - 6000</IonSelectOption>
            </IonSelect>
          </IonItem>

          <input type="button" name = "submit" className="btn" value="Buscar"/>

            <div id = "articles">
                <div className="article-item" id = "article-template">
                    <div className = "image-wrap">
                        <img src="https://esenserio.com/wp-content/uploads/2020/04/arroz_diana_500gr.jpg" alt = "paisaje">
                         </img>
                    </div>
                    <h2>Arroz Diana</h2>
                    <span>500Lb</span>
                    <p>Tienda La Barata</p>
                    <p>Stock disponible</p>
                    
                </div>
            </div>
        </Fragment>
    );

}

export default Productos;

