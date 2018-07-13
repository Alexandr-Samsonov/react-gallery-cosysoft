import React, { Component } from 'react';
import PopupAddImage from '../PopupAddImage/PopupAddImage';

import '../../scaffolding.css';
import './Header.css';

class Header extends Component {
  showPopupAddImage() {
    setState;

  }

  removePopupAddImage() {
    setState
  }

  render() {
    return (
      <header className="page-header">
        <div className="page-header__wrapper">
          <h1 className="page-header__title">Gallery Images</h1>
          <a className="page-header__add-image" onClick={this.showPopupAddImage} href="#" title="Добавить изображение в галерею">Добавить IMG</a>
        </div>
        <PopupAddImage className={ isModal ? "popup-add-image" : "popup-add-image  popup-add-image--hidden"} />
      </header>
    );
  }
}

export default Header;