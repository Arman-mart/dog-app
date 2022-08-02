import                       './App.css';
import Header           from '../Header/Header';
import Footer           from '../Footer/Footer';

import MainPage         from '../Pages/MainPage';
import SubTypeImages    from '../Pages/SubTypeImages';
import SubTypeRandom    from '../Pages/SubTypeRandom';
import Subtypes         from '../Pages/Subtypes';
import {Route, Switch } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
          <Route path='/' exact >
            <MainPage />
          </Route>

          <Route path='/types/:type'>
              <Subtypes />
          </Route>

          <Route path='/random/:type' exact>
          <SubTypeImages />
          </Route>

          <Route path='/random/:type/:subtype'>
          <SubTypeRandom/>

          </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
