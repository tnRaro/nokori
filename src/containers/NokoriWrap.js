import { connect } from "react-redux";

import Nokori from "../components/Nokori";

import { SET_NOKORI, SET_HOLDING } from "../enum";

const NokoriWrap = connect(
	state => state,
	dispatch => ({
		setNokori: value => {
			dispatch({
				type: SET_NOKORI,
				value
			});
		},
		setHolding: value => {
			dispatch({
				type: SET_HOLDING,
				value
			});
		}
	})
)(Nokori);

export default NokoriWrap;
