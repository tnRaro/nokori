import { INIT, SET_NOKORI } from "../enum";

const nokori = (state = 0, action) => {
	switch(action.type){
		case INIT:
			return action.data.nokori || state;
		case SET_NOKORI:
			return action.value;
		default:
			return state;
	}
}

export default nokori;
