import { INIT, SET_HOLDING } from "../enum";

const holding = (state = 0, action) => {
	switch(action.type) {
		case INIT:
			return action.data.holding || state;
		case SET_HOLDING:
			return action.value;
		default:
			return state;
	}
}

export default holding;
