# Description:
Simple boilerplate of an empty react app with steps as commits.

Here are the steps if you want to recreate this yourself.

## Step 1: Initialize NPM

### How:
cmd: npm init --save

## Step 2: Install npm modules

### How:
npm install --save (type a bunch of modules here)
#### Suggested modules for starters:
webpack
webpack-dev-server
react
react-dom
babel-core
babel-loader
babel-preset-es2015
babel-preset-react
css-loader
style-loader
file-loader
sass-loader
node-sass

## Step 3: Add Scripts to package.json

### How:
Add 
```js
"webpack" : "webpack",
"start" : "webpack-dev-server --hot-inline",
```
into the scripts object here

```js
"scripts" : {
    "test": "echo \"Error: no test specified\" && exit 1"
}
```
## Step 4: Create a .gitignore file

### How:
Create this file in your root directory.
Add these and whatever else you need to.

If you're using github pages you probably want to leave the bundles out of here because they help github pages update.
```gitignore
node_modules/
bundle.js
bundle.js.map
```
## Step 5: Create a webpack.config.js file

### How:
Feel free to take the one in this repo.
Edit it to your needs.

## Step 6: Create index.html, entry.jsx, and test.jsx

### How:
For this example our index.html is in the root directory.
It's a regular html file with a div in the body with the class "container"

Our entry.jsx can be found in the folder assets, and js.
This is were we said it could be found in our webpack.config.js file.
If you need to change this entry location be sure to change it in your webpack.config.js file also.

Our test.jsx file is in the same location as the entry.jsx
This file is just to see if our react is all connected properly.
This component could have likewise been written as a functional component like this because it doesn't do much.

```js
function Test(props) {
  return  <div className="sampleDiv">
            <h1>Hello World</h1>
          </div>;
}
```

### TODO: 
At this point you should run webpack-dev-server in your cmd and go to localhost:8080
You can see your changes live here. 
You will also see your changes reload as you move onto the last stage in this example.

## Step 7: Create and add style files

### How:
For our example we created a styles folder in our assets.
We then proceeded to require them into our entry.jsx folder.
We chose sass you can use whatever you want. 
If you imported only the modules listed in the example your choices are sass and css.

```js
require('../styles/reset.scss');
```
