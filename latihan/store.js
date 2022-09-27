import { createStore } from 'redux'
import todoApp from './reducer'
import { newTodo } from './action'
let store = createStore(todoApp)

console.log(store.getState())

let unsubscribe = store.subscribe(() => 
  console.log(store.getState())
)

store.dispatch(newTodo('Belajar dasar Redux'))
store.dispatch(newTodo('Belajar hal baru'))
store.dispatch(newTodo('Belajar 3 komponen dasar'))