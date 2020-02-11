import React, {Component} from 'react';
import {createStore} from "redux";
import rootReducer from "./reducers/rootReducer";


const store = createStore(rootReducer)

export default store;