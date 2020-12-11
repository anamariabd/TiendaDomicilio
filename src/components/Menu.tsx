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

import React, { useState } from 'react';
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
    title: 'Mi tienda',
    url: '/page/Tendero/Tienda',
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
    url: '/page/Cliente/Inicio',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: 'Mi carrito',
    url: '/page/Cliente/Carrito',
    iosIcon: cartOutline,
    mdIcon: cartSharp
  },
  {
    title: 'Notificaciones',
    url: '/page/Cliente/Notificaciones',
    iosIcon: notificationsOutline,
    mdIcon: notificationsSharp
  },
  {
    title: 'Buscar tienda',
    url: '/page/Cliente/Tienda',
    iosIcon: locationOutline,
    mdIcon: locationSharp
  },
  {
    title: 'Mis Compras',
    url: '/page/Cliente/MisCompras',
    iosIcon: timeOutline,
    mdIcon: timeSharp
  },
  {
    title: 'MiPerfil',
    url: '/page/Cliente/Perfil',
    iosIcon: personOutline,
    mdIcon: personSharp
  },
];

const Menu: React.FC<{TypeUser:string}> = ({TypeUser}) => {
  var mensaje = "";
  var Usuario = Tienda;
  const location = useLocation();

if(TypeUser==="Tendero"){ 
   Usuario = Tienda;
  mensaje = "Atiende tu negocio!";
   console.log("TIENDA")}
else if(TypeUser==="Cliente"){ 
   Usuario = Cliente;
   mensaje="Haz un pedido!";
  }


  return (
    <IonMenu contentId="main" type="overlay" >
      <IonContent>
        <IonList id="list">    
        <IonAvatar id="perfil">
        <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
        </IonAvatar>
          <IonListHeader>Usuario {TypeUser}</IonListHeader>
          <IonNote>{mensaje}</IonNote>
          
          {
          
          Usuario.map((appPages, index) => {
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
