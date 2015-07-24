[![Circle CI](https://circleci.com/gh/IL55/js-cellular-automate/tree/master.svg?style=shield)](https://circleci.com/gh/IL55/js-cellular-automate/tree/master)

# js-cellular-automate

This project was inspired by book from Stephen Wolfram, [A new kind of science](http://www.wolframscience.com/nksonline/toc.html).

Some of simple cellular automates, with using [React.js](https://facebook.github.io/react/) and svg. 

Client produce svg images, you can it export (from browser) for future use.
Also you can study cellular automates by changing automate rules and observe the result.

Online build available here:
http://js-cellular-automate.herokuapp.com

This project is generated with [yo react-webpack generator ](https://github.com/newtriks/generator-react-webpack)

## Build & development

### server (just for hosting react client)
We use simple node.js server, for hosting in production,
but may be in future we move some (slowly) functionality to server.

`npm install`

`node index.js`

### react.js client

`cd client`

Run `grunt build` for building distributive for production.

and `grunt serve` for developer preview.

### Testing

Running `grunt test` will run the unit tests with karma.

### Continues integration

we use [CircleCI](https://circleci.com/gh/IL55/js-cellular-automate)
inspired by [javascripting.com blog post](https://blog.javascripting.com/2014/12/05/continuous-deployment-with-github-circleci-heroku/)

Last master branch build deploys to Heroku:
http://js-cellular-automate.herokuapp.com