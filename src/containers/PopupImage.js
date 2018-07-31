import { connect } from 'react-redux';
import PopupImage from '../components/PopupImage/PopupImage.js';

const mapStateToProps = ({ images }) => ({
  itemsFromStore: images.items,
});

const mapDispatchToProps = dispatch => ({
  changeCommentToStore: (changeComment) => dispatch({
    type: 'CHANGE_COMMENT',
    payload: changeComment
  }),
  deleteImageFromStore: (id) => dispatch({
  	type: 'DELETE_IMAGE',
  	payload: id
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(PopupImage);