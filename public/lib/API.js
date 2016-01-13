import {get, post} from "jquery";

import ServerActions from "./actions/ServerActions";

let API = {
  fetchAllPosts() {
    get("/api/posts").done(data => ServerActions.receivePosts(data.posts));
  }
};

export default API;
