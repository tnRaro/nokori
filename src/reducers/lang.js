import { INIT, SET_LANGUAGE } from "../enum";

const lang = (state = {}, action) => {
	switch(action.type) {
		case INIT:
			return action.data.lang || state;
		case SET_LANGUAGE:
			return action.lang || state;
		default:
			return state;
	}
}

export default lang;
