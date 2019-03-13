import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// axios请求
import axios from 'axios';

import {Query} from 'react-apollo';
import gql from "graphql-tag";

// Query是个组件
const Posts = () => (
  <Query
    query={gql`
      {
        RootQueryType {
          count
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error</p>;
      return (<div>success！！！！</div>)
    }}
  </Query>
);


class App extends Component {
  getGraphQlData () {
    axios.get('http://localhost:3001/firstGraphqlDemo')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React now
          </a>
          <button onClick={this.getGraphQlData.bind(this)}>点击</button>
          <Posts/>
        </header>
      </div>
    );
  }
}

export default App;
