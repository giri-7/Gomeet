import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import './slider.css';
import rootReducer from './reducers/index';
import logger from 'redux-logger';
import Navigation from './Navigation/Navigation.js';



const middleware = applyMiddleware(logger);

const persistedState = localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')) : [];

const store = createStore(rootReducer, persistedState, middleware);

store.subscribe(() => {
    localStorage.setItem('state', JSON.stringify(store.getState()));
})


ReactDOM.render(
<Provider store={store}>
<Navigation />
</Provider>
, document.getElementById('root'));

