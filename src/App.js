import React, {Component} from 'react';
import './App.css';
import store from "./store";
// import {createStore} from "redux";
import {Provider} from "react-redux";
import Count from "./components/Count";
import Control from "./components/Control";

class App extends Component {
    render() {
        // const reducer=(state={},action)=>{
        //     if(action.type=='A'){
        //
        //         return {
        //             ...state, A:'I am A'
        //         }
        //     }if(action.type=='B'){
        //         return {
        //             ...state,
        //             B:'I am B'
        //         }
        //     }
        //     return state
        // }
        // const store =createStore(reducer);
        //
        // store.subscribe(()=>{
        //     console.log(store.getState().A)
        // })
        // store.subscribe(()=>{
        //     console.log(store.getState().B)
        // })
        //
        // store.dispatch({type:"B"});
        // store.dispatch({type:"something"});
        // store.dispatch({type:"A"});
        // store.dispatch({type:"something"});

        return (
            <Provider store={store}>
            <div>
                <h1>hi</h1>
                <Count/>
                <Control/>
            </div>
            </Provider>
        );
    }
}

export default  App;