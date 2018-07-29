import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as imagesActions from '../actions/images';
import Images from '../components/Images/Images';

const mapStateToProps = ({ images }) => ({
	items: images.items,
});

const mapDispatchToProps = dispatch => ({
	...bindActionCreators(imagesActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Images);