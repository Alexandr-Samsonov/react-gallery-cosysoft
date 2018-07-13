import React, { Component } from 'react';

import '../../scaffolding.css';
import './PopupImage.css';

class PopupImage extends Component {
  render() {
    return(
      <section className="popup-image  popup-image--hidden">
        <div className="popup-image__description">
          <h2 className="visually-hidden">Модульное окно изображения</h2>
          <div className="popup-image__wrapper-img">
            <img className="popup-image__img" src="" alt="Выбранное изображение"/>
          </div>
          <div className="popup-image__wrapper-comment">
            <div className="popup-image__edit-comment">
              <p className="popup-image__comment">Комментарий</p>
              <div className="popup-image__wrapper-commentfield">
                <textarea className="popup-image__commentfield"></textarea>
                <span className="popup-image__commentfield-nosave">Сохраните комментарий</span>
              </div>
              <button className="popup-image__button-edit">Изменить</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PopupImage;