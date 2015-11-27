# decorator-router-express [![Build Status](https://travis-ci.org/mastilver/decorator-router-express.svg?branch=master)](https://travis-ci.org/mastilver/decorator-router-express)

> Express strategy for [decorator-router](https://github.com/mastilver/decorator-router)


## Install

```
$ npm install --save decorator-router decorator-router-express
```


## Usage

Given a controller `controller/homeCtrl.js`
```js
import { httpGet } from 'decorator-router';

export default {
    @httpGet('/')
    getIndex(req, res){
        res.ok();
    }
}
```

You can register those routes by doing:
```js
import decoratorRouter = from 'decorator-router';
import decoratorRouterExpress = from 'decorator-router-express';
import express from 'express';

let app = express();

decoratorRouter('controller/*Ctrl.js', decoratorRouterExpress, app)
.then(x => {
    console.log('done');
});
```

## License

MIT © [Thomas Sileghem](http://mastilver.com)
