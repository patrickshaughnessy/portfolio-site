import {get, post} from "jquery";

import ServerActions from "./actions/ServerActions";

let API = {
  fetchAllPosts() {
    console.log("2. In the API.fetch()")
    get("/api/posts").done(data => ServerActions.receivePosts(data.posts));
  }
};

export default API;
