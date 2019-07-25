import React,{Component} from 'react'

import blog from './Components/blog'
import single from './Components/single'


import {BrowserRouter, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'

import './sass/app.scss'

class App extends Component {
 
  render() {
    return (
      <div className="App">
        <BrowserRouter>
            <Route path="/home" component={blog}/>
            <Route path="/single-blog" component={single}/>  
        </BrowserRouter>
      </div>
    )
  }
  
}

export default App;
