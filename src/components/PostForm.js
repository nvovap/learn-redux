
//PostForm.js
import React, { Component } from 'react';

class PostForm extends Component {
    render() {
        return (
            <div>
                <h3>Создать статью</h3>
                <form>
                    <input required type="text" placeholder="Введите заголовок" /><br /><br />
                    <textarea required rows="4" placeholder="Сообщение" /><br /><br />
                    <button>ОПУБЛИКОВАТЬ</button>
                </form>
            </div>
        );
    }
}
export default PostForm;