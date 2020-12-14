import { IonFooter, IonHeader,  IonSearchbar, IonToolbar, IonButton } from '@ionic/react';
import { useState } from 'react';
import React from 'react';

interface handleSearch{
  HandleSearch(e:any):void
}

class Buscador extends React.Component<handleSearch> {

  state = {
    searchText: String
  }

  render(){

    const{HandleSearch} = this.props;
    let text:String;
  //  const [searchText, setSearchText] = useState('');
    return(
        <section>
     <div>
    <IonHeader>
        <IonToolbar>
          <IonSearchbar onIonChange={(e) =>{ text = e.detail.value! ; this.setState({searchText: text})}}></IonSearchbar>
        </IonToolbar>
  </IonHeader>
  <IonFooter>
        <IonToolbar>
          Buscando: {this.state.searchText ?? '(none)'}
        </IonToolbar>
      </IonFooter>
  </div>
  
  <IonButton onClick={HandleSearch}> Buscar </IonButton>
        </section>
    );

  }
}

export default Buscador;