import React from "react";
import PostActions from "../actions/PostActions";
import PostStore from "../stores/PostStore";
// import um from '../../../util/userManagement';

let _getAppState = () => {
  return { posts: PostStore.getAllPosts() }
}

class Admin extends React.Component {
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
    this.setState(_getAppState());
  }

  render() {
    console.log(um);
    return (
      <div>
        <h1>This is the admin page</h1>
      </div>
    );
  }
}

export default Admin;
