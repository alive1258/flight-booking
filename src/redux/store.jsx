
import bookReducer from './book/bookReducer';
import { createStore } from 'redux';

const store = createStore(bookReducer) 


export default store;