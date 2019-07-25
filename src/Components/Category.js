import React , {Component} from 'react';

import {NavLink} from 'reactstrap';
import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class Category extends Component {

    render() {
        
        return (
            <div className='category'>
                  <form className="form-inline">
                      <input className="category-search-input form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                      <button className="btn btn-outline-success my-2 my-sm-0" type="submit" disabled><FontAwesomeIcon icon={faSearch} style={{color:'#ccc'}} /></button>
                  </form>
                  <div className='category-items'>
                    <span>Categories</span>
                    <ul>
                      <li className='active'>
                        <NavLink onClick={()=> this.props.history.push(`/home`)}>
                          Duplex Home
                        </NavLink>
                      </li>
                      <li>
                        <NavLink>
                          Drawing Rooms
                        </NavLink>
                      </li>
                      <li>
                        <NavLink>
                          Bedrooms
                        </NavLink>
                      </li>
                      <li>
                        <NavLink>
                          kitchen Rooms
                        </NavLink>
                      </li>
                      <li>
                        <NavLink>
                          Bathrooms
                        </NavLink>
                      </li>
                      <li>
                        <NavLink>
                          Garden Home
                        </NavLink>
                      </li>
                      <li>
                        <NavLink>
                            Animation Design
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
        )
    }
                
}
export default Category