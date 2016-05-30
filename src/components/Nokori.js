import React from "react";

import Agaru from "./Agaru";

class Nokori extends React.Component {
	render(){
		const { nokori, holding, setNokori, setHolding } = this.props;

		return (
			<div className="nokori">
				<h1>Nokori</h1>
				<Agaru placeholder="残ったお金" value={nokori} setValue={setNokori} />
				<Agaru placeholder="除外金" value={holding} setValue={setHolding} />
			</div>
		);
	}
}

export default Nokori;
