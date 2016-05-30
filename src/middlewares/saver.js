const saver = store => next => action => {
	let result = next(action);

	localStorage.setItem("nokori", JSON.stringify(store.getState()));

	return result;
}

export default saver;
