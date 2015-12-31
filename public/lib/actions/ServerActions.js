import AppDispatcher from "../AppDispatcher";
import {ActionTypes} from "../Constants";

let ServerActions = {
  receivePosts(posts) {
    console.log("3. In ServerActions.receiveLinks()", posts);
    // Tell everyone about it.
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_POSTS,
      posts
    });
  }
};

export default ServerActions;
