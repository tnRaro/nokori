import bcp47 from "bcp-47";

import * as en_US from "./en_US";
import * as ja_JP from "./ja_JP";
import * as ko_KR from "./ko_KR";

const list = [
	en_US,
	ja_JP,
	ko_KR
];

export const language = code => {
	const schema = bcp47.parse(code);

	for(let langset of list){
		if(!schema.language && !schema.region){
			continue;
		}

		if(schema.language && schema.language !== langset.profile.language){
			continue;
		}

		if(schema.region && schema.region !== langset.profile.region){
			continue;
		}

		return langset;
	}
}

export const getList = () => list.slice();
