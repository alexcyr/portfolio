import path from "path";

import webpack, { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import CopyPlugin from "copy-webpack-plugin";

const devServer: DevServerConfiguration = {
	historyApiFallback: true,
};

const webpackConfig = (env): Configuration => ({
	entry: "./src/index.tsx",
	...(env.production || !env.development ? {} : { devtool: "eval-source-map" }),
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
		plugins: [new TsconfigPathsPlugin()],
	},
	output: {
		path: path.join(__dirname, "/dist"),
		filename: "build.js",
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: "ts-loader",
				options: {
					transpileOnly: true,
				},
				exclude: /dist/,
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif|webp|webm|mp4)$/i,
				type: "asset/resource",
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
		}),
		new webpack.DefinePlugin({
			"process.env.PRODUCTION": env.production || !env.development,
			"process.env.NAME": JSON.stringify(require("./package.json").name),
			"process.env.VERSION": JSON.stringify(require("./package.json").version),
		}),
		new ForkTsCheckerWebpackPlugin(),
		new ESLintPlugin({ files: "./src/**/*.{ts,tsx,js,jsx}" }),
		new CopyPlugin({
			patterns: [{ from: "public", to: "" }],
		}),
	],
	devServer,
});

export default webpackConfig;
