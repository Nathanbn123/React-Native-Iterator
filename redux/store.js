import {createStore, compose/* , applyMiddleware*/} from 'redux';
// import someReduxMiddleware from 'some-redux-middleware';
// import someOtherReduxMiddleware from 'some-other-redux-middleware';
import rootReducer from './reducers/root.reducer';

const enhancerList = [];
const devToolsExtension = window && window.__REDUX_DEVTOOLS_EXTENSION__;

if (typeof devToolsExtension === 'function') {
  enhancerList.push(devToolsExtension());
}

function counter(state = 0, action) {
  switch (action.type) {
    case 'COUNT_UP':
      return state + 1
    case 'CLEAR_COUNT':
      return state === 0
    default:
      return state
  }
}


const initStore = () => createStore(rootReducer, {}, composedEnhancer);

initStore.subscribe(() => console.log(store.getState()))

module.exports = {
  initStore
};
