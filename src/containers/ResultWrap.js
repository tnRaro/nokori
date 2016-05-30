import { connect } from "react-redux";

import Result from "../components/Result";

const ResultWrap = connect(
	state => state
)(Result);

export default ResultWrap;
