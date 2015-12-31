'use strict';

import React from "react";
import PostActions from "../actions/PostActions";
import PostStore from "../stores/PostStore";
import marked from 'marked';

let _getAppState = () => {
  return { posts: PostStore.getAllPosts() }
}

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = _getAppState();
    this._onChange = this._onChange.bind(this);
  }
  componentDidMount() {
    PostActions.getAllPosts();
    PostStore.startListening(this._onChange);
  }
  componentWillUnmount() {
    PostStore.stopListening(this._onChange);
  }
  _onChange() {
    console.log("5. The store has emitted a change event")
    this.setState(_getAppState());
  }

  renderView(view, e){
    this.props.renderView(view);
  }

  rawMarkup(post){
    return { __html: post };
  }

  render() {

    let posts = this.state.posts.map((post, i) => {
      return <span key={i} dangerouslySetInnerHTML={this.rawMarkup(post)}></span>
    })

    return (
      <div>
        <div className="container">
          <div className="row outercontainer">
            <div className="col-xs-12 col-sm-8 col-md-8 blogArea">
              {posts}
            </div>
            <div className="col-md-4 sidebar">
              <p>This is the sidebar</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
