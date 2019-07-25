import React , {Component} from 'react';

import {NavLink} from 'reactstrap';

class Posts extends Component {

    render() {
        return (
            <div className='latest-posts'>
                  <div className='post-items'>
                    <span>Latest Posts</span>
                    <ul>
                      <li>
                        <NavLink>
                          <div className='pic-item'></div>
                          <div className='caption-item'>
                            <span className='latest-post-caption'>
                              Vestibulum Commodo Magna Est Tempus Eros Auctor
                            </span>
                            <span className='latest-post-date'>
                              Post 30 Mar, 18
                            </span>
                          </div>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink>
                        <div className='pic-item'></div>
                          <div className='caption-item'>
                            <span className='latest-post-caption'>
                              Vestibulum Commodo Magna Est Tempus Eros Auctor
                            </span>
                            <span className='latest-post-date'>
                              Post 30 Mar, 18
                            </span>
                          </div>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink>
                        <div className='pic-item'></div>
                          <div className='caption-item'>
                            <span className='latest-post-caption'>
                              Vestibulum Commodo Magna Est Tempus Eros Auctor
                            </span>
                            <span className='latest-post-date'>
                              Post 30 Mar, 18
                            </span>
                          </div>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink>
                        <div className='pic-item'></div>
                          <div className='caption-item'>
                            <span className='latest-post-caption'>
                              Vestibulum Commodo Magna Est Tempus Eros Auctor
                            </span>
                            <span className='latest-post-date'>
                              Post 30 Mar, 18
                            </span>
                          </div>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
        )
    }
                
}
export default Posts