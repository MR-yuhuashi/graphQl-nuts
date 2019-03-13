import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import apollo required dependencies
import {ApolloProvider} from 'react-apollo';
import {ApolloClient} from 'apollo-client';
import {createHttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
// create the httpLink that will connect your ApolloClient instance with the GraphQL API, your GraphQL server will be running on http://localhost:3001
const httpLink = createHttpLink({
    // uri: 'https://48p1r2roz4.sse.codesandbox.io'
    uri: 'http://localhost:3001/firstGraphql',
    headers: {
        'content-type': 'application/json',
    },
})
// instantiate ApolloClient by passing in the httpLink and a new instance of an InMemoryCache
const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})

// The App is wrapped with the higher-order component ApolloProvider that gets passed the client as a prop
ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
