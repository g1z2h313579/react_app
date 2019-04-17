import { createStore } from 'redux';
import reducer from './reducer';
import state from './state'

const store = createStore(
    reducer,
    state
)


export default store;