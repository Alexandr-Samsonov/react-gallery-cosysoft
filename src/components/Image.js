import React, { Component } from 'react';
import PopupImage from './PopupImage/PopupImage';

import '../scaffolding.css';
import './Images/Images.css';

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.showPopupImage = this.showPopupImage.bind(this);
    this.removePopupImage = this.removePopupImage.bind(this);
    this.removeEscPopupImage = this.removeEscPopupImage.bind(this);
  }

  showPopupImage() {
    this.setState({
      isOpen: true,
    });
  }

  removePopupImage(e) {
    if (e.target.className === 'popup-image') {
      this.setState({
        isOpen: false
      });
    }
  }

  removeEscPopupImage(e) {
    if (e.keyCode === 27) {
      this.setState({
        isOpen: false
      })
    }
  }

  render() {
    const { item } = this.props; 
    return (
      <li className="images__item">
        <a className="images__img" href="#" onClick={this.showPopupImage} style={{ backgroundImage: `url( ${item.url} )` }}>
          <p className="images__comment">{item.comment}</p>
        </a>
        <PopupImage item={item} isOpen={this.state.isOpen} isRemove={this.removePopupImage} isEscRemove={this.removeEscPopupImage} />
      </li>
    );
  }
}

export default Image;