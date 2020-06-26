import React from 'react';
import {
  BrowserRouter, Route, Redirect, Switch,
} from 'react-router-dom';
import './App.scss';
import MyNavBar from '../components/MyNavBar';
import Home from '../components/Home';
import Menu from '../components/Menu';
import Specials from '../components/Specials';
import ContactUs from '../components/ContactUs';

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <BrowserRouter>
      <React.Fragment>
        <div id="overHeaderInfo" class="primary-header">Call us for carry out or delivery! <br/> 731-885-887</div>
        <MyNavBar/>
        <div className='container'>
          <div className='row'>
            <Switch>
              <Route path='/home' component={Home}/>
              <Route path='/menu' component={Menu} />
              <Route path='/specials' component={Specials} />
              <Route path='/contact' component={ContactUs} />

              <Redirect from='*' to='/home' />
            </Switch>
          </div>
        </div>
      </React.Fragment>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
