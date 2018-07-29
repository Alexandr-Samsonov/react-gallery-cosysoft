import React, { Component } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Images from '../containers/Images';

class App extends Component {
  componentWillMount() {
    
  }
  
  render() {
    return (
    	<div>
    		<Header />
    		<main>
    			<Images />
    		</main>
    		<Footer />
    	</div>
    );
  }
}

export default App;