import { IonButtons, IonListHeader, IonContent, IonItem, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonIcon} from '@ionic/react';
import React from 'react';
import { bagOutline, bagSharp,  personCircleOutline, personCircleSharp} from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import { useParams } from 'react-router';
import './Page.css';
import ExploreContTienda from '../components/ExploreContTienda';

const Page: React.FC  = () => {
 

  const { name } = useParams<{ name: string; }>();
  const { TypeUser } = useParams<{ TypeUser: string; }>();
  return (
    <IonPage id="page">
      <IonHeader color = "primary"> 
        <IonToolbar color= "primary">
          <IonButtons slot="start">
            <IonMenuButton/>
          </IonButtons>
          
       <IonButtons slot ="end" className = "List-Corner" color="primary">
                <IonItem href='/page/Carrito' color="primary">
                  <IonIcon slot="end" ios={ bagOutline} md={bagSharp} />
                </IonItem>
                
                <IonItem href="/page/Inicio" color="primary">
                  <IonIcon slot="end" ios={personCircleOutline} md={personCircleSharp} />
                </IonItem>
  </IonButtons>

        </IonToolbar>

      </IonHeader>

      <IonContent fullscreen>

       <IonTitle id= "title" >{name}</IonTitle>
       
       {()=>{

         if(TypeUser){

         }

       }

       }
      {/* <ExploreContainer name={name} /> */}
       <ExploreContTienda name={name} />

      </IonContent>
    </IonPage>
  );
};

export default Page;
