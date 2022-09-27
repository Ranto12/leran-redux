import { NEW_TODO } from './action'
import { combineReducers } from 'redux'

function newTodo(state = [], action) {
  switch (action.type) {
    case NEW_TODO:
      return [
        ...state,
        {
          text: action.params,
          completion: false
        }
      ]
    default:
      return state
  }
}

const appState = combineReducers({
  newTodo
})

export default appState