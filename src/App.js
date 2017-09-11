import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import RouterComponent from './Router';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyC_G5G2nCo6SW5qdUjlpqtndXKhSQ5OxYw',
      authDomain: 'auth-b8cfc.firebaseapp.com',
      databaseURL: 'https://auth-b8cfc.firebaseio.com',
      projectId: 'auth-b8cfc',
      storageBucket: 'auth-b8cfc.appspot.com',
      messagingSenderId: '934300427214'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return(
      <Provider store={store}>
       <RouterComponent />
      </Provider>
    );
  }
}

export default App;
