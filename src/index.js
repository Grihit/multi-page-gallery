import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import ViewCollection from './pages/ViewCollection';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
const routing = (
  <ChakraProvider>  
    <Router>  
      <Routes>   
        <Route exact path="/" element={<App />} />     
        <Route path="/ViewCollection" element={<ViewCollection />} />    
      </Routes>  
    </Router>  
  </ChakraProvider>
)  
root.render(routing)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
