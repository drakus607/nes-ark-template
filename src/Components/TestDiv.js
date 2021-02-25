import { React, Component } from "react";
import axios from "axios";

class TestDiv extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:3001/users")
      .then((response) => {
        const users = response.data;
        const usersList = users.map((user) => {
          return (
            <p key={user._id}>
              User: {user.name}, e-mail: {user.email}, website: {user.password}
            </p>
          );
        });
        this.setState({ users: usersList });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  render() {
    return <div>{this.state.users}</div>;
  }
}

export default TestDiv;
