import Dashboard from "./Dashboard";
import Context from "../context";
import reducer from '../reducer';
import React, {useReducer, useContext} from 'react';

const App = () => {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <Dashboard />
    </Context.Provider>
  );
};

export default App;
