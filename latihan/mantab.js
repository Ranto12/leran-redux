import { combineReducers, createStore, applyMiddleware } from "redux"
import loggers from "redux-logger"

const logger = loggers.createLogger()

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

function buyCake() {
    return {
        type : BUY_CAKE,
        info : 'First redux action'
    }
}

function buyIcecream(){
    return{
        type : BUY_ICECREAM,
        info : 'First redux action'
    }
}


const initialCakeState = {
    numOfCakes : 10
}
const initialIceCream ={
    numOfIcecream : 20
}

const cakeReducer = (state = initialCakeState, action)=>{
    switch(action.type){
        case BUY_CAKE : 
            return {
                ...state,
                numOfCakes: state.numOfCakes -1
            }
        default : return state
    }
}

const IceCreamReducer = (state = initialIceCream, action)=>{
    switch(action.type){
        case BUY_ICECREAM :
            return {
                ...state,
                numOfIcecream : state.numOfIcecream -1
            }
        default : return state
    }
}
const rootReducer = combineReducers({
    cake : cakeReducer,
    iceCream : IceCreamReducer
})

const store = createStore(rootReducer, applyMiddleware(logger))

console.log('initial state', store.getState());


const unsubscribe = store.subscribe(()=>{} )

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())


unsubscribe()
