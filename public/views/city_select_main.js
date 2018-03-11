import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { FormattedMessage as FM } from 'react-intl';
import utils from '../js/utils.js';
import districts from '../js/districts';


class CitySelectMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'selectedprovince': localStorage.currentProvince || '320000',
      'selectedcity': localStorage.currentCity || '320100'
    }

    this.onInputProvince = this.onInputProvince.bind(this);
    this.onInputCity = this.onInputCity.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {

  }

  componentWillUnmount() {
    //alert('componentWillUnmount');
  }

  onInputProvince(e) {
    var self_ = this;
    if (e.target.value != self_.state.selectedprovince) {
      var selectedcity = '';
      for (var key in districts[e.target.value]) {
        selectedcity = key;
        break;
      }

      self_.setState({ 'selectedprovince': e.target.value, 'selectedcity': selectedcity });
    }
  }

  onInputCity(e) {
    var self_ = this;
    if (e.target.value != self_.state.selectedcity) {
      self_.setState({ 'selectedcity': e.target.value });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    if (localStorage.currentProvince == this.state.selectedprovince &&
      localStorage.currentCity == this.state.selectedcity) {
    }
    else {
      var currentProvince = localStorage.currentProvince;
      var currentCity = localStorage.currentCity;
      var other1Province = localStorage.other1Province;
      var other1City = localStorage.other1City;

      localStorage.currentProvince = this.state.selectedprovince;
      localStorage.currentCity = this.state.selectedcity;
      localStorage.other1Province = currentProvince;
      localStorage.other1City = currentCity;
      localStorage.other2Province = other1Province;
      localStorage.other2City = other1City;
    }

    window.location.href = '/';
  }

  render() {
    var self_ = this;

    var provincesList = [];
    $.each(districts['100000'], function (key, value) {
      provincesList.push(<option key={key} value={key}>{value}</option>);
    });

    var citiesList = [];
    $.each(districts[self_.state.selectedprovince], function (key, value) {
      citiesList.push(<option key={key} value={key}>{value}</option>);
    });

    return (
      <main id="mainContent" className="main-content">
        <div className="page-container ptb-60">
          <div className="container">
            <section className="sign-area panel p-40">
              <h3 className="sign-title">切换城市</h3>
              <div className="row row-rl-0">
                <div className="col-sm-6 col-md-7 col-left">
                  <form className="p-40" onSubmit={this.onSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>省/直辖市</label>
                          <select className="form-control" value={this.state.selectedprovince} onChange={this.onInputProvince}>
                            {provincesList}
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>市</label>
                          <select className="form-control" value={this.state.selectedcity} onChange={this.onInputCity}>
                            {citiesList}
                          </select>
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-block btn-lg">提交</button>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    );
  }
}

export default CitySelectMain;
