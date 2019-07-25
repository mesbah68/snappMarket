import React , {Component} from 'react';
import {NavLink} from 'reactstrap';

 class Footer extends Component {
  // constructor (props){
  //   super(props);
   
  // }
  componentDidMount() {}

  render() {
    return (
      <footer>
        <div className='footer-top'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 col-md-8 col-xs-12 mx-auto'>
                <div className='footer-content'>
                <h2>Subscribe Our Newsletter</h2>
                <div className='footer-caption'>
                <span>Donec tempor finibus ante ac luctus. Fusce facilisis nisi vel odio tincidunt maximums. Pellentesque tempus gravida  viverra</span>
                </div>
                <form className="subscribe-email">
                        <input className="subscribe-email-input form-control mr-sm-2" type="search" placeholder="Enter Email Address" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" disabled style={{opacity:'1'}}>Subscribe</button>
                </form>
              </div>
            </div>
            </div>
          </div>
        </div>
          <div className='footer-bottom'>
            <div className='container'>
            <div className='row'>
                    <div className='col-lg-6 col-md-6 col-xs-12 col-xs-pull-12'>
                      <div className='left-side'>
                        <span>Designed by GoldLayers | Powered by WordPress</span>
                      </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-xs-12 col-xs-push-12'>
                      <div className='right-side'>
                      <ul className="footer-nav">
                                <li className="nav-item active">
                                <NavLink className="nav-link" style={{cursor:'pointer'}} onClick={()=> this.props.history.push(`/home`)}>Home <span className="sr-only">(current)</span></NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink className="nav-link" >About</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink className="nav-link" >Screen</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink className="nav-link" >Contact</NavLink>
                                </li>
                      </ul>
                      </div>
                    </div>
         </div>
            </div>
          </div>
      </footer>
    )
  }
}

export default Footer

