import React, { Component } from 'react';
import { FormattedMessage as FM } from 'react-intl';


class HomeMain extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <main id="mainContent" className="main-content">
        <div className="page-container ptb-60">
          <div className="container">
            <section className="sign-area panel p-40">
              <h3>Welcome to Home!</h3>
            </section>
          </div>
        </div>
      </main>
    );
  }
}

export default HomeMain;
