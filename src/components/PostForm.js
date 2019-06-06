//src/components/PostForm.js
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 
class PostForm extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h3 className="card-title mb-5 text-center">Создать статью</h3>
          <form>
            <div className="form-group">
              <input
                required
                className="form-control"
                type="text"
                placeholder="Введите заголовок"
              />
            </div>
            <div className="form-group">
              <textarea
                required
                rows="4"
                className="form-control"
                placeholder="Сообщение"
              />
            </div>
            <button className="btn btn-success">ОПУБЛИКОВАТЬ</button>
          </form>
        </div>
      </div>
    );
  }
}
export default PostForm;