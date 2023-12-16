import { useReducer, createContext } from "react";
import { ContextDataType } from "../types";

export enum ActionType {
  setLogin = "SetLogin",
  setLogout = "SetLogout",

  setUser = "SetUser",
}
interface Action {
  type: ActionType;
  payload?: any;
}

interface Props {
  children: React.ReactNode;
}

const initialState: ContextDataType = {
  token: null,
  user: null,
};
const reducer = (state: ContextDataType, action: Action) => {
  const { type } = action;
  switch (type) {
    case ActionType.setLogin:
      return {
        ...state,
        token: action.payload.token,
      };
    case ActionType.setLogout:
      return {
        ...state,
        token: null,
        user: null,
      };
    case ActionType.setUser:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

const DataValueContext = createContext<{
  state: ContextDataType;
  dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => {} });

const DataValueProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataValueContext.Provider value={{ state, dispatch }}>
      {children}
    </DataValueContext.Provider>
  );
};

export { DataValueContext, DataValueProvider };
