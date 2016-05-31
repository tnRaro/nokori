import { connect } from "react-redux";

import Nokori from "../components/Nokori";

import { SET_NOKORI, SET_HOLDING, SET_LANGUAGE } from "../enum";

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
		},
		setLanguage: lang => {
			dispatch({
				type: SET_LANGUAGE,
				lang
			});
		}
	})
)(Nokori);

export default NokoriWrap;
