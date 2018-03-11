import React, { Component } from 'react';
import {FormattedMessage as FM } from 'react-intl';
import Header from './header.js';
import SigninMain from './signin_main.js';
import Footer from './footer.js';

class Signin extends Component {
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
          <SigninMain/>
          <Footer/>
        </div>
    );
  }
}

export default Signin;
