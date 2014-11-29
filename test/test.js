'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	cov = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-covariance', function tests() {

	it( 'should export a function', function test() {
		expect( cov ).to.be.a( 'function' );
	});

	it( 'should throw an error if not provided an array', function test() {
		var values = [
			'5',
			5,
			null,
			undefined,
			true,
			NaN,
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				cov( value );
			};
		}
	});

	it( 'should throw an error if not provided arrays of equal length', function test() {
		expect( foo ).to.throw( Error );
		function foo() {
			cov( [1,2,3], [1,2] );
		}
	});

	it( 'should throw an error if `bias` option is not a boolean', function test() {
		var values = [
			'5',
			5,
			null,
			undefined,
			[],
			NaN,
			function(){},
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				cov( [], {'bias': value });
			};
		}
	});

	it( 'should ignore any unrecognized options', function test() {
		expect( foo ).to.not.throw( Error );
		function foo() {
			cov( [], { 'unknown_option': 'beep' });
		}
	});

	it( 'should throw an error if not provided any arrays', function test() {
		expect( foo ).to.throw( Error );
		function foo() {
			cov();
		}
	});

	it( 'should return a zero matrix if array length is less than 2', function test() {
		var x, y, expected, actual;

		x = [ 1 ];
		y = [ -1 ];

		expected = [ [0,0], [0,0] ];
		actual = cov( x, y );

		assert.deepEqual( actual, expected );
	});

	it( 'should compute the sample covariance', function test() {
		var x, y, z, expected, actual;

		x = [ 1, -1 ];
		y = [ -1, 1 ];

		expected = [ [2,-2],[-2,2] ];
		actual = cov( x, y );

		assert.deepEqual( actual, expected );

		x = [ 3, -2, 5, 4 ];
		y = [ 6, -2, 3, -1 ];

		expected = [ [29/3,6], [6,41/3] ];
		actual = cov( x, y );

		assert.deepEqual( actual, expected );

		x = [ -1, -2, 4 ];
		y = [ 1, 3, 0 ];
		z = [ 2, 1, 3 ];

		expected = [
			[ 31/3, -25/6, 3 ],
			[ -25/6, 7/3, -3/2 ],
			[ 3, -3/2, 1 ]
		];
		actual = cov( x, y, z );

		for ( var i = 0; i < actual.length; i++ ) {
			for ( var j = 0; j < actual[i].length; j++ ) {
				assert.closeTo( actual[i][j], expected[i][j], 1e-10 );
			}
		}
	});

	it( 'should compute the sample covariance when provided an array of arrays', function test() {
		var data, expected, actual;

		data = [ [1,-1], [-1,1] ];

		expected = [ [2,-2],[-2,2] ];
		actual = cov( data );

		assert.deepEqual( actual, expected );
	});

	it( 'should compute the population covariance', function test() {
		var x, y, expected, actual;

		x = [ 3, -2, 5, 4 ];
		y = [ 6, -2, 3, -1 ];

		expected = [ [7.25,4.5], [4.5,10.25] ];
		actual = cov( x, y, {'bias': true} );

		assert.deepEqual( actual, expected );
	});

});
