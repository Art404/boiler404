import { createStore, combineReducers } from 'redux'

const post = (state = {}, action) => {
	switch (action.type) {
		case 'ADD_POST':
			return {
				text: action.text	
			}
		default:
			return state
	}
}

const postList = (state = [], action) => {
	switch (action.type) {
		case 'ADD_POST':
			return [
				...state,
				post(undefined, action)
			]
		default:
			return state
	}
}

const artPost = combineReducers({
  post,
  postList
})

export default createStore(artPost)