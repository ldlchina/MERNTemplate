import React, { Component } from 'react';
import {FormattedMessage as FM } from 'react-intl';
import Header from './header.js';
import SignupMain from './signup_main.js';
import Footer from './footer.js';

class Signup extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
        <div id='pagewrapper' className="page-wrapper">
          <Header/>
          <SignupMain/>
          <Footer/>
        </div>
    );
  }
}

export default Signup;
