import Menu from './components/Menu';
import Page from './pages/Page';
import Logo from './pages/Logo';
import Login from './pages/Login';
import React from 'react';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route, Switch } from 'react-router-dom';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import './Styles/styles.css'
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import InicioUser from './pages/InicioUser'
import Register from './pages/Register';

const App: React.FC = () => {

  return (
    <IonApp>
      <IonReactRouter> 
          <IonRouterOutlet>
              <Route path="/logo" component= {Logo} exact />
              <Route path="/login" component= {Login} exact />
              <Route path="/page/:Tipo/:name" component= {InicioUser} exact/>  
              <Route path="/page/:Tipo" component= {InicioUser} exact/>      
        { /* <PrivateRoute path="/page/:Tipo/:name" authenticated={this.state.authenticated} component={IniciUser}></PrivateRoute> */ } 
              <Route path="/register" component= {Register} exact />
              <Redirect  to="/logo"/> 
          </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
