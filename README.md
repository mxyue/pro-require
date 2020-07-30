# pro-require

### install 

```
npm install pro-require --save
```

## usage

### project file

```
|-- main.js
|-- src
	|-- app.js
	|-- service
		|-- user.js
		|-- post.js
	|-- route
		|-- index.js
```

#### relative src require

in main.js

``` js
require('pro-require')('~', 'src')

//now you can use relative require and relative project src directory require

//origin require
const lodash = require('lodash') 
const app = require('./src/app')

//prefix require
const userService = require('~/service/user')
const route = require('~/route')

```

#### relative project require

``` js
require('pro-require')('~')

//prefix require
const userService = require('~/src/service/user')
const route = require('~/src/route')

```