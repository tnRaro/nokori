import React from "react";

import Item from "./Item";

class Result extends React.Component {
	render(){
		const { nokori, holding, lang } = this.props;

		return (
			<div className="result">
			<h1>Result</h1>
			<Item description={lang.AVERAGE} middleware={() => {
				const d = new Date();
				const today = d.getDate();
				const laday = new Date(d.getYear(), d.getMonth() + 1, 0).getDate();

				return (nokori - holding) / (laday - today + 1);
			}} />
			</div>
		);
	}
}

export default Result;
