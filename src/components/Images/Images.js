import React, { Component } from 'react';
import Image from '../Image';

import '../../scaffolding.css';
import './Images.css';

class Images extends Component {
  render() {
    const { items } = this.props;
    let images;
    if (items) {
      return images = items.map((item, i) =>
        <Image item={item} />
      )
    } else {
      return images = null;
    }
  }

  render() {
    const { items } = this.props;
    return (
      <section className="images">
        <h2 className="visually-hidden">Список изображений</h2>
        <ul className="images__list">
          {this.render}
        </ul>
      </section>
    );
  }
}

export default Images;