import {createStore, combineReducers} from 'redux'

const sendAction = (state = 0, action) => {
  return state + 1
}

const appStore = combineReducers({
  sendAction
})

export default createStore(appStore)
