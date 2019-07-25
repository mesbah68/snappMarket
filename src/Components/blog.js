import React, {Component} from 'react';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'

import './../sass/app.scss'


class Blog extends Component {
  
  render(){
    const history=this.props.history
    return (
      <div className="App">
        <Header history={history} />
        <Main history={history}/>
        <Footer history={history}/>
      </div>
    );
  }
 
}

export default Blog;
