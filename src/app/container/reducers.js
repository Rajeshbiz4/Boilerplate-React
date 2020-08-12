import { combineReducers } from "redux";
import { geneReducer } from "./Dashboard/logic";
import { userDetailsReducer } from "./user/logic";
import { forgotReducer, loginReducer, registerReducer } from "./header/logic";

const rootReducer = combineReducers({
  gene: geneReducer,
  userDetail: userDetailsReducer,
  forgot: forgotReducer,
  login: loginReducer,
  register: registerReducer,
});

export default rootReducer;
