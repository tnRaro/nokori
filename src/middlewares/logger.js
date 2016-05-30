const logger = store => next => action => {
	console.group(action.type);
	console.info("Dispatching", action);
	let result = next(action);
	console.info("next state", store.getState());
	console.groupEnd(action.type);

	return result;
}

export default logger;
