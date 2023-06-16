import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { watcherUser } from "./action-creators/user-action-creators";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { userReducer } from "./reducers/user-reducer";
import { watcherMovie } from "./action-creators/movie-action-creators";
import {movieReducer} from "./reducers/movie-reducer";


const sagaMiddleware = createSagaMiddleware();
function* rootSaga(){
  yield all([
    watcherUser(),
    watcherMovie(),
  ])
}

const store =  createStore(combineReducers({ user: userReducer, movie: movieReducer }), applyMiddleware(sagaMiddleware));

function handleStoreChange() {
    const state = store.getState();
    localStorage.setItem('localState', JSON.stringify(state));
  
  }
  sagaMiddleware.run(rootSaga);
  
 store.subscribe(handleStoreChange)
  

 

 export default store