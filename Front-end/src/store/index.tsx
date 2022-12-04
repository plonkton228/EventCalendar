import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import eventReducer from "./Reducers/eventReducer";
import userReducer from "./Reducers/userReducer";

const rootStore = combineReducers({
   user : userReducer,
   events : eventReducer,
});

export const store = createStore(rootStore, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
