//import 'https://fonts.googleapis.com/css?family=Montserrat:400,500,600';
import './3p/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './css/base.css';
import './css/style.css';
import './3p/js/jquery-1.12.3.min.js';
import './3p/js/bootstrap.min.js';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/app';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en'
import zh from 'react-intl/locale-data/zh'
import zh_CN from './strings/zh_CN';
import en_US from './strings/en_US';
import intl from 'intl';
addLocaleData([...en, ...zh]);

function chooseLocale() {
  switch (navigator.language.split('-')[0]) {
    case 'en':
      return en_US;
      break;
    case 'zh':
      return zh_CN;
      break;
    default:
      return zh_CN;
      break;
  }
}

//window.console.info(chooseLocale());

ReactDOM.render(
  <IntlProvider locale={navigator.language} messages={chooseLocale()}>
    <App className='wide-layout preloader-active' />
  </IntlProvider>,
  document.getElementById('root')
);
