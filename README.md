# irequire

## project file

|-- main.js
|-- src
	|-- app.js
	|-- service
		|-- user.js
		|-- post.js
	|-- route
		|-- index.js

### usage

### install 

```
npm install irequire --save
```

#### relative src require

in main.js

``` js
require('irequire')('~', 'src')

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
require('irequire')('~')

//prefix require
const userService = require('~/src/service/user')
const route = require('~/src/route')

```