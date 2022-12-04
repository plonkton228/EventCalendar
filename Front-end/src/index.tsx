import Cookies from 'js-cookie';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './store';
import axios from 'axios'
import { Actions } from './types/UserTypes';
const token = Cookies.get('token');
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
   <BrowserRouter>
    <App />
   </BrowserRouter>
  </Provider>
);

if(token)
{ 
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
axios.post("http://127.0.0.1:8000/api/auth/me")
.then(res => store.dispatch({type : Actions.AUTH_USER, payload: res.data}))
}


