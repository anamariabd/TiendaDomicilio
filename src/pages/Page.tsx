import { IonButtons, IonListHeader, IonContent, IonItem, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonIcon} from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
import {cartSharp, cartOutline, bagOutline, bagSharp, personSharp, personOutline, personCircleOutline, personCircleSharp} from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';

const Page: React.FC = () => {

  interface AppPage {
    url: string;
    iosIcon: string;
    mdIcon: string;
    title: string;
  }
  const appPages: AppPage[] = [
    {
      title: 'Carrito',
      url: '/page/Carrito',
      iosIcon: bagOutline,
      mdIcon: bagSharp
    },
    {
      title: 'Perfil',
      url: '/page/Inicio',
      iosIcon: personCircleOutline,
      mdIcon: personCircleSharp
    }]

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage id="page">
      <IonHeader color = "primary"> 
        <IonToolbar color= "primary">
          <IonButtons slot="start">
            <IonMenuButton/>
          </IonButtons>
          
       <IonButtons slot ="end" id = "List-Corner" color="primary">
        {appPages.map((appPage, index) => {
            return (
                <IonItem  href="#" color="primary">
                  <IonIcon slot="end" ios={appPage.iosIcon} md={appPage.mdIcon} />
                </IonItem>
            );
          })}
  </IonButtons>

        </IonToolbar>

      </IonHeader>

      <IonContent fullscreen>

       <IonTitle id= "title" >{name}</IonTitle>
       
       <ExploreContainer name={name} />
        
      </IonContent>
    </IonPage>
  );
};

export default Page;
