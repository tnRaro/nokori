import { combineReducers } from "redux";

import nokori from "./nokori";
import holding from "./holding";
import lang from "./lang";

const app = combineReducers({
	nokori,
	holding,
	lang
});

export default app;
