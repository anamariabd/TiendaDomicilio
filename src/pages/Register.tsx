import { IonButtons,  IonContent, IonButton, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonIcon} from '@ionic/react';
import React, {useState} from 'react';
import { useParams } from 'react-router';
import './Page.css';

const Register: React.FC = () => {
  const [userName ] = useState('');

  function LoginUser(){
      
  }

  return (
    <IonPage id="page">
      <IonHeader color = "primary"> 
        <IonToolbar color= "primary">
          <IonButtons slot="start">
            <IonButton onClick={LoginUser}> click me </IonButton>
          </IonButtons>
          
       <IonButtons slot ="end" id = "List-Corner" color="primary">
  </IonButtons>

        </IonToolbar>

      </IonHeader>

      <IonContent fullscreen>

       <IonTitle id= "title" >{userName}</IonTitle>
       
      </IonContent>
    </IonPage>
  );
};

export default Register;
