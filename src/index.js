import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './pages/App';
import './index.css';

const { REACT_APP_API_HOST = 'http://localhost:3000' } = process.env;

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI1OGNlMThmNTAyMjZiODZlYmY4YTNjN2UifQ.94L8T58sxT4QHEduQnYVl_V3JrT0E6eGwrEJyu_0BDo";
const networkInterface = createNetworkInterface({
    uri: `${REACT_APP_API_HOST}/graphql`,
});
networkInterface.use([
    {
        applyMiddleware(req, next) {
            req.options.headers = {
                authorization: `JWT ${token}`,
                ...req.options.headers,
            };
            next();
        },
    },
]);
const client = new ApolloClient({ networkInterface });


/*
const onLogin = async function(serverUrl, email, password) {
    const response = await fetch(`${serverUrl}/login`, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    token = data.token;
    localStorage.setItem(KEY, token);
};
*/

ReactDOM.render((
    <ApolloProvider client={client}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </ApolloProvider>
), document.getElementById('root'));

registerServiceWorker();
