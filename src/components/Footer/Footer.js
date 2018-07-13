import React, { Component } from 'react';

import '../../scaffolding.css';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="page-footer__wrapper">
          <p className="page-footer__copyright">© 2018</p>
        <p className="page-footer__develop">Разработано: Александр Самсонов</p>
        </div>
      </footer>
    );
  }
}

export default Footer;