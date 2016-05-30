import React from "react";

class Item extends React.Component {
	render(){
		const { description, middleware, props } = this.props;

		return (
			<div className="item">
				<span className="title">{description}</span>
				{": "}
				<span className="value">{middleware(props)}</span>
			</div>
		);
	}
}

export default Item;
