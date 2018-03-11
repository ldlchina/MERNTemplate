import React, { Component } from 'react';
import { FormattedMessage as FM } from 'react-intl';
import utils from '../js/utils.js';


class HeaderHeader extends Component {
  constructor(props) {
    super(props);

    this.onPublishRequirement = this.onPublishRequirement.bind(this);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  onPublishRequirement() {
    window.location.href = '/users';
  }

  render() {
    return (
      <div className="header-header bg-white">
        <div className="container">
          <div className="row row-rl-0 row-tb-20 row-md-cell">
            <div className="brand col-md-3 t-xs-center t-md-left valign-middle">
              <a href="/" className="logo">
                <h1><FM id='home'/></h1>
              </a>
            </div>
            <div className="header-search col-md-9">
              <div className="row row-tb-10 ">
                <div className="col-sm-8">
                  <form className="search-form">
                    <div className="input-group">
                      <input type="text" className="form-control input-lg search-input" placeholder="输入关键字 ..." required="required" />
                      <div className="input-group-btn">
                        <div className="input-group">
                          <div className="input-group-btn">
                            <button type="submit" className="btn btn-lg btn-search btn-block">
                              <i className="fa fa-search font-16" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-sm-4 t-xs-center t-md-right">
                  <button className="btn btn-lg btn-block font-18" onClick={this.onPublishRequirement}>
                    所有用户
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderHeader;
