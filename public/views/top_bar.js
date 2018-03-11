import React, { Component } from 'react';
import { FormattedMessage as FM } from 'react-intl';
import utils from '../js/utils';
import districts from '../js/districts';
import Cookies from 'js-cookie';


class TopBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'useremail': sessionStorage.user_email,
      'issignedin': sessionStorage.signedin == 'true'
    };

    this.onOther1CityClick = this.onOther1CityClick.bind(this);
    this.onOther2CityClick = this.onOther2CityClick.bind(this);
    this.onSignOut = this.onSignOut.bind(this);
  }

  componentDidMount() {
  }

  componentWillUnmount() {

  }

  onOther1CityClick(e) {
    e.preventDefault();

    var currentProvince = localStorage.currentProvince;
    var currentCity = localStorage.currentCity;

    localStorage.currentProvince = localStorage.other1Province;
    localStorage.currentCity = localStorage.other1City;
    localStorage.other1Province = currentProvince;
    localStorage.other1City = currentCity;

    window.location.href = '/';
  }

  onOther2CityClick(e) {
    e.preventDefault();

    var currentProvince = localStorage.currentProvince;
    var currentCity = localStorage.currentCity;
    var other1Province = localStorage.other1Province;
    var other1City = localStorage.other1City;

    localStorage.currentProvince = localStorage.other2Province;
    localStorage.currentCity = localStorage.other2City;
    localStorage.other1Province = currentProvince;
    localStorage.other1City = currentCity;
    localStorage.other2Province = other1Province;
    localStorage.other2City = other1City;
    window.location.href = '/';
  }

  onSignOut(e) {
    e.preventDefault();

    Cookies.remove('signedin');
    Cookies.remove('useremail');
    Cookies.remove('userid');
    sessionStorage.signedin = false;
    sessionStorage.useremail = '';
    this.setState({ 'useremail': '', 'issignedin': false });
  }

  render() {
    localStorage.currentProvince = localStorage.currentProvince || '320000';
    localStorage.currentCity = localStorage.currentCity || '320100';
    localStorage.other1Province = localStorage.other1Province || '310000';
    localStorage.other1City = localStorage.other1City || '310100';
    localStorage.other2Province = localStorage.other2Province || '110000';
    localStorage.other2City = localStorage.other2City || '110100';

    return (
      <div className="top-bar bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-4 is-hidden-sm-down">
              <ul className="nav-top nav-top-left list-inline t-left">
                <li><h3>{districts[localStorage.currentProvince][localStorage.currentCity]}</h3></li>
                <li>[</li>
                <li><a href="/city_select">切换城市</a></li>
                <li><a onClick={this.onOther1CityClick}>{districts[localStorage.other1Province][localStorage.other1City]}</a></li>
                <li><a onClick={this.onOther2CityClick}>{districts[localStorage.other2Province][localStorage.other2City]}</a></li>
                <li>]</li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-8">
              <ul className="nav-top nav-top-right list-inline t-xs-center t-md-right">
                <li>
                  <a href="#">用户管理<i className="fa fa-caret-down" /></a>
                  <ul>
                    <li><a href="#">用户信息</a></li>
                    {this.state.issignedin && <li> <a href="#" onClick={this.onSignOut}>退出</a> </li>}
                  </ul>
                </li>
                {!this.state.issignedin && <li><a href="/signin"><i className="fa fa-lock" /><FM id='login'/></a></li>}
                {!this.state.issignedin && <li><a href="/signup"><i className="fa fa-user" />注册</a></li>}
                <li><a href="/help"><i className="fa fa-question" />帮助</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopBar;
