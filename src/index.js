import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import { INIT } from "./enum";
import app from "./reducers/";
import { logger, saver } from "./middlewares/";
import App from "./components/";

const store = createStore(app, applyMiddleware(logger, saver));

const data = JSON.parse(localStorage.getItem("nokori"));

if(data){
	store.dispatch({
		type: INIT,
		data
	});
}

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("container")
);
