import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import { createStore } from 'redux'
//import rootReducers from './reducers'
//import {Provider} from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);
//const store = createStore(rootReducers)

reportWebVitals();
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

/*
------------------Store.js-----------------
import {createStore, createHook} from 'react-sweet-state'

const apiUrl = 'https://45240421cf2f0c2fbd1eea6c037d3984.m.pipedream.net/'

// define store initial state
const initialState = {
    data: [],
    loading: true,
    error: null,
}
// define the actions that mutate the state
const actions = {
    fetch: () => async ( { setState, getState } ) => {
      if (getState().loading) return;

      setState({
        loading: true,
      })

      try {
        const res = await fetch(apiUrl)
        const data = await res.json()
        console.log('datadata: ', data)
        setState({ 
          data, 
          loading: false 
        });
      } catch (error) { 
        setState({ 
          error: error.message, 
          loading: false });
      } 
    }
  }

  // create a store
  const Stores = createStore( {initialState, actions} )
  // create components to access store state instances
  export const useHouseData = createHook(Stores)
*/