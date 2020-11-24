import {
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonAvatar,
    IonNote,
  } from '@ionic/react';
  
  import React from 'react';
  import { useLocation } from 'react-router-dom';
  import { timeOutline, timeSharp, notificationsOutline, homeOutline, homeSharp, notificationsSharp, cartOutline, cartSharp, locationOutline, locationSharp, trashOutline, trashSharp,  cart } from 'ionicons/icons';
  import './Menu.css';
  
  interface AppPage {
    url: string;
    iosIcon: string;
    mdIcon: string;
    title: string;
  }
  
  const appPages: AppPage[] = [
    
    {
      title: 'Inicio',
      url: '/page/Inicio',
      iosIcon: homeOutline,
      mdIcon: homeSharp
    },
    {
      title: 'Mi carrito',
      url: '/page/Carrito',
      iosIcon: cartOutline,
      mdIcon: cartSharp
    },
    {
      title: 'Notificaciones',
      url: '/page/Notificaciones',
      iosIcon: notificationsOutline,
      mdIcon: notificationsSharp
    },
    {
      title: 'Buscar tienda',
      url: '/page/Tienda',
      iosIcon: locationOutline,
      mdIcon: locationSharp
    },
    {
      title: 'Historial',
      url: '/page/Historial',
      iosIcon: timeOutline,
      mdIcon: timeSharp
    },
    {
      title: 'Trash',
      url: '/page/Trash',
      iosIcon: trashOutline,
      mdIcon: trashSharp
    },
  ];
  
  const Menu: React.FC = () => {
    const location = useLocation();
  
    return (
      <IonMenu contentId="main" type="overlay" >
        <IonContent>
          <IonList id="list">    
          <IonAvatar id="perfil">
          <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
          </IonAvatar>
            <IonListHeader>Usuario Cliente</IonListHeader>
            <IonNote>Haz un pedido!</IonNote>
            {appPages.map((appPage, index) => {
              return (
                <IonMenuToggle key={index} autoHide={false}>
                  <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                    <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                    <IonLabel>{appPage.title}</IonLabel>
                  </IonItem>
                </IonMenuToggle>
              );
            })}
          </IonList>
        </IonContent>
      </IonMenu>
    );
  };
  
  export default Menu;
  