import React from "react";

class Agaru extends React.Component {
	sagaru(value){
		this.props.setValue(parseFloat(this.refs.target.value) - value);
	}
	agaru(value){
		this.props.setValue(parseFloat(this.refs.target.value) + value);
	}
	render(){
		const { value, placeholder, setValue, lang } = this.props;

		return (
			<div className="agaru">
				<h4>{placeholder}</h4>
				<input ref="target" type="number" placeholder={placeholder} value={value} onChange={e => setValue(e.target.value)} />
				<div>
					<button onClick={this.sagaru.bind(this, 10)} >{lang.MINUS}{lang.JUU}</button>
					<button onClick={this.sagaru.bind(this, 100)} >{lang.MINUS}{lang.HYAKU}</button>
					<button onClick={this.sagaru.bind(this, 1000)} >{lang.MINUS}{lang.SEN}</button>
					<button onClick={this.sagaru.bind(this, 10000)} >{lang.MINUS}{lang.MAN}</button>
					<button onClick={this.sagaru.bind(this, 100000000)} >{lang.MINUS}{lang.OKU}</button>
				</div>
				<div>
					<button onClick={this.agaru.bind(this, 10)} >{lang.PLUS}{lang.JUU}</button>
					<button onClick={this.agaru.bind(this, 100)} >{lang.PLUS}{lang.HYAKU}</button>
					<button onClick={this.agaru.bind(this, 1000)} >{lang.PLUS}{lang.SEN}</button>
					<button onClick={this.agaru.bind(this, 10000)} >{lang.PLUS}{lang.MAN}</button>
					<button onClick={this.agaru.bind(this, 100000000)} >{lang.PLUS}{lang.OKU}</button>
				</div>
			</div>
		);
	}
}

export default Agaru;
