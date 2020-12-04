import React from 'react';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { Redirect, Route } from 'react-router-dom';
import { useParams } from 'react-router';
import Menu from '../components/Menu'
import Page from './Page'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Optional CSS utils that can be commented out */
import '../Styles/styles.css'
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import '../theme/variables.css';

const InicioUser: React.FC = () => {

  const { Tipo } = useParams<{ Tipo: string; }>();
    return (
        <IonSplitPane contentId="main">
          <Menu TypeUser={Tipo}/>
          <IonRouterOutlet id="main">
              <Page/>
          </IonRouterOutlet>
        </IonSplitPane>
    );
  };
  
  export default InicioUser;