import webpack from "webpack";
import { argv } from "yargs";

import config from "../webpack.config.js";

import listener from "webpack-listener";

const compiler = webpack(config);

if(argv.watch){
	compiler.watch({
		aggregateTimeout: 300,
		poll: true
	}, listener);
} else {
	compiler.run(listener);
}
