import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import ViewCollection from './pages/ViewCollection';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './store/reducer'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if(serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.log("Others");
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    console.log("Storage errors");
  }
};

const persistedState = loadState();

const store = createStore(
  // persistedState,
  reducer,
  persistedState
);

store.subscribe(() => {
  saveState({
  	collections:store.getState().collections,
    currentCollection:store.getState().currentCollection, 
  });
});


const root = ReactDOM.createRoot(document.getElementById('root'));
const routing = (
  <Provider store={store}>
    <ChakraProvider>
      <Router>  
        <Routes>
          <Route exact path="/" element={<App />} />     
          <Route path="/ViewCollection" element={<ViewCollection />} />    
        </Routes>  
      </Router>  
    </ChakraProvider>
  </Provider>
)  
root.render(routing)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
