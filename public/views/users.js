import React, { Component } from 'react';
import {FormattedMessage as FM } from 'react-intl';
import Header from './header.js';
import PagePagination from './page_pagination';
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
          <PagePagination total={100} />
          <Footer/>
        </div>
    );
  }
}

export default Signin;
