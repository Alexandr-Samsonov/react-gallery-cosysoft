import React, { Component } from 'react';

import '../../scaffolding.css';
import './PopupImage.css';

class PopupImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      change: false,
    };
    this.toggleChangeComment = this.toggleChangeComment.bind(this);
    this.changeComment = this.changeComment.bind(this);
    this.deleteImage = this.deleteImage.bind(this);
    this.onClosePopup = this.onClosePopup.bind(this);
    this.onCloseEscPopup = this.onCloseEscPopup.bind(this);
    this.findCommentFromStore = this.findCommentFromStore.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onCloseEscPopup);
  }

  componentWillUnmount() {
      document.removeEventListener('keydown', this.props.isEscRemove);
  }

  findCommentFromStore() {
    let t;
    this.props.itemsFromStore.map((itemFromStore) => {
      if (itemFromStore.id === this.props.item.id) {
        t = itemFromStore.comment;
      }}
    );
    return t;
  }

  onClosePopup(e) {
    if (!this.state.change) {
      this.props.isRemove(e);
    }
  }

  onCloseEscPopup(e) {
    if (!this.state.change) {
      this.props.isEscRemove(e);
    }
  }

  toggleChangeComment() {
    this.setState({
      change: !this.state.change,
    })
  }

  changeComment(e) {
    if (this.state.change) {
      this.props.changeCommentToStore({
        id: this.props.item.id,
        comment: e.target.value
      })
    }
  }

  deleteImage(e) {
    e.preventDefault();
    console.log(this.props.id);
    this.props.deleteImageFromStore({
      id: this.props.item.id
    });
    this.props.isAfterRemove();
  }

  render() {
    const { item, isOpen, isRemove } = this.props;
    const { change } = this.state;
    return(
      <section className={ isOpen ? "popup-image" : "popup-image  popup-image--hidden" } onClick={this.onClosePopup} >
        <div className="popup-image__description">
          <h2 className="visually-hidden">Модульное окно изображения</h2>
          <div className="popup-image__wrapper-img">
            <img className="popup-image__img" src={item.url} alt="Выбранное изображение"/>
          </div>
          <div className="popup-image__wrapper-comment">
            <div className={ !change ? 'popup-image__edit-comment' : 'popup-image__edit-comment  editing' } >
              <p className="popup-image__comment">{this.findCommentFromStore()}</p>
              <div className="popup-image__wrapper-commentfield">
                <textarea className="popup-image__commentfield" onChange={this.changeComment} value={this.findCommentFromStore()} ></textarea>
                <span className="popup-image__commentfield-nosave">Сохраните комментарий</span>
              </div>
              <button className="popup-image__button-edit" onClick={this.toggleChangeComment}>{ change ? 'Сохранить' : 'Изменить' }</button>
            </div>
            <button className="popup-image__button-delete" onClick={this.deleteImage}>Удалить IMG</button>
          </div>
        </div>
      </section>
    );
  }
}

export default PopupImage;