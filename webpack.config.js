const path = require( 'path' );

module.exports = ( env, options ) => {
	return {
		entry: './src/index.js',

		output: {
			path: path.resolve( __dirname, 'build' ),
			filename: 'block.js',
		},
		devServer: {
			contentBase: path.join(__dirname, 'build'),
			compress: true,
			port: 9000
		},
		devtool: 'cheap-eval-source-map',
    mode: 'development',
		module: {
			rules: [
				{
					test: /\.jsx$|\.es6$|\.js$/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env'],
						}
					},
					exclude: /(node_modules|bower_components)/
				},
				{
					test: /\.css$/,
					use: [ 'style-loader', 'css-loader' ]
				},
				{
					test: /\.(png|jpg|gif)$/,
					use: [
						{
							loader: 'file-loader',
							options: {}
						}
					]
				}
      ]
    }
  }
};