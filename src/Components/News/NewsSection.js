import { React, Component } from "react";
import axios from "axios";
import NewPost from "./NewPost";
import styles from "./NewsSection.module.css";


class NewsSection extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios
      .get("/posts")
      .then((response) => {
        const posts = response.data;
        const sortedPosts = posts.sort((a, b) =>{
          let dateA = new Date(a.createdAt);
          let dateB = new Date(b.createdAt);
          return dateB - dateA  
        }
        );
        const postsList = sortedPosts.map((post) => (
          <NewPost
            key={post._id}
            title={post.postHead}
            body={post.postBody}
            author={post.Author}
            time={post.createdAt}
          />
        ));
        this.setState({ posts: postsList });
      })
      .catch((error) => {
        if (!error.response) {
          // network error
          error = "Error - News Module couldnt connect to API";
        } else {
          error = error.message;
        }
      });
  }

  compareDates(a, b) {
    return a - b;
  }
  render() {
    return this.state.posts.length === 0 ? (
      <h3 style={{ textAlign: "center" }}>Nie udało się załadować postów</h3>
    ) : (
      <div className={styles.newsSection + " container"}>
        {this.state.posts}
      </div>
    );
  }
}

export default NewsSection;
