import {createStore, combineReducers} from 'redux'

const sendAction = (state = 0, action) => {
  return state + 1
}

const clickButton = (state = 'clickButton', action) => state

const appStore = combineReducers({
  sendAction,
  clickButton
})

export default createStore(appStore)
