import {EventEmitter} from "events";
import AppDispatcher from "../AppDispatcher";
import {ActionTypes} from "../Constants";

let _posts = [];

class PostStore extends EventEmitter {
  // Register with the Dispatcher
  constructor(props) {
    super(props);

    AppDispatcher.register(action => {
      switch (action.actionType) {
        case ActionTypes.RECEIVE_POSTS:
          // account for the new data;
          _posts = action.posts;
          this.emit("CHANGE");
          break;
        default:
          // do nothing
      }
    })
  }
  // Expose some data
  getAllPosts() {
    return _posts.map(post => {
      return post;
    });
  }

  // Listen stuff
  startListening(callback) {
    this.on("CHANGE", callback);
  }
  stopListening(callback) {
    this.removeListener("CHANGE", callback);
  }
}

export default new PostStore();
