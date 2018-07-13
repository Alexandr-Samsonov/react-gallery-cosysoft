import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as imagesActions from '../actions/images';
import App from '../components/App';

const mapStateToProps = ({ images }) => ({
	images,
});

const mapDispatchToProps = dispatch => ({
	...bindActionCreators(imagesActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);