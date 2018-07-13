import React, { Component } from 'react';

import '../../scaffolding.css';
import './PopupAddImage.css';

class PopupAddImage extends Component {
  render() {
    return(
      <section className={ this.props.className }>
        <div className="popup-add-image__description">
          <h2 className="popup-add-image__title">Добавить изображение</h2>
          <form className="popup-add-image__form" name="form">
            <div className="popup-add-image__wrapper">
              <label className="popup-add-image__label">
                Url изображения:
                <input className="popup-add-image__input" type="text" name="url" />
              </label>
              <span className="popup-add-image__error"></span>
            </div>
            <div className="popup-add-image__wrapper">
              <label className="popup-add-image__label">
                Комментарий:
                <input className="popup-add-image__input" type="text" name="comment" />
              </label>
              <span className="popup-add-image__error"></span>
            </div>
            <button className="popup-add-image__btn" type="submit">Добавить</button>
          </form>
        </div>
      </section>
    );
  }
}

export default PopupAddImage;