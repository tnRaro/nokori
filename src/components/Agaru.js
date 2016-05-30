import React from "react";

class Agaru extends React.Component {
	sagaru(value){
		this.props.setValue(parseFloat(this.refs.target.value) - value);
	}
	agaru(value){
		this.props.setValue(parseFloat(this.refs.target.value) + value);
	}
	render(){
		const { value, placeholder, setValue } = this.props;

		return (
			<div className="agaru">
				<h4>{placeholder}</h4>
				<input ref="target" type="number" placeholder={placeholder} value={value} onChange={e => setValue(e.target.value)} />
				<div>
					<button onClick={this.sagaru.bind(this, 10)} >-十</button>
					<button onClick={this.sagaru.bind(this, 100)} >-百</button>
					<button onClick={this.sagaru.bind(this, 1000)} >-千</button>
					<button onClick={this.sagaru.bind(this, 10000)} >-万</button>
					<button onClick={this.sagaru.bind(this, 100000000)} >-億</button>
				</div>
				<div>
					<button onClick={this.agaru.bind(this, 10)} >+十</button>
					<button onClick={this.agaru.bind(this, 100)} >+百</button>
					<button onClick={this.agaru.bind(this, 1000)} >+千</button>
					<button onClick={this.agaru.bind(this, 10000)} >+万</button>
					<button onClick={this.agaru.bind(this, 100000000)} >+億</button>
				</div>
			</div>
		);
	}
}

export default Agaru;
