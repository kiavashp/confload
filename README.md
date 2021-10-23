config
===
A simple configuration loader for Node.js

[![NPM](https://nodei.co/npm/confload.png?downloads=true)](https://nodei.co/npm/confload/)

[![Build Status](https://travis-ci.org/kiavashp/confload.svg?branch=master)](https://travis-ci.org/kiavashp/confload)

## Installation
```
npm install confload
```

## Usage

### Basic Usage

#### config.json
```json
{
    "some-module": {
        "example": "config-value",
        "labels": ["a", "b", "c"]
    }
}
```

#### index.js
```javascript
'use strict';
const config = require('confload').loadFromFile(__dirname + '/config.json');
const someModule = require(__dirname + '/lib/some-module');
```

#### lib/some-module.js
```javascript
'use strict';
const config = require('confload');

config.get() // {"some-module": {"example": "config-value"}}

config.has('some-module') // true
config.get('some-module') // {"example": "config-value"}

config.get('some-module', 'example') // "config-value"

config.get('some-module', 'labels', 1) // "b"

config.get('key-that', 'doesnt-exist') // Error: Key does not exist - key-that.doesnt-exist
config.has('key-that', 'doesnt-exist') // false
```


### Load from a custom source

```javascript
'use strict';
const configObject = /* load from somewhere else */;
const config = require('confload').load(configObject);
```
