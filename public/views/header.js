import React, { Component } from 'react';
import {FormattedMessage as FM } from 'react-intl';
import TopBar from './top_bar.js';
import HeaderHeader from './header_header.js';


class Header extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <header id="mainHeader" className="main-header">
        <TopBar/>
        <HeaderHeader/>
      </header>
    );
  }
}

export default Header;
