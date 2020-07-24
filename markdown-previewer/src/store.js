import { combineReducers, createStore } from 'redux'
import markdownReducer from './reducers/markdownReducer'

const reducers = combineReducers({
    markdownString: markdownReducer
})

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
