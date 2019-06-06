
//src/components/App.js
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostForm from './PostForm';
import AllPost from './AllPost';
 
class App extends Component {
  render() {
    return (
      <div className="container" style={{ marginTop: '150px' }}>
        <div className="row">
          <div className="col-lg-6">
            <PostForm />
          </div>
          <div className="col-lg-6">
            <AllPost />
          </div>
        </div>
      </div>
    );
  }
}
export default App;