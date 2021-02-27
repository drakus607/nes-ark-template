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
        <div>Błąd połączenia z serwerem</div>
        console.log(error);
      });
    }

  render() {
    return (this.state.posts.length === 0) ? null : <div className={'container ' + styles.newsSection}>{this.state.posts}</div>;
  }
}

export default NewsSection;
