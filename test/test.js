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

	it( 'should throw an error if not provided an array' );

	it( 'should throw an error if not provided arrays of equal length' );

	it( 'should compute the sample covariance' );

	it( 'should compute the sample variance when provided an array of arrays' );

});
