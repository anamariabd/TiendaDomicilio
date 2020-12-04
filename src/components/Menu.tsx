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
  IonNote
} from '@ionic/react';

import React from 'react';
import { useLocation } from 'react-router-dom';
import { personSharp, personOutline, timeOutline, timeSharp, notificationsOutline, homeOutline, homeSharp, notificationsSharp, cartOutline, cartSharp, locationOutline, locationSharp, storefrontOutline, storefrontSharp} from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const Tienda: AppPage[] = [
  {
    title: 'Inicio',
    url: '/page/Tendero/Inicio',
    iosIcon: homeOutline,    mdIcon: homeSharp
  },
  {
    title: 'Reportes',
    url: '/page/Tendero/Reportes',
    iosIcon: cartOutline,    mdIcon: cartSharp
  },
  {
    title: 'Pedidos',
    url: '/page/Tendero/Pedidos',
    iosIcon: notificationsOutline,    mdIcon: notificationsSharp
  },
  {
    title: 'Mis tiendas',
    url: '/page/Tendero/Tiendas',
    iosIcon: storefrontOutline,    mdIcon: storefrontSharp
  },
  {
    title: 'Domiciliarios',
    url: '/page/Tendero/Domiciliarios',
    iosIcon: timeOutline,    mdIcon: timeSharp
  },
  {
    title: 'Mis productos',
    url: '/page/Tendero/MisProductos',
    iosIcon: timeOutline,    mdIcon: timeSharp
  },
  {
    title: 'MiPerfil',
    url: '/page/Tendero/Perfil',
    iosIcon: personOutline,
    mdIcon: personSharp
  }
]

const Cliente: AppPage[] = [
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
    title: 'Mis Compras',
    url: '/page/MisCompras',
    iosIcon: timeOutline,
    mdIcon: timeSharp
  },
  {
    title: 'MiPerfil',
    url: '/page/Perfil',
    iosIcon: personOutline,
    mdIcon: personSharp
  },
];

const Menu: React.FC<{TypeUser:string}> = ({TypeUser}) => {
  const location = useLocation();

  var probando = Tienda;

  return (
    <IonMenu contentId="main" type="overlay" >
      <IonContent>
        <IonList id="list">    
        <IonAvatar id="perfil">
        <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
        </IonAvatar>
          <IonListHeader>Usuario Cliente</IonListHeader>
          <IonNote>Haz un pedido!</IonNote>
          
          {probando.map((appPages, index) => {
            return ( 
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPages.url ? 'selected' : ''} routerLink={appPages.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPages.iosIcon} md={appPages.mdIcon} />
                  <IonLabel>{appPages.title}</IonLabel>
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
