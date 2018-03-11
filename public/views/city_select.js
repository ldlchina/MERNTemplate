import React, { Component } from 'react';
import { FormattedMessage as FM } from 'react-intl';
import Header from './header.js';
import CitySelectMain from './city_select_main.js';
import Footer from './footer.js';

class CitySelect extends Component {
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
        <Header />
        <CitySelectMain />
        <Footer />
      </div>
    );
  }
}

export default CitySelect;
