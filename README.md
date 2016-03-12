<p align="center">
  <img src="https://raw.githubusercontent.com/Art404/boiler404/master/boiler404.png" />
</p>

# boiler404

Isomorphic, React, ES6, Webpack based starter kit for quickly starting web app projects tailored for [art404](http://art404.com).

> Based off a fork of Richard Krawll's [react-starter](https://github.com/richardkall/react-starter)

# Usage

### Environment Variables

Variable | Description
:------- | :----------
firebase\_url | Optional Firebase server to listen to, will get added to the `app` prop at the top level container.


```bash
$ npm install
```

Start development server:

```bash
$ npm run start:dev
```

Start with firebase:

```bash
$ npm run firebase_url="XXX" start:dev
```

Start production server:

```bash
$ npm start
```

DEPLOY:

```bash
$ git push heroku master
```

# Features

- Isomorphic server rendering for faster load times + seo benefits
- Pre-render data-fetching
- Mobile + Cookie detection as top-level props 
- SCSS + [bourbon](http://bourbon.io) framework
- Redux developer tools + Hot Reloading 
- EZ Deploy to Heroku with `npm start`

# Tech Stack

- [x] [firebase](https://firebase.com/)
- [x] [Babel](https://babeljs.io/)
- [x] [ESLint](http://eslint.org/)
- [x] [Express](http://expressjs.com/)
- [x] [Mocha](https://mochajs.org/)
- [x] [React](http://facebook.github.io/react/)
- [x] [React Router](https://github.com/reactjs/react-router)
- [x] [React Transform HMR](https://github.com/gaearon/react-transform-hmr)
- [x] [Redux](http://redux.js.org/)
- [x] [Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension)
- [x] [Webpack](https://webpack.github.io)

# Structure

```bash
.
├── client                    # Source code for client-side application
│   ├── actions               # Redux action creators
│   ├── components            # Presentational/dumb components
│   ├── constants             # Global constants (action types etc.)
│   ├── containers            # Stateful/smart components
│   ├── reducers              # Redux reducers
│   ├── routes                # Routes used by React Router (shared with server)
│   ├── store                 # Redux store
│   └── index.js              # Entry point for client-side application
├── server                    # Source code for Express server
│   ├── api                   # Mock API
│   ├── middleware            # Server middleware
│   ├── views                 # Server views (Jade templates)
│   ├── index.js              # Entry point for server (with babel-register etc.)
│   └── server.js             # Express server
├── test                      # Test setup and helpers
├── .babelrc                  # Babel configuration
├── .eslintrc                 # ESLint configuration
└── webpack.config.babel.js   # Webpack configuration
```

