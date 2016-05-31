import React from "react";

import Agaru from "./Agaru";

import { language, getList } from "../languages/";

class Nokori extends React.Component {
	render(){
		const { nokori, setNokori, holding, setHolding, lang, setLanguage } = this.props;
		
		return (
			<div className="nokori">
				<h1>Nokori</h1>
				<select value={`${lang.profile.language}-${lang.profile.region}`} onChange={e => {setLanguage(language(e.target.value))}}>
					{
						getList().map(({ profile }) => (
							<option key={profile.id} value={`${profile.language}-${profile.region}`}>
								{ `${profile.name} (${profile.id})` }
							</option>
						))
					}
				</select>
				<Agaru placeholder={lang.CASH_IN_HAND} value={nokori} setValue={setNokori} lang={lang} />
				<Agaru placeholder={lang.RESERVE_FUND} value={holding} setValue={setHolding} lang={lang} />
			</div>
		);
	}
}

export default Nokori;
