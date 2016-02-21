<p align="center">
  <img src="http://i.imgur.com/qdqChOj.png" />
</p>


# platform404

Front-end renderer app for [Art404](http://www.art404.com)'s CMS platform. The aim is to provide a navigable, contextualized display of our work while allowing third party social networks to host the majority of our content. Projects can then be posted naturally on networks with audiences such as tumblr, instagram or github and then be packaged up with the additional metadata for display in a portfolio context. 


# Usage


### Environment Variables

Variable | Description
:------- | :----------
firebase\_url | The Firebase server to listen to.

DEV:

* `firebase_url=XXX npm start`
* VISIT `localhost:3000`

BUILD:

* `npm run build`
* `firebase_url=XXX NODE_ENV=production npm start`
* VISIT `localhost:3000`

DEPLOY:

* add new git commit
* `git push heroku master`


# Configuration

All configuration is stored and read from firebase. Refer to `firebase_url` in Heroku for appropriate firebase app. 

### Menu Config

The `pages` object in `main` is what determines the category heirarchy of the site's navigation.

eg:

```js
{
  "apps": {
    "label": "Apps",
    "url": "apps",
    "icon": "apps_icon.png",
    "layout": {
      // ...
    },
    "submenu": [
      {
        "label": "Javascript",
        "url": "javascript"
      },
      {
        "label": "Python",
        "url": "python"
      },
      {
        "label": "CSS",
        "url": "css"
      }
    ]
  },
  "design": {
    "label": "Design",
    "url": "design",
    "icon": "design_icon.png",
    "layout": {
      // ...
    },
    "submenu": [
      {
        "bold": true,
        "color": true,
        "label": "Web",
        "url": "web"
      },
      {
        "label": "Print",
        "url": "print"
      },
      {
        "label": "Interactive",
        "url": "interactive-design"
      }
    ]
  },
  // required, becomes highest level nav link, links to home
  "home": {
    "label": "WORK",
    "layout": {
      // ...
    }
  }
}
```

Will produce a site with `Apps` & `Design` as top level menu links. Within `Apps`, the submenu links will be `javascript`, `python`, and `css`. The `home` object will become the first link the menu and will serve as an anchor to the homepage, thus does not need a submenu or url.


#### Menu Config Properties

Property | Type | Description
:------- | :--- | :----------
label | `String` | This is the label that will be rendered in the browser for all navigation purposes.
url | `String` | This is the slug that will be used in the url, will also be used for any non-browser purposes.
icon | `String` | Direct link to image file that hosts icon for this menu item.
submenu | `Array` | Collection of hashtags that will become the "submenu" when user is on that tag's page.


#### Submenu Config Properties

The submenu links will go to a page that shows a grid view of projects that contain both the submenu tag + its parent tag.

Property | Type | Description
:------- | :--- | :----------
label | `String` | This is the label that will be rendered in the browser.
url | `String` | Where the submenu link will go to.
bold | `Bool` | Makes the link bold.
color | `Bool` | Makes the link it's page color.


### Page Config

For every object in `pages`, the `layout` property will determine the components rendered on the page + where they get content from.

eg:

```js
{
  "home": {
    "label": "WORK",
    "layout": {
      "banner": {
        "projects": [
          "138398520861",
          "139572811486",
          "101728537521"
        ],
        "tags": [
          "viral"
        ],
        "type": "scroller"
      },
      "rows": [
        {
          "content": {
            "projects": [
              "121467069611",
              "120898900716",
              "120898177576"
            ],
            "subtitle_tags": [
              "open source",
              "JavaScript",
              "web"
            ],
            "tags": [
              "code"
            ],
            "title": "Code",
            "url": "code"
          }
        },
        {
          "content": {
            "projects": [
              "121467069611",
              "120898900716",
              "120898177576"
            ],
            "subtitle_tags": [
              "branding",
              "identity",
              "logo"
            ],
            "tags": [
              "design"
            ],
            "title": "Design",
            "url": "design"
          }
        }
      ]
    }
  }
}
```

Will produce a page with a scroller banner, and two `Row` components; `Code` & `Design`.


#### Page `layout` Properties

Property | Type | Description
:------- | :--- | :----------
banner | `object` | Contains project IDs and or tags to pull in (both optional but need at least 1).
banner.type | `String` | Currently the only banner type supported is `scroller`.
projects | `array` | Always refers to an array of project IDs that take precedence over any tagged projects.
tags | `Array` | Collection of tags that will be pulled into the component after any projects.
rows | `Array` | These will render `Row` components in order with the projects & tags.


#### Row `content` Properties

Property | Type | Description
:------- | :--- | :----------
projects | `array` | Always refers to an array of project IDs that take precedence over any tagged projects.
tags | `Array` | Collection of tags that will be pulled into the component after any projects.
title | `String` | The title of the `Row`.
url | `String` | Where the "see more" button of a `Row` will link to.
subtitle_tags | `Array` | Will be rendered underneath the `title` as a collection of clickable tag links.


### Project Data Model

While projects come from various sources, all of their data models are adopted to fit platform404's expected model. This happens via [the-standardizer](http://github.com/artnotfound/the-standardizer).

```js
{
  "title": "5 Million 1 Terabyte",
  "id": 136478152056,
  "url": "5m1t",
  "priority": 900,
  "text": "A hard-drive that has 5 million dollars worth of information acquired from torrented files",
  "created_at": "2016-01-02 20:17:24 GMT",
  "type": "media",
  "thumbnail": "http://56.media.tumblr.com/5449b95c9e036d38fd7c31d4a213784d/tumblr_o0cdp0Ml1P1sz85suo1_250.png",
  "source": {
    "platform": "tumblr",
    "author": "art404",
    "author_avatar": "http://pbs.twimg.com/profile_images/652614485002207232/s5s3R6ff_normal.jpg",
    "author_url": "http://art404.tumblr.com",
    "url": "http://art404.tumblr.com/5m1t"
  },
  "stats": {
    "views": null,
    "likes": 72,
    "reshares": 112
  },
  "tags": [
    "hardware",
    "data mining",
    "torrents",
    "big data",
    "piracy"
  ],
  "media": [
    {
      "type": "photo",
      "url": "http://56.media.tumblr.com/5449b95c9e036d38fd7c31d4a213784d/tumblr_o0cdp0Ml1P1sz85suo1_400.png",
      "embed": null,
      "alt_sizes": {
        "small": "http://56.media.tumblr.com/5449b95c9e036d38fd7c31d4a213784d/tumblr_o0cdp0Ml1P1sz85suo1_75sq.png",
        "medium": "http://56.media.tumblr.com/5449b95c9e036d38fd7c31d4a213784d/tumblr_o0cdp0Ml1P1sz85suo1_250.png",
        "large": "http://56.media.tumblr.com/5449b95c9e036d38fd7c31d4a213784d/tumblr_o0cdp0Ml1P1sz85suo1_500.png"
      }
    }
  ],
  "additional": {
    "collaborators": [],
    "embeds": [],
    "comments": [],
    "press": [],
    "project_link": ""
  }
}
```


#### Project Data Model Properties

Property | Type | Default | Description
:------- | :--- | :------ | :----------
title | `String` | `null` | Label to be used as project title
id | `Number` | none | Unique id, if source has id we use that one otherwise create one
url | `String` | none | Url slug that will be used for project detail page, manually set or generated from source
thumbnail | `String` | `null` | Optional, if provided will be used as the preferred picture for `Card` previews.
priority | `Number` | `0` | 0-1000, will affect a projects position when creating collection previews
text | `String` | `null` | Related project copy
created_at | `String` | none | Date project was posted, also used in conjunction with priority to determine project position
type | `String` | none | Project types dictatate what components will render them, manually set or generated from source
source | `Object` | none | Contains relevant info from a project's source (where its hosted)
stats | `Object` | `null` | Statistical info about project
tags | `Array` | none | Tags are used to sort projects and create relationships
media | `Array` | `null` | External media links, with types and alt sizes if available
additional | `Object` | `null` | Any meta data not existant on the source manually added by contributor


# Tech Stack

* [heroku](https:/heroku.com/): hosting & deployment
* [firebase](https://firebase.com/): database provider
* [Babel](https://babeljs.io/docs/learn-es6/): for next level js
* [SASS](http://sass-lang.com/): for next level css
* [bourbon](http://bourbon.io/): for next level sass
* [webpack](https://github.com/webpack/webpack): instagram uses it
* [react](https://github.com/facebook/react): sips React kool aid once
* [react-router](https://github.com/rackt/react-router): routing solution
* [classnames](https://github.com/JedWatson/classnames): for React class name logic
* [lodash](https://lodash.com/): jQuery for adults
* [alt](http://alt.js.org/): React flux implementation
* [esLint](http://eslint.org/): because humans suck
* [express](http://expressjs.com/): servers, servers, servers


# Structure

```
.
├── /dist/                       # Compiled output
├── /node_modules/               # 3rd-party libraries and utilities
├── /src/                        # Source code of the client application
│   ├── /actions/                # Action creators that allow to trigger a dispatch to stores
│   ├── /components/             # React components
|       |── /__tests__/          # React components unit tests
│   ├── /images/                 # Image assets
│   ├── /stores/                 # Stores contain the application state and logic
│   ├── /styles/                 # CSS directory, includes core styles + bourbon
│   ├── alt.js                   # Instance of [Alt](http://alt.js.org/)
│   ├── client.js                # Client side app renderer script
│   ├── routes.js                # React router configuration
│   ├── index.tpl.html           # HTML template
└── .babelrc                     # Babel config
└── .eslintrc                    # Es lint rc
└── deploy                       # Special utility script for Heroku deployment
└── favicon.ico                  # Favicon file
└── package.json                 # The list of 3rd party libraries and utilities
└── server.js                    # Express server
└── webpack.config.js            # Default dev webpack config
└── webpack.production.config.js # Production build webpack config
```


# TODO

* Fix build process. Because Heroku doesnt have cli capabilities, we use a hacky `deploy.js` script on postinstall. This forces us to include dev dependencies in the regular dependencies, adds deployment bloat & looks weird.
* Make menu icons + colors come from config. Right now they are hardcoded.
* Support `Row` on all pages, currently limited to front page (these should be dynamically created)
* Clean up CSS
* Refactor / comment some of the more complex bits like the layout creator, menu and project pages.
* Write Tests


# Future

* Cookie based "seen" projects with total counter
* Dynamically change database source with special route
* More banner + row + card types


# License

The MIT License (MIT)

Copyright (c) 2015 ART404

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
