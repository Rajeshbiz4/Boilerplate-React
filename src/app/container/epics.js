import { combineEpics } from "redux-observable";
import { geneEpic } from "./Dashboard/logic";
import { userdetailEpic } from "./user/logic";
import { forgotEpic, loginEpic, registerEpic } from "./header/logic";

const rootEpic = combineEpics(
  geneEpic,
  userdetailEpic,
  forgotEpic,
  loginEpic,
  registerEpic
);

export default rootEpic;
