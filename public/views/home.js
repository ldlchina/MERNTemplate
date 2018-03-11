import React, { Component } from 'react';
import {FormattedMessage as FM } from 'react-intl';
import Header from './header.js';
import HomeMain from './home_main.js';
import Footer from './footer.js';

class Home extends Component {
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
          <HomeMain/>
          <Footer/>
        </div>
    );
  }
}

export default Home;
