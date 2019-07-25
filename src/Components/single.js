import React , {Component} from 'react';

import axios from 'axios';
import validator from 'validator';

import Category from './Category'
import Header from './Header'
import Post from './Posts'
import Footer from './Footer'

import icon1 from './../assets/img/icon1.png'
import icon2 from './../assets/img/icon2.png'
import icon3 from './../assets/img/icon3.png'
import icon4 from './../assets/img/icon4.png'



class single extends Component {
  constructor (props){
    super(props);
    this.state = {
      name : '',
      email : '',
      message : '',
      errors:{},
      success:false,
      singleBlogTitle:'',
      singleBlogAuthor:'',
      singleBlogDate:'',
      singleBlogDesc:'',
      tagList1:'',
      tagList2:'',
      postComment : [
        {name : 'Donal Smith' , comment : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat' , date : '3 hour ago'},
        {name : 'Kanina Smith' , comment : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' , date : '2 hour ago'},
        {name : 'Mahsa Mesbah' , comment : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' , date : '1 hour ago'}
      ]
    }
  }

  componentDidMount(){

    axios.get('./single.json')
    .then(response => {

      this.setState({

          singleBlogTitle: response.data.article.title,
          singleBlogAuthor:response.data.article.author.username,
          singleBlogDate:response.data.article.createdAt,
          singleBlogDesc : response.data.article.description,
          tagList1 : response.data.article.tagList[0],
          tagList2 : response.data.article.tagList[1],

      });

    })
    .catch(error => {
        console.log(error)
    })
  }

  changeFieldName(event){
    this.setState({name : event.target.value})

  }
  changeFieldEmail(event){
    this.setState({email : event.target.value})

  }
  changeFieldMessage(event){
    this.setState({message : event.target.value})

  }

  handleValid(callback){

    let {name , email , message } = this.state;
    let errors={};
    let fieldValid=true;

    if (validator.isEmpty(name)){
        fieldValid=false;
        errors['name']='Enter your name';
    }
    if (validator.isEmpty(email)){
      fieldValid=false;
      errors['email']='Enter your email';
    }
    if (validator.isEmail(email)){
      fieldValid=false;
      errors['email']='please enter your email correctly';
    }

    if (validator.isEmpty(message)){
        fieldValid=false;
        errors['message']='Enter your comment';
    }

    this.setState({errors} , ()=>{
        return callback(fieldValid);
    })

}

handleRequest() {

  const {name,email,message} = this.state;
  const data = {'name ': name, 'email' : email, 'message' : message}
  console.log('Comment Data ==> ', data)
}

handleSubmit(event){

  event.preventDefault();
  this.handleValid((valid)=>{
      if(valid){
          this.handleRequest();
          this.setState ({
            success : true
          })
      }
  })

}


  render() {
    const {singleBlogTitle,singleBlogAuthor,singleBlogDate,singleBlogDesc,tagList1,tagList2,errors}=this.state;
    const history=this.props.history
    return (
      <div>
          <Header history={history}/>
          <main style={{color:'#000'}}>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-8 col-md-12'>
                  <div className='single-blog'>
                    <div className='col-12' style={{padding:'0'}}>
                      <div className='row'>
                          <div className="col-lg-12">
                            <div className="item">
                              <div className='header-item'>
                                <h2>{singleBlogTitle}</h2>
                                <span>By : {singleBlogAuthor} Date : {singleBlogDate}</span>
                              </div>
                              <div className='cover-item'></div>
                              <div className='item-content'>
                                <p>{singleBlogDesc}</p>
                              </div>
                              <div className='footer-item'>
                                <div className='social-media'>
                                  <ul>
                                    <li>
                                      <a href='https://www.linkedin.com/' target='_blank' rel="noopener noreferrer">
                                        <img src={icon1} alt="icon" className='img-fluid'/>
                                      </a>
                                    </li>
                                    <li>
                                      <a href='https://www.linkedin.com/' target='_blank' rel="noopener noreferrer">
                                        <img src={icon2} alt="icon" className='img-fluid'/>
                                      </a>
                                    </li>
                                    <li>
                                      <a href='https://twitter.com/' target='_blank' rel="noopener noreferrer">
                                        <img src={icon3} alt="icon" className='img-fluid'/>
                                      </a>
                                    </li>
                                    <li>
                                      <a href='https://facebook.com/' target='_blank' rel="noopener noreferrer">
                                        <img src={icon4} alt="icon" className='img-fluid'/>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className='tag-item'>
                                  <label>Tags</label>
                                  <span>{tagList1}</span>
                                  <span>{tagList2}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                      </div>
                      <div className='row'>
                        <div className='col-12'>
                          <div className='posted-comment'>
                            <ul className='comments'>
                              <li className='top-comment'>
                                <div className='pic-item'></div>
                                <div className='caption-item'>
                                  <span className='post-name-item'>
                                    {this.state.postComment[0].name}
                                  </span>
                                  <span className='post-editor'>Post Editor</span>
                                  <p className='post-caption'>{this.state.postComment[0].comment}</p>
                                </div>
                              </li>
                              <li className='middle-comment'>
                                <span className='header-caption'>01 Comments</span>
                                <div className='pic-item'></div>
                                <div className='caption-item'>
                                  <span className='post-name-item'>
                                    {this.state.postComment[1].name}
                                  </span>
                                  <span className='post-editor'>{this.state.postComment[1].date}</span>
                                  <p className='post-caption'>{this.state.postComment[1].comment}</p>
                                  <div className="reply-comment">
                                    <div className="reply-btn padding-top-1 text-center" >
                                        <button type="submit" className="btn register-btn-primary">Reply</button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className='last-comment'>
                                <div className='pic-item'></div>
                                <div className='caption-item'>
                                  <span className='post-name-item'>
                                    {this.state.postComment[2].name}
                                  </span>
                                  <span className='post-editor'>{this.state.postComment[2].date}</span>
                                  <p className='post-caption'>{this.state.postComment[2].comment}</p>
                                  <div className="reply-comment">
                                    <div className="reply-btn padding-top-1 text-center" >
                                        <button type="submit" className="btn register-btn-primary">Reply</button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-12'>
                          <div className='write-comment'>
                            <span>Write Your Comment</span>
                            <form onSubmit={(e) => this.handleSubmit(e)}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <input type="text" name="name" className={["form-control generation-input" ,this.state.success ? 'success' : '',errors['name'] ? 'is-invalid' : ''].join(' ')} onChange={event => this.changeFieldName(event)} value={this.state.name} placeholder="name"/>
                                        <span style={{ display:errors['name'] ? 'block' : 'none' }}>{ errors['name'] }</span>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="email" className={["form-control generation-input" ,this.state.success ? 'success' : '',errors['email'] ? 'is-invalid' : ''].join(' ')} onChange={event => this.changeFieldEmail(event)} value={this.state.email} placeholder="email"/>
                                        <span style={{ display:errors['email'] ? 'block' : 'none' }}>{ errors['email'] }</span>
                                    </div>
                                    <div className="form-group">
                                        <textarea rows="6" cols="50" name="message" className={["form-control generation-input" ,this.state.success ? 'success' : '',errors['message'] ? 'is-invalid' : ''].join(' ')} onChange={event => this.changeFieldMessage(event)} value={this.state.message} placeholder="message"/>
                                        <span style={{ display:errors['message'] ? 'block' : 'none' }}>{ errors['message'] }</span>
                                        
                                    </div>
                                </div>
                                <div className="register-form-footer">
                                    <div className="register-btn padding-top-1 text-center" >
                                        <button type="submit" className="btn register-btn-success">submit</button>
                                    </div>
                                </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-12'>
                  <div className='sidebar'>
                    <Category history={history}/>
                    <Post/>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Footer history={history}/>
      </div>
     
    )
  }
}

export default single
