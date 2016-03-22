config
===
A simple configuration loader for Node.js

[![Build Status](https://travis-ci.org/kiavashp/confload.svg?branch=master)](https://travis-ci.org/kiavashp/confload)

## Installation
```
npm install confload
```

## Usage

#### config.json
```json
{
    "some-module": {
        "example": true
    }
}
```

#### index.js
```javascript
'use strict';
const config = require('config').loadFromFile(__dirname + '/config.json');
const someModule = require(__dirname + '/lib/some-module');
```

#### lib/some-module.js
```javascript
'use strict';
const config = require('config');

config.get() // {"some-module": {"example": true}}
config.get('some-module') // {"example": true}
config.get('some-module', 'example') // true
```
