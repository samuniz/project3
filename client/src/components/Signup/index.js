import React from 'react';
import Axios from 'axios';
import "./style.css";

class Signup extends React.Component {
state = {username: "", password: ""}
handleUsername = (event) =>{
  // console.log("typing username", event.target.value)
  this.setState({username: event.target.value})
}
handlePassword = (event) =>{
  // console.log("typing username", event.target.value)
  this.setState({password: event.target.value})
}
handleSubmit = () =>{
  console.log("about to login", this.state)
  Axios.post("/signup", {
    username: this.state.username,
    password: this.state.password,
  })
  .then(function(data){
    console.log("from the back end", data)
  }) 
}

  render() {
    console.log("state", this.state)
    return (
      <div className="rcorners">
        <h1>Sign Up</h1>
        <p>Username</p>
        <input onChange= {this.handleUsername}></input>
        <p>Password</p>
        <input onChange= {this.handlePassword}></input>
        <button onClick= {this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default Signup;