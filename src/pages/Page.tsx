import { IonButtons, IonListHeader, IonContent, IonItem, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonIcon} from '@ionic/react';
import React from 'react';
import { bagOutline, bagSharp,  personCircleOutline, personCircleSharp} from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import { useParams } from 'react-router';
import './Page.css';
import ExploreContTienda from '../components/ExploreContTienda';

const Page: React.FC <{TypeUser:string}> = ({TypeUser}) => {

  const { name } = useParams<{ name: string; }>();
 // const { TypeUser } = useParams<{ TypeUser: string; }>();
  return (
    <IonPage id="page">
      <IonHeader color = "primary"> 
        <IonToolbar color= "primary">
          <IonButtons slot="start">
            <IonMenuButton/>
          </IonButtons>
          
       <IonButtons slot ="end" className = "List-Corner" color="primary">
                <IonItem href='/page/:TypeUser/Carrito' color="primary">
                  <IonIcon slot="end" ios={ bagOutline} md={bagSharp} />
                </IonItem>
                
                <IonItem href="/page/:TypeUser/Inicio" color="primary">
                  <IonIcon slot="end" ios={personCircleOutline} md={personCircleSharp} />
                </IonItem>
  </IonButtons>

        </IonToolbar>

      </IonHeader>

      <IonContent fullscreen>

       <IonTitle id= "title" >{name}</IonTitle>
       {(() => {
         switch (TypeUser) {
         case 'Tendero':
         return (
          <ExploreContTienda name={name} /> 
         )
         case 'Cliente':
         return ( 
          <ExploreContainer name={name} />     
           )
         default:
         return (
           <div>404 NOT FOUND :c</div>
         )
        }
       })()}
      {/* <ExploreContainer name={name} /> */}
     
      </IonContent>
    </IonPage>
  );
};

export default Page;
