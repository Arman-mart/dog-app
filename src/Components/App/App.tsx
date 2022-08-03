import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SubTypeImages from '../Pages/SubTypeImages';
import { Route, Switch } from "react-router-dom";
import MainPage from '../Pages/MainPage';
import Subtypes from '../Pages/Subtypes';
import RandomSubType from '../Pages/RandomSubtype';



function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/' exact >
          <MainPage />
        </Route>
        <Route path='/types/:type' exact>
          <Subtypes />
        </Route>
        <Route path='/random/:type' exact>
          <SubTypeImages />
        </Route>
        <Route path='/random/:type/:subtype'>
          <RandomSubType />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
