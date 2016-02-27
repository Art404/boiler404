import { createStore, combineReducers } from 'redux'

const sendAction = (state = 'actionStarted', action) => {
  console.log(action)
  return state + 1
}

const clickButton = (state = 'clickButton', action) => state

const artPost = combineReducers({
  sendAction,
  clickButton
})

export default createStore(artPost)