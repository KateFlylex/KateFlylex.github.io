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
      var localItems = JSON.parse(localStorage.getItem('items')); 
      if (localItems) {
        this.setState({ items: localItems });
      }
    },

  componentDidUpdate: function() {
      this._updateLocalStorage();
    },

  _updateLocalStorage: function() { 
    var items = JSON.stringify(this.state.items); 
    localStorage.setItem('items', items); 

  handleCommentAdd: function(newComment) {  
    const ItemId = this.props.match.params.ItemId;
    const newItems = this.state.items.slice(); 
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

const ItemEditor = React.createClass({ 
  getInitialState: function() { 
        return {
          text: ''
        }
     },

    handleTextChange: function(event) {
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
     },

  render: function(){
    return (
      <div className="item-editor">
        <input 
        placeholder="Type name here..."
        value={this.state.text}
        onChange={this.handleTextChange} 
        /><button className="add-button" onClick={this.handleItemAdd}>Add new</button>
      </div>
    );
  }
});

const CommentEditor = React.createClass ({
  getInitialState: function() { 
        return {
          commentText: ''
        }
     },

  handleTextChange: function(event) {
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
     },

  render: function(){
    return (
      <div><textarea 
        className="textarea" 
        placeholder="Type comment here..."
        value={this.state.commentText}
        onChange={this.handleTextChange} 
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
      var localItems = JSON.parse(localStorage.getItem('items')); 
      if (localItems) {
        this.setState({ items: localItems });
      }
    },

    handlePreviewClick(ItemId){
     
    },

    componentDidUpdate: function() {
      this._updateLocalStorage();
    },

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