import { IonButtons, IonFooter, IonContent, IonHeader, IonSearchbar, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import React from 'react';

const Inicio: React.FC = () => {

  const [searchText, setSearchText] = useState('');
    return(
        <section>
     <div>
    <IonHeader>
        <IonToolbar>
          <IonSearchbar onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
        </IonToolbar>
  </IonHeader>
  <IonFooter>
        <IonToolbar>
          Search Text: {searchText ?? '(none)'}
        </IonToolbar>
      </IonFooter>
  </div>
        </section>
    );

}

export default Inicio;