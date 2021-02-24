import {React, Component} from 'react'
import styled from 'styled-components'
import axios from 'axios'
const serverStatus = require('steam-server-status'); 


class TestDiv extends Component {
    state ={
        users: []
    }
    
    componentDidMount() { 
        axios.get('http://localhost:3001/users')
        .then((response) => {
        const users = response.data; 
        const usersList = users.map(user =>{
         return (
             <p key={user.id}>User: {user.name},
              login: {user.username},
              e-mail: {user.email},
              website: {user.website} </p>
         );
     })
     this.setState({users: usersList});
   })
   .catch(function (error) {
     // handle error
     console.log(error);
   });
 };

   render() {
    return (
        <div>
            {this.state.users}
        </div>
    )
   }
}

export default TestDiv
