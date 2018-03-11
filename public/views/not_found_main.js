import React, { Component } from 'react';
import {FormattedMessage as FM } from 'react-intl';


class SigninMain extends Component {
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
        <div className="page-container pt-40 pb-60">
          <div className="container">
            <section className="error-page-area">
              <div className="container">
                <div className="error-page-wrapper t-center">
                  <div className="error-page-header">
                    <span className="color-blue">4</span>
                    <span className="color-green">0</span>
                    <span className="color-blue">4</span>
                  </div>
                  <div className="error-page-footer">
                    <h5 className="color-mid mb-5">无法访问！</h5>
                    <h2 className="t-uppercase m-10 color-green">很抱歉</h2>
                    <p className="color-muted mb-30 font-15">
                      您访问的页面不存在！
                    </p>
                  </div>
                  <a href="/" className="btn btn-rounded">返回主页</a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    );
  }
}

export default SigninMain;
