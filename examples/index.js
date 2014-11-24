'use strict';

var cov = require( './../lib' );

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
