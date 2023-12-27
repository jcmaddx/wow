import { useReducer, createContext } from "react";
import { appReducer } from "./reducers";

// initial state
const initialState = {loading: true, get: true, action: "stand", text: "", hide: true, locked: false};

// create context
const Context = createContext({});

// combine reducer function
const combineReducers = (...reducers) => (state, action) => {
  for (let i = 0; i < reducers.length; i++) state = reducers[i](state, action);
  return state;
};

// context provider
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(combineReducers(appReducer), initialState);
  const value = { state, dispatch };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, Provider };
