import { createStore } from 'redux'

const initialState = {
    counter: 0
}

const counter = (state = initialState, action) =>{
    switch (action.type) {
        case "INCREMENT":
            return {counter: state.counter +1}
        case "DECREMENT":
            return {counter: state.counter -1}
        default: 
            return state
    } 
}

let store = createStore(counter)

store.subscribe(()=> console.log(store.getState()))

const unsubscribe = store.subscribe(()=> console.log('update state ', store.getState()))

store.dispatch({type: 'INCREMENT'})
// store.dispatch({type: 'INCREMENT'})
// store.dispatch({type: 'INCREMENT'})
// store.dispatch({type: 'INCREMENT'})
// store.dispatch({type: 'INCREMENT'})
// store.dispatch({type: 'INCREMENT'})

unsubscribe()