import React, { Component } from 'react';
import PopupAddImage from '../PopupAddImage/PopupAddImage';

import '../../scaffolding.css';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.showPopupAddImage = this.showPopupAddImage.bind(this);
    this.removePopupAddImage = this.removePopupAddImage.bind(this);
    this.removeEscPopupAddImage = this.removeEscPopupAddImage.bind(this);
  }

  showPopupAddImage() {
    this.setState({
      isOpen: true
    });
  }

  removePopupAddImage(e) {
    if (e.target.className === 'popup-add-image') {
      this.setState({
        isOpen: false
      })
    }
  }

  removeEscPopupAddImage(e) {
    if (e.keyCode === 27) {
      this.setState({
        isOpen: false
      })
    }
  }

  render() {
    let { isOpen } = this.state;
    return (
      <header className="page-header">
        <div className="page-header__wrapper">
          <h1 className="page-header__title">Gallery Images</h1>
          <a className="page-header__add-image" onClick={this.showPopupAddImage} href="#" title="Добавить изображение в галерею">Добавить IMG</a>
        </div>
        <PopupAddImage isOpen={isOpen} isRemove={this.removePopupAddImage} isEscRemove={this.removeEscPopupAddImage} />
      </header>
    );
  }
}

export default Header;