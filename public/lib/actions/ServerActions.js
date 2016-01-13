import AppDispatcher from "../AppDispatcher";
import {ActionTypes} from "../Constants";

let ServerActions = {
  receivePosts(posts) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_POSTS,
      posts
    });
  }
};

export default ServerActions;
