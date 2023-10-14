import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import configureStroe from './store/configureStore';

const store =  configureStroe()
// console.log(store)
// console.log(store.getState())

store.subscribe(() => {
  console.log('updated state', store.getState())
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store= {store}>
   <App />
</Provider>  )