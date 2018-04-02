const path = require("path");

module.exports = {
  entry: "./index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      },
      {
        test: /\.css$/,
        use: [
          'css-loader'
        ]
     }
    ]
  },
  plugins: [],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
}
};