import React, { Component } from 'react';
import Image from '../Image';

import '../../scaffolding.css';
import './Images.css';

class Images extends Component {
  render() {
    return (
      <section className="images">
        <h2 className="visually-hidden">Список изображений</h2>
        <ul className="images__list">
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
          <Image />
        </ul>
      </section>
    );
  }
}

export default Images;