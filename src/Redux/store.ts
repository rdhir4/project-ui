import {
  createStore, combineReducers, applyMiddleware, compose
} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import AuthReducer from './Auth/auth.reducer'

const middlewares = [thunk]

const middleware = composeWithDevTools(applyMiddleware(...middlewares))

export default createStore(
  combineReducers({
    auth: AuthReducer
  }),
  compose(middleware)
)
