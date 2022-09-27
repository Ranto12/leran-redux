REDUX
Action : 
Terdiri dari 2 list yaitu : list action dan action creator. Yang mana list berarti daftar dan creator berarti pembuatan. Maka action adalah orang yang memberikan perintah untuk melakukan sesuatu pekerjaan dan memberikan hal-hal yang diberikan untuk dapat menunjang pekerjaan itu. 

Reducer : 
Bagian ini digunakan untuk mengubah atau menjalankan perintah yang diberikan. Terdapat 2 bagian yaitu untuk melakukan pekerjaan dan bagian untuk menyatukan semua pekerjaan dari aplikasi. 
import { combineReducers } from 'redux'
adalah library bawaan redux yang langsung bisa digunakan untuk menyatukan banyak reduser. 
  

Store 
Berfungsi untuk:
-	Menyimpan state aplikasi 
-	Mendapatkan akses ke dalam state, menggunakan getState()
-	Dapat melakukan perubahan state mengunakan dispatch()
-	Mendapatkan listener mengugunakan sibscribe(listener)
-	Menangani listener yang belum teregistrasi dari balikan dari subscribe(listener)


Combine reducer 

Jadi kita bisa membuat banyak action dan menjadikan dalam 1 reducer , dengan cara combinereducer . 
```
import { combineReducers, createStore } from "redux"

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

const store = createStore(rootReducer)

console.log('initial state', store.getState());


const unsubscribe = store.subscribe(()=> console.log('updated state', store.getState()))

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())


unsubscribe()
```

Middleware
Focus to how to use a middleware in redux
Import applyMiddleware = from redux
Masukan dalam 
``` const store = createStore(rootReducer, applyMiddleware(logger))

```
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
```

Asynnc redux


