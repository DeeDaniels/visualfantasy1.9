import React, { Component } from "react";
import "./App.css";
// import YouTube from 'react-youtube';
import VideoPanel from "./VideoPanel";
import axios from "axios";



class App extends Component {

  componentDidMount() {
     this.callApi()
  }

  callApi() {
    axios.post('/signup',{
      email:"dee@gmail.com",
      password:"dee"
    })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  }
  render() {
    return (
      <div>
        <VideoPanel> </VideoPanel>
      </div>
    );
  }
}

export default App;
