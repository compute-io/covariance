Covariance
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computes the [sample covariance](http://en.wikipedia.org/wiki/Covariance) between one or more numeric arrays.


## Installation

``` bash
$ npm install compute-covariance
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

To use the module,

``` javascript
var cov = require( 'compute-covariance' );
```

#### cov( arr1[, arr2,...] )

Computes the [sample covariance](http://en.wikipedia.org/wiki/Covariance) between one or more numeric arrays.

``` javascript
var x = [ 1, 2, 3, 4, 5 ],
	y = [ 5, 4, 3, 2, 1 ];

var mat = cov( x, y );
// returns [[2.5,-2.5],[-2.5,2.5]]
```

If the number of arrays is not known beforehand, `cov` also accepts an `array` of `arrays`.

``` javascript
var mat = cov( [x,y] );
// returns [[2.5,-2.5],[-2.5,2.5]]
```

Note: if a single `array` is provided, the returned [sample covariance matrix](http://en.wikipedia.org/wiki/Covariance_matrix) contains a single element equal to the [sample variance](https://github.com/compute-io/variance).


## Examples

``` javascript
var cov = require( 'compute-covariance' );

// Simulate some data...
var N = 100,
	x = new Array( N ),
	y = new Array( N ),
	z = new Array( N );

for ( var i = 0; i < N; i++ ) {
	x[ i ] = Math.round( Math.random()*100 );
	y[ i ] = Math.round( Math.random()*100 );
	z[ i ] = 100 - x[ i ];
}
var mat = cov( x, y, z );
console.log( mat );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/compute-covariance.svg
[npm-url]: https://npmjs.org/package/compute-covariance

[travis-image]: http://img.shields.io/travis/compute-io/covariance/master.svg
[travis-url]: https://travis-ci.org/compute-io/covariance

[coveralls-image]: https://img.shields.io/coveralls/compute-io/covariance/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/covariance?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/covariance.svg
[dependencies-url]: https://david-dm.org/compute-io/covariance

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/covariance.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/covariance

[github-issues-image]: http://img.shields.io/github/issues/compute-io/covariance.svg
[github-issues-url]: https://github.com/compute-io/covariance/issues
