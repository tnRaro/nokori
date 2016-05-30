import { combineReducers } from "redux";

import nokori from "./nokori";
import holding from "./holding";

const app = combineReducers({
	nokori,
	holding
});

export default app;
