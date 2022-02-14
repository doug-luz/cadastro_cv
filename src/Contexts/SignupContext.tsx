import { createContext, useContext, useReducer, ReactNode } from "react";

interface State {
  page: number;
  name: string;
  languages: string;
  experience: 0 | 1;
  github: string;
  email: string;
}

interface SignupProviderProps {
  children: ReactNode;
}
interface ActionTypes {
  type: SignpuActions;
  payload: any;
}

interface ContextTypes {
  state: State;
  dispatch: (action: ActionTypes) => void;
}

const SignupContext = createContext<ContextTypes | undefined>(undefined);

export enum SignpuActions {
  setPage,
  setName,
  setLanguages,
  setExperience,
  setGithub,
  setEmail,
}

const SignupReducer = (state: State, action: ActionTypes) => {
  switch (action.type) {
    case SignpuActions.setPage:
      return { ...state, page: action.payload };
    case SignpuActions.setName:
      return { ...state, name: action.payload };
    case SignpuActions.setLanguages:
      return { ...state, languages: action.payload };
    case SignpuActions.setExperience:
      return { ...state, experience: action.payload };
    case SignpuActions.setGithub:
      return { ...state, github: action.payload };
    case SignpuActions.setEmail:
      return { ...state, email: action.payload };

    default:
      return state;
  }
};

const defaultData: State = {
  page: 0,
  name: "",
  languages: "",
  experience: 0,
  github: "",
  email: "",
};
export const SignupProvider = ({ children }: SignupProviderProps) => {
  const [state, dispatch] = useReducer(SignupReducer, defaultData);
  const value = { state, dispatch };
  return (
    <SignupContext.Provider value={value}>{children}</SignupContext.Provider>
  );
};

export const useSignup = () => {
  const context = useContext(SignupContext);
  if (context === undefined) {
    throw new Error("Hook must be used inside Provider");
  }
  return context;
};
