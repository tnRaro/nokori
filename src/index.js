import url from "url";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import { INIT, SET_LANGUAGE } from "./enum";
import app from "./reducers/";
import { logger, saver } from "./middlewares/";
import App from "./components/";
import { language } from "./languages/";

const store = createStore(app, applyMiddleware(logger, saver));

const data = JSON.parse(localStorage.getItem("nokori"));

console.log(data);

if(data){
	store.dispatch({
		type: INIT,
		data
	});
	if(!data.lang){
	   store.dispatch({
		   type: SET_LANGUAGE,
		   lang: language(navigator.language)
	   });
	}
} else {
	store.dispatch({
		type: SET_LANGUAGE,
		lang: language(navigator.language)
	});
}

const urlObj = url.parse(location.href, true);

if(urlObj.query.lang){
	store.dispatch({
		type: SET_LANGUAGE,
		lang: language(urlObj.query.lang) || language("en-US")
	});
}

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("container")
);
