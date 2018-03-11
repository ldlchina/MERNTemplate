import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Home from './home';
import Signup from './signup';
import Signin from './signin';
import CitySelect from './city_select';
import Users from './users'
import NotFound from './not_found';
import Cookies from 'js-cookie';


class App extends Component {
  componentWillMount() {
    if (sessionStorage.signedin == 'true') {
      return;
    }

    // TODO: post the info to server for validation
    sessionStorage.signedin = Cookies.get('signedin');
    sessionStorage.useremail = Cookies.get('useremail');
    sessionStorage.userid = Cookies.get('userid');
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
          <Route path="/city_select" component={CitySelect} />
          <Route path="/users" component={Users} />
          <Route path="/not_found" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
