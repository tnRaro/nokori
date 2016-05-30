import React from "react";

import { NokoriWrap, ResultWrap } from "../containers/";

class App extends React.Component {
	render(){
		return (
			<div className="app">
				<NokoriWrap />
				<ResultWrap />
			</div>
		);
	}
}

export default App;
