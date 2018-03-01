import ReactDOM from 'react-dom';
import React from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';

import items from './items.json'

require('./components/style.css')

const Comment = React.createClass({

  getInitialState(){
        return {
          items
        };
    },

  componentDidMount: function(){
<<<<<<< HEAD
      var localItems = JSON.parse(localStorage.getItem('items')); 
=======
      var localItems = JSON.parse(localStorage.getItem('items')); /* считываем поле items из storage, парсим с помощью JSON.parse */
>>>>>>> 042dc25181ad6a5fee4a0a8fd6732ebdad11f893
      if (localItems) {
        this.setState({ items: localItems });
      }
    },

  componentDidUpdate: function() {
      this._updateLocalStorage();
    },

<<<<<<< HEAD
  _updateLocalStorage: function() { 
    var items = JSON.stringify(this.state.items); 
    localStorage.setItem('items', items); 

  handleCommentAdd: function(newComment) {  
    const ItemId = this.props.match.params.ItemId;
    const newItems = this.state.items.slice(); 
=======
  _updateLocalStorage: function() { /* метод надо вызывать при изминении состояния */
    var items = JSON.stringify(this.state.items); /* то что ледит в поле items состояния приводим к строке методом stringify */
    localStorage.setItem('items', items); /* записываем в локал сторедж*/
  },

  handleCommentAdd: function(newComment) {  /* приходит новая заметка */
    const ItemId = this.props.match.params.ItemId;
    const newItems = this.state.items.slice(); /* при помощи slice() создаем копию нашего массива, что бы не произошла модификация по ссылке и мы могли отследить параметры */
>>>>>>> 042dc25181ad6a5fee4a0a8fd6732ebdad11f893
    console.log(newItems);
    newItems.map(item => 
    {
      if (item.id == ItemId) {
          console.log(item.id);
          item.comments.push(newComment);
          item.comments.map(comment => 
          {
            console.log(comment.comment);
          }    
          );
      }
      })
    this.setState({ items: newItems });
   },

  render(){
    const ItemId = this.props.match.params.ItemId;
   return (
    <div>
      {
        this.state.items.map(item =>
          {
            if (item.id == ItemId){

              return (
                <div className='comments'>
              {
              item.comments.map(singleComment =>
                <div key={singleComment.commentId}>
                <div className='comment-img'>{singleComment.image}</div>
                <div className="comment">{singleComment.comment}</div>
                </div>
              )
              }
               </div>
               );
            }

          }
        )
      }
    <CommentEditor onCommentAdd={this.handleCommentAdd}/>
    </div>
    );
  }
});

const Item = React.createClass({
    render(){
      const { id, text, ItemOnClick, commentsAmount} = this.props;
      return (
        <div className="item">
        <Link to={`/comments/${id}`}>
            <div onClick={ItemOnClick}>
            {text}
            </div>
            <div className='comments-amount'>{commentsAmount}</div>
        </Link>
            <button className="delete-button" onClick={this.props.onDelete}>Delete</button>
            </div>
      );
    }
});

<<<<<<< HEAD
const ItemEditor = React.createClass({ 
  getInitialState: function() { 
        return {
          text: ''
=======
const ItemEditor = React.createClass({ /* добавление новых заметок */
  getInitialState: function() { /* присваивается в this.state */
        return {
          text: '' /* то что вводит пользователь должно быть синхронизировано с  input, поэтому передаем туда параметр value={this.state.text} */
>>>>>>> 042dc25181ad6a5fee4a0a8fd6732ebdad11f893
        }
     },

    handleTextChange: function(event) {
<<<<<<< HEAD
        this.setState({ text: event.target.value }); 
    },

     handleItemAdd: function() { 
        var newItem = {
          id: Date.now(), 
        text: this.state.text, 
        comments: []
      };

      this.props.onItemAdd(newItem); 
      this.setState({ text: '' }); 
=======
        this.setState({ text: event.target.value }); /* по мере того как пользователь вводит текст, метод меняет state */
    },

     handleItemAdd: function() { /* формируем обьект с новой заметкой */
        var newItem = {
          id: Date.now(), /* текущее время в милисекундах, что бы айди не повторялись */
        text: this.state.text, /* текст берем из state */
        comments: []
      };

      this.props.onItemAdd(newItem); /* передаем значение от родителя к компоненту */
      this.setState({ text: '' }); /* ощичаем потоле состояние нашего компонента */
>>>>>>> 042dc25181ad6a5fee4a0a8fd6732ebdad11f893
     },

  render: function(){
    return (
      <div className="item-editor">
        <input 
        placeholder="Type name here..."
        value={this.state.text}
<<<<<<< HEAD
        onChange={this.handleTextChange} 
=======
        onChange={this.handleTextChange} /* добавляем onChange, что бы можно было изменить this.state */
>>>>>>> 042dc25181ad6a5fee4a0a8fd6732ebdad11f893
        /><button className="add-button" onClick={this.handleItemAdd}>Add new</button>
      </div>
    );
  }
});

const CommentEditor = React.createClass ({
<<<<<<< HEAD
  getInitialState: function() { 
        return {
          commentText: ''
=======
  getInitialState: function() { /* присваивается в this.state */
        return {
          commentText: '' /* то что вводит пользователь должно быть синхронизировано с  textarea, поэтому передаем туда параметр value={this.state.text} */
>>>>>>> 042dc25181ad6a5fee4a0a8fd6732ebdad11f893
        }
     },

  handleTextChange: function(event) {
<<<<<<< HEAD
        this.setState({ commentText: event.target.value }); 
    },

  handleCommentAdd: function() { 
        var newComment = {
          id: Date.now(), 
          image: "photo",
        comment: this.state.commentText  
      };

      this.props.onCommentAdd(newComment); 
      this.setState({ commentText: '' }); 
=======
        this.setState({ commentText: event.target.value }); /* по мере того как пользователь вводит текст, метод меняет state */
    },

  handleCommentAdd: function() { /* формируем обьект с новой заметкой */
        var newComment = {
          id: Date.now(), /* текущее время в милисекундах, что бы айди не повторялись */
          image: "photo",
        comment: this.state.commentText  /* текст берем из state */
      };

      this.props.onCommentAdd(newComment); /* передаем значение от родителя к компоненту */
      this.setState({ commentText: '' }); /* ощичаем потоле состояние нашего компонента */
>>>>>>> 042dc25181ad6a5fee4a0a8fd6732ebdad11f893
     },

  render: function(){
    return (
      <div><textarea 
        className="textarea" 
        placeholder="Type comment here..."
        value={this.state.commentText}
<<<<<<< HEAD
        onChange={this.handleTextChange} 
=======
        onChange={this.handleTextChange} /* добавляем onChange, что бы можно было изменить this.state */
>>>>>>> 042dc25181ad6a5fee4a0a8fd6732ebdad11f893
        /><button className="add-button" onClick={this.handleCommentAdd}>Add new</button>
      </div>
      );
  }
});

const ItemApp = React.createClass({
    
    getInitialState(){
        return {
          items
        };
    },

    componentDidMount: function(){
<<<<<<< HEAD
      var localItems = JSON.parse(localStorage.getItem('items')); 
=======
      var localItems = JSON.parse(localStorage.getItem('items')); /* считываем поле items из storage, парсим с помощью JSON.parse */
>>>>>>> 042dc25181ad6a5fee4a0a8fd6732ebdad11f893
      if (localItems) {
        this.setState({ items: localItems });
      }
    },

    handlePreviewClick(ItemId){
     
    },

    componentDidUpdate: function() {
      this._updateLocalStorage();
    },

<<<<<<< HEAD
    handleItemAdd: function(newItem) {  
    var newItems = this.state.items.slice(); 
    newItems.unshift(newItem); 
    this.setState({ items: newItems }); 
   
    },

    onItemDelete: function(item) {
      var itemId = item.id; 
      var newItems = this.state.items.filter(function(item){
        return item.id !== itemId; 
      });
      this.setState({ items: newItems }); 
    },

      _updateLocalStorage: function() { 
    var items = JSON.stringify(this.state.items); 
    localStorage.setItem('items', items); 
  },

    render() {
=======
    handleItemAdd: function(newItem) {  /* приходит новая заметка */
    var newItems = this.state.items.slice(); /* при помощи slice() создаем копию нашего массива, что бы не произошла модификация по ссылке и мы могли отследить параметры */
    newItems.unshift(newItem); /* добавляем новую заметку в начало массива */
    this.setState({ items: newItems }); /* изменяем состояние */
    /* this.setState({ items: newItems }, this._updateLocalStorage); */ /* (старый вариант) в setState есть параметр сcallback (this._updateLocalStorage), который будет вызван после того, как состояние измениться */
    },

    onItemDelete: function(item) {
      var itemId = item.id; /* метод принимает заметку которую надо удалить, берет ее айди */
      var newItems = this.state.items.filter(function(item){
        return item.id !== itemId; /* фильтрует массив заметок которые хранятся в состоянии, и отбирает только те заметки айди которых не равен айди удаленной заметки*/
      });
      this.setState({ items: newItems }); /*обновляем состояние с новым массивом */
    },

      _updateLocalStorage: function() { /* метод надо вызывать при изминении состояния */
    var items = JSON.stringify(this.state.items); /* то что ледит в поле items состояния приводим к строке методом stringify */
    localStorage.setItem('items', items); /* записываем в локал сторедж*/
  },

    render() {
      /*const { items } = this.state;*/

>>>>>>> 042dc25181ad6a5fee4a0a8fd6732ebdad11f893
      return (
        <div className="items-list">
        <h2>Items</h2>
        <ItemEditor onItemAdd={this.handleItemAdd}/>
        {
          this.state.items.map(item =>
            <div>
            <Item key={item.id}
            id = {item.id}
            text = {item.text}
            commentsAmount = {item.comments.length}
            ItemOnClick={this.handlePreviewClick.bind(null, item.id)}
            onDelete={this.onItemDelete.bind(null, item)}>
            {item.text}
            </Item>
            </div>
          )
        }
        <Link to='/about'>About</Link><br/>
        <Link to='/comments'>Comments</Link>
       </div>
      );
    }
});

const CommentApp = React.createClass({

  render() {
    return (
      <div className="comments-app"><h2>Comments</h2>
      <Route path='/comments/:ItemId' component={Comment}/>
      </div>
    );
  }
});


const AboutPage = React.createClass({
    render() {
    return (
      <div className="comments-app">
        Task for empeek
     </div>
    );
  }
});

const DairyApp = React.createClass({
    render() {
    return (
      <div>
        <ItemApp />
        <Switch>
        <Route path='/comments' component={CommentApp}/>
        <Route path='/about/' component={AboutPage}/>
        </Switch>
     </div>
    );
  }
});

ReactDOM.render(
	<HashRouter >
		<DairyApp />
    </HashRouter>,
    document.getElementById('content-wrapper')
);