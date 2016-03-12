import * as types from '../constants/ActionTypes'
import fetch from 'isomorphic-fetch'

export function setClient(client) {
  return (dispatch) => (
     dispatch({
      'type': types.SET_CLIENT,
      client,
    })
  )
}

export function toggleSidebar(sideOpen) {
  return (dispatch) => (
    dispatch({
      'type': types.TOGGLE_SIDEBAR,
      sideOpen,
    })
  )
}

export function fetchFireSuccess(json) {
  return {
    'type': types.FETCH_FIRE_SUCCESS,
    'fire': json,
  }
}

export function fetchFire() {
  const API = process.env.API || 'http://localhost:3000/api'

  return (dispatch) => (
    fetch(`${API}/getDB`)
      .then((response) => response.json())
      .then((json) => dispatch(fetchFireSuccess(json)))
      .catch((error) => console.log(error))
  )
}
