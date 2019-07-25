import React , {Component} from 'react';

import {NavLink} from 'reactstrap';
import axios from 'axios';

import Category from './Category'
import Posts from './Posts'


class Main extends Component {
    
  constructor (props) {
    super(props);
    this.state = {
      blog :[],
    }
  }

componentDidMount() {

    axios.get('./blog.json')
      .then(response => {

        this.setState({
            blog: response.data.articles
        });

    })
      .catch(error => {
        console.log(error)
    })
  }

  render() {
    const history=this.props.history;
    return (
      <main>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 col-md-12'>
              <div className='blog'>
                <div className='col-12' style={{padding:'0'}}>
                  <div className='row'>
                    {
                       this.state.blog.map((item, index) => {
                        return (
                            <div className="col-lg-6" key={index}>
                              <NavLink className='main-article-nav' onClick={()=> this.props.history.push(`/single-blog`)}>
                              <div className="item">
                                  <div className='cover-item'></div>
                                  <div className='item-content'>
                                    <h2>{item.title}</h2>
                                    <span>By : {item.author.username}, Date : {item.createdAt}</span>
                                    <p>{item.description}</p>
                                  </div>
                                </div>
                                </NavLink>
                            </div>
                        )

                    }
                )
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-12'>
              <div className='sidebar'>
                <Category history={history}/>
                <Posts/>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default Main




