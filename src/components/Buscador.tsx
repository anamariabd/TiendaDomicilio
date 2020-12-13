import { IonFooter, IonHeader,  IonSearchbar, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import React from 'react';

const Buscador: React.FC = () => {

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
          Buscando: {searchText ?? '(none)'}
        </IonToolbar>
      </IonFooter>
  </div>
        </section>
    );

}

export default Buscador;