import {createStore} from "redux";
import rootReducer from "../reducers/reducer";

export default function configureStore(initalState){
   return createStore(rootReducer,initalState,
       // 触发 redux-devtools
       window.devToolsExtension ? window.devToolsExtension() : undefined);
} ;