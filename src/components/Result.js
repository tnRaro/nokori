import React from "react";

import Item from "./Item";

class Result extends React.Component {
	render(){
		const { nokori, holding } = this.props;

		return (
			<div className="result">
			<h1>Result</h1>
			<Item description="一日で使いできるお金" middleware={() => {
				const d = new Date();
				const today = d.getDate();
				const laday = new Date(d.getYear(), d.getMonth(), 0).getDate();

				return (nokori - holding) / (laday - today + 1);
			}} />
			</div>
		);
	}
}

export default Result;
