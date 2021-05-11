Notes
=====

React is a framework made by Facebook in 2011.

It focuses on the usage of components. They are as the name imply, pieces of code that render a part of the site. They can be parameterized and therefore customized. Components may contain other components.
It is implemented as a javascript class which has a `state = {}` and `render()` method. 

The state is self-explanatory. It contains the state of the component. In other words it contains the variables that may be displayed or computed. 

The `render()` method contains the code that generate the HTML markup. It is basically JavaScript or its extension called **JSX** and stands for *Javascript XML*. It allows to write HTML in javaScript code without the need to use DOM manipulation methods such as `createElement()` and `appendChild()`.

## Setup

Install the latest stable version of Node.js and preferably an LTS version.

Check the installation with those 2 commands:
`node --version`
`npm --version`

These commands shall output their respective current version if installed properly. If not, fix the issue.

When node is installed, we will install globally the package that allows to create React project stubs `create-react-app`

`npm i -g create-react-app`

The course advise to use the same version so the command precise the version to be installed
`npm i -g create-react-app@1.5.2`

> I already coded in React before and already installed the latest versions. I will try going through the tutorial with it no matter what.
> My current versions are node.js v 14.16.0 and npm v 6.14.11.

Then you need a code editor. Any shall be good. Visual Studio code is advised though.

If using VS Code install the extensions *Simple React Snippets* by Burke Holland and *Prettier - Code formatter* by Esben Petersen.

## First App
In command prompt: `create-react-app react-app`

This will install:
- A lightweight development server
- Webpack for bundling the files
- Babel to compile JS code. It will convert JSX to vanilla JS code.

Once installed we can run the application with `npm start`

### Project structure

- `node_module/`: contains libraries in which React library.
- `public/`: Contains the static ressources. The most important being the HTML page with a `<div id="root">` that will be used by React to inject its code. 
- `src/`: Contains the React code. Has `App.js` which is the default root component to be displayed.