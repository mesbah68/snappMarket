import React , {Component} from 'react';
import {NavLink} from 'reactstrap';

import Logo from './../assets/img/Logo.png'

 class Header extends Component {
  constructor (props){
    super(props);
    this.state = {
      singleBlog : false
    }
  }
  componentDidMount() {
    
    let  url = window.location.pathname;
    if (url === '/single-blog') {
      this.setState ({
          singleBlog : true,
      })
    }
  }

  render() {
    return (
      <header>
        <div className='banner'>
          <div className='container'>
            <nav className="navbar navbar-toggleable-md navbar-light bg-faded padding-right-2 padding-left-2">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="form-group text-left">
                  <img src={Logo} alt='logo' className='img-fluid'/>
                </div>
                <div className="collapse navbar-collapse menu-navbar" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                          <NavLink className="nav-link" style={{cursor:'pointer'}}  onClick={()=> this.props.history.push(`/home`)}>Home <span className="sr-only">(current)</span></NavLink>
                      </li>
                      <li className="nav-item active">
                          <NavLink className="nav-link" >About</NavLink>
                      </li>
                      <li className="nav-item active">
                          <NavLink className="nav-link" >Screen</NavLink>
                      </li>
                      <li className="nav-item active">
                          <NavLink className="nav-link" >Contact</NavLink>
                      </li>
                      <li>
                          <NavLink href="#" className="fullWidth display-inline-block">
                            <button id="register-btn" type="submit" className="btn header-btn-primary">Careat Account</button>
                          </NavLink>
                      </li>
                  </ul>
                </div> 
            </nav>
            <div className='banner-content'>
              <h1>{this.state.singleBlog ? 'Single Blog' : 'Our Blog' }</h1>
              <h2>{this.state.singleBlog ? 'Home - Blog Single' : 'Home - Blog' }</h2>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header

