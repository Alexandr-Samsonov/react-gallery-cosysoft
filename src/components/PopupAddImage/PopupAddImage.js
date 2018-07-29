import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../scaffolding.css';
import './PopupAddImage.css';

class PopupAddImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      comment: '',
    }
    this.changeUrl = this.changeUrl.bind(this);
    this.changeComment = this.changeComment.bind(this);
    this.sendForm = this.sendForm.bind(this);
  }

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

  changeUrl(e) {
    this.setState({
      url: e.target.value
    });
  }

  changeComment(e) {
    this.setState({
      comment: e.target.value
    })
  }

  sendForm(e) {
    e.preventDefault();
    console.log(this.props);
    const { addImage, isRemoveAfterSend } = this.props;
    addImage({
      url: this.state.url,
      comment: this.state.comment,
    });
    this.setState({
      url: '',
      comment: '',
    })
    isRemoveAfterSend();
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
                <input className="popup-add-image__input" type="text" name="url" onChange={this.changeUrl} value={this.state.url} />
              </label>
              <span className="popup-add-image__error"></span>
            </div>
            <div className="popup-add-image__wrapper">
              <label className="popup-add-image__label">
                Комментарий:
                <input className="popup-add-image__input" type="text" name="comment" onChange={this.changeComment} value={this.state.comment} />
              </label>
              <span className="popup-add-image__error"></span>
            </div>
            <button className="popup-add-image__btn" type="submit" onClick={this.sendForm}>Добавить</button>
          </form>
        </div>
      </section>
    );
  }
}

export default PopupAddImage;