import API from "../API";

let PostActions = {
  getAllPosts() {
    API.fetchAllPosts();
  }
};

export default PostActions;
