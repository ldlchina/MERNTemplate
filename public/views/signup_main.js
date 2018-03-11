import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { FormattedMessage as FM } from 'react-intl';
import utils from '../js/utils';
import districts from '../js/districts';
import Cookies from 'js-cookie';


class SignupMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'username': '',
      'email': '',
      'password': '',
      'acceptlegal': false,
      'issignedin': false
    };

    // This binding is necessary to make `this` work in the callback
    this.onInputUserName = this.onInputUserName.bind(this);
    this.onInputEmail = this.onInputEmail.bind(this);
    this.onInputPassword = this.onInputPassword.bind(this);
    this.onConfirmPassword = this.onConfirmPassword.bind(this);
    this.onAcceptLegal = this.onAcceptLegal.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
  }

  componentWillUnmount() {

  }

  onInputUserName(e) {
    this.setState({ 'username': e.target.value });
  }

  onInputEmail(e) {
    this.setState({ 'email': e.target.value });
  }

  onInputPassword(e) {
    this.setState({ 'password': e.target.value });
  }

  onConfirmPassword(e) {

  }

  onAcceptLegal(e) {
    this.setState({ 'acceptlegal': e.target.checked });
  }

  onSubmit(e) {
    e.preventDefault();

    if (this.state.currentstep < this.state.totalsteps) {
      var step = this.state.currentstep + 1;
      this.setState({ 'currentstep': step });
      return;
    }

    //alert('onSubmit');

    var self_ = this;
    utils.sendRequest("post", "/api/1.0/users", this.state, function (err, data) {
      if (err) {
        alert(err);
      }
      else {
        Cookies.set('signedin', 'true', { expires: 7 });
        Cookies.set('useremail', data.email, { expires: 7 });
        Cookies.set('userid', data.id, { expires: 7 });
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
              <h3 className="sign-title">{"注册"} <small>或 <a href="/signin" className="color-green">登录</a></small></h3>
              <div className="row row-rl-0">
                <div className="col-sm-6 col-md-7 col-left">
                  <form className="p-40" onSubmit={this.onSubmit}>
                    <div>
                      <div className="form-group">
                        <label className="sr-only">用户名</label>
                        <input type="text" className="form-control input-lg" value={this.state.username} onChange={this.onInputUserName} required='required' placeholder="用户名" />
                      </div>
                      <div className="form-group">
                        <label className="sr-only">电子邮箱</label>
                        <input type="email" className="form-control input-lg" value={this.state.email} onChange={this.onInputEmail} required='required' placeholder="电子邮箱" />
                      </div>
                      <div className="form-group">
                        <label className="sr-only">密码</label>
                        <input type="password" className="form-control input-lg" value={this.state.password} onChange={this.onInputPassword} required='required' placeholder="密码" />
                      </div>
                      <div className="form-group">
                        <label className="sr-only">密码确认</label>
                        <input type="password" className="form-control input-lg" onChange={this.onConfirmPassword} required='required' placeholder="密码确认" />
                      </div>
                    </div>
                    <div className="custom-checkbox mb-20">
                      <input type="checkbox" id="agree_terms" onChange={this.onAcceptLegal} checked={this.state.acceptlegal} />
                      <label className="color-mid" htmlFor="agree_terms">我已阅读并同意 <a href="/terms_conditions" className="color-green">《使用协议》</a></label>
                    </div>
                    <button type="submit" className="btn btn-block btn-lg" disabled={this.state.acceptlegal ? "" : "disabled"}>注册</button>
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

export default SignupMain;
