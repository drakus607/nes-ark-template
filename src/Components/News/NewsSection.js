import { React, Component } from "react";
import axios from "axios";
import NewPost from "./NewPost";
import styles from './NewsSection.module.css'


class NewsSection extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios
      .get('/posts')
      .then((response) => {
        const posts = response.data;
        const postsList = posts.map((post) => (
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
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    }

  render() {
    return <div className={styles.newsSection}>{this.state.posts}</div>;
  }
}

export default NewsSection;
