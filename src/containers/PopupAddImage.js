import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
//import * as imagesActions from '../actions/images';
import PopupAddImage from '../components/PopupAddImage/PopupAddImage.js';

const mapStateToProps = ({ images }) => ({
  items: images.items,
});

const mapDispatchToProps = dispatch => ({
  addImage: (image) => dispatch({
  	type: 'ADD_IMAGE',
  	payload: image
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(PopupAddImage);