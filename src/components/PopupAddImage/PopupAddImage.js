import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../scaffolding.css';
import './PopupAddImage.css';

class PopupAddImage extends Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    isRemove: PropTypes.func,
    isEscRemove: PropTypes.func
  };

  static defaultProps = {
    isOpen: false,
    isRemove: f => f,
    isEscRemove: f => f
  };

  componentDidMount() {
    document.addEventListener("keydown", this.props.isEscRemove, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.props.isEscRemove, false);
  }

  render() {
    let { isOpen, isRemove } = this.props;
    return(
      <section className={ !isOpen ? "popup-add-image  popup-add-image--hidden" : "popup-add-image"} onClick={isRemove} >
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