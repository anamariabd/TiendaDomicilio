import {useIonViewWillEnter, IonFooter, useIonViewDidEnter, IonHeader, IonSearchbar, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import React from 'react';
import {userCurrent} from '../Controller/UserController'


const Inicio: React.FC = () => {

  useIonViewDidEnter( () => {userCurrent()}  )
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