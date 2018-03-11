import React, { Component } from 'react';
import {FormattedMessage as FM } from 'react-intl';
import Header from './header.js';
import NotFoundMain from './not_found_main.js';
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
          <NotFoundMain/>
          <Footer/>
        </div>
    );
  }
}

export default Signin;
