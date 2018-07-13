import React, { Component } from 'react';
import PopupImage from './PopupImage/PopupImage';

import '../scaffolding.css';
import './Images/Images.css';

class Image extends Component {

  render() {
    return (
      <li className="images__item">
        <a className="images__img" href="#">
          <p className="images__comment"></p>
        </a>
        <PopupImage />
      </li>
    );
  }
}

export default Image;