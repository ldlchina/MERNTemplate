import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { FormattedMessage as FM } from 'react-intl';
import utils from '../js/utils.js';
import Cookies from 'js-cookie';


class SigninMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'email': '',
      'password': '',
      'issignedin': sessionStorage.signedin == 'true'
    };

    // This binding is necessary to make `this` work in the callback
    this.onInputEmail = this.onInputEmail.bind(this);
    this.onInputPassword = this.onInputPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  onInputEmail(e) {
    this.setState({ 'email': e.target.value });
  }

  onInputPassword(e) {
    this.setState({ 'password': e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    //alert('onSubmit');

    var self_ = this;
    utils.sendRequest("post", "/api/1.0/users/validate", this.state, function (err, data) {
      if (err) {
        alert(err);
      }
      else {
        Cookies.set('signedin', 'true');
        Cookies.set('useremail', data.email);
        Cookies.set('userid', data.id);
        sessionStorage.signedin = true;
        sessionStorage.useremail = data.email;
        sessionStorage.userid = data.id;
        window.location.href = '/';
        //self_.setState({'issignedin': true});
        //alert(data);
      }
    });
  }

  render() {
    if (sessionStorage.signedin == 'true') {
      return (<Redirect to={{ pathname: '/' }} />);
    }

    return (
      <main id="mainContent" className="main-content">
        <div className="page-container ptb-60">
          <div className="container">
            <section className="sign-area panel p-40">
              <h3 className="sign-title">登录 <small>或 <a href="/signup" className="color-green">注册</a></small></h3>
              <div className="row row-rl-0">
                <div className="col-sm-6 col-md-7 col-left">
                  <form className="p-40" onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <label className="sr-only">电子邮箱</label>
                      <input type="email" className="form-control input-lg" placeholder="电子邮箱" onChange={this.onInputEmail} required="required" />
                    </div>
                    <div className="form-group">
                      <label className="sr-only">密码</label>
                      <input type="password" className="form-control input-lg" placeholder="密码" onChange={this.onInputPassword} required="required" />
                    </div>
                    <div className="form-group">
                      <a href="#" className="forgot-pass-link color-green">忘记密码？</a>
                    </div>
                    <div className="custom-checkbox mb-20">
                      <input type="checkbox" id="remember_account" defaultChecked />
                      <label className="color-mid" htmlFor="remember_account">下次自动登录</label>
                    </div>
                    <button type="submit" className="btn btn-block btn-lg">登录</button>
                  </form>
                </div>
                <div className="col-sm-6 col-md-5 col-right">
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
