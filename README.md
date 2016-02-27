<p align="center">
  <img src="https://raw.githubusercontent.com/Art404/boiler404/master/boiler404.png" />
</p>

# boiler404

Boilerplate for quickly starting node web app projects with React + ES6 + Webpack + Redux.

# Usage

DEV:

* `npm start`
* VISIT `localhost:3000`

DEPLOY:

* add new git commit
* `git push heroku master`

# Tech Stack

* [Babel](https://babeljs.io/docs/learn-es6/): for next level js
* [SASS](http://sass-lang.com/): for next level css
* [bourbon](http://bourbon.io/): for next level sass
* [webpack](https://github.com/webpack/webpack): instagram uses it
* [react](https://github.com/facebook/react): sips React kool aid once
* [react-router](https://github.com/rackt/react-router): routing solution
* [classnames](https://github.com/JedWatson/classnames): for React class name logic
* [lodash](https://lodash.com/): jQuery for adults
* [redux](http://redux.js.org/): React flux implementation
* [esLint](http://eslint.org/): because humans suck
* [express](http://expressjs.com/): servers, servers, servers

# Structure

```
├── /dist/                       # Compiled output
├── /node_modules/               # 3rd-party libraries and utilities
├── /src/                        # Source code of the client application
│   ├── /actions/                # Action creators that allow to trigger a dispatch to stores
│   ├── /components/             # React components
|       |── /test/               # React components unit tests
│   ├── /images/                 # Image assets
│   ├── /stores/                 # Stores contain the application state and logic
│   ├── /styles/                 # CSS directory, includes core styles + bourbon
│   ├── client.js                # Client side app renderer script
│   ├── routes.js                # React router configuration
│   ├── index.tpl.html           # HTML template
└── .babelrc                     # Babel config
└── .eslintrc                    # eslint config
└── deploy                       # Special utility script for Heroku deployment
└── favicon.ico                  # Favicon file
└── package.json                 # The list of 3rd party libraries and utilities
└── server.js                    # Express server
└── webpack.config.js            # Default dev webpack config
└── webpack.production.config.js # Production build webpack config
```

# TODO

* Fix build process. Because Heroku doesnt have cli capabilities, we use a hacky `deploy.js` script on postinstall. This forces us to include dev dependencies in the regular dependencies, adds deployment bloat & looks weird
* Write Tests

# License

The MIT License (MIT)

Copyright (c) 2016 ART404

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
