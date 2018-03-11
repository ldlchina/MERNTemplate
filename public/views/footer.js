import React, { Component } from 'react';
import {FormattedMessage as FM } from 'react-intl';


class Footer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <footer id="mainFooter" className="main-footer">
        <div className="container">
          <div className="row">
            <p>Copyright © 2017. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
