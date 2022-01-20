# How to Set Up webpack 5:

- First, make a directory command `mkdir [name] ` and `cd [folder name]`.
- `git init`and pash the command that is created in the GitHub repository.
- Run command `npm init -y`.

#### To begin, install webpack and webpack-cli

```
npm i -D webpack webpack-cli
```

- Run command `code .` to run code in the Visual Studio Code.
- Create `.gitignore` and write `node_modules` for ignore this file.
- create `src/index.js` file. and write some code.

### Create and edit the webpack.config.js file:

```
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "./src/index.js"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack",
      template: path.resolve(__dirname, "./src/template.html"), // template file
      filename: "index.html", // output file
    }),
  ],
  mode: "development",
};
```

```
and run command npm i
```

### Edit the package.json scripts:

```
"build": "webpack",
"start": "webpack serve"
```

- Run command `npm run build` and that will build `dist and main.js` and we have to ignore dist folder in the `.gitignore` folder.

#### Install the plugin:

```
npm i -D html-webpack-plugin
```

- Create `src/template.html` file and make structure.
- To build the `npm run build` and to run the code `npm run`.
