import { createContext, Dispatch, SetStateAction } from "react";

import { User } from "../types/api/User";

type LoginUserContextType = {
  loginUser: User | null;
  setLoginUser: Dispatch<SetStateAction<User | null>>;
};

const LoginUserContext = createContext<>({});
