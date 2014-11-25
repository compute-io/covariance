/**
*
*	COMPUTE: covariance
*
*
*	DESCRIPTION:
*		- Computes the sample covariance between one or more numeric arrays.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

'use strict';

// COVARIANCE //

/**
* FUNCTION: covariance( arr1[, arr2,...] )
*	Computes the sample covariance between one or more numeric arrays.
*
* @param {...Array} arr - numeric array
* @returns {Array} covariance matrix
*/
function covariance() {
	var args,
		nArgs,
		len,
		deltas,
		delta,
		means,
		cov,
		arr,
		A, B, N,
		i, j, n;

	args = Array.prototype.slice.call( arguments );
	nArgs = args.length;

	for ( i = 0; i < nArgs; i++ ) {
		if ( !Array.isArray( args[i] ) ) {
			throw new TypeError( 'covariance()::invalid input argument. Must provide array arguments.' );
		}
	}
	if ( Array.isArray( args[0][0] ) ) {
		// If the first argument is an array of arrays, calculate the covariance over the nested arrays, disregarding any other arguments...
		args = args[ 0 ];
	}
	nArgs = args.length;
	len = args[ 0 ].length;
	for ( i = 1; i < nArgs; i++ ) {
		if ( args[i].length !== len ) {
			throw new Error( 'covariance()::invalid input argument. All arrays must have equal length.' );
		}
	}
	// [0] Initialization...
	deltas = new Array( nArgs );
	means = new Array( nArgs );
	cov = new Array( nArgs );
	for ( i = 0; i < nArgs; i++ ) {
		means[ i ] = 0;
		cov[ i ] = new Array( nArgs );
		arr = cov[ i ];
		for ( j = 0; j < nArgs; j++ ) {
			arr[ j ] = 0;
		}
	}
	// [1] Compute the covariance...
	for ( n = 0; n < len; n++ ) {

		N = n + 1;

		// [a] Extract the values and compute the deltas...
		for ( i = 0; i < nArgs; i++ ) {
			deltas[ i ] = args[ i ][ n ] - means[ i ];
		}

		// [b] Update the covariance between one array and every other array...
		for ( i = 0; i < nArgs; i++ ) {
			arr = cov[ i ];
			delta = deltas[ i ];

			for ( j = i; j < nArgs; j++ ) {
				A = arr[ j ] * n;
				B = n / N * delta * deltas[j];
				arr[ j ] = (A+B) / N;

				// Exploit that the covariance matrix is symmetric...
				if ( i !== j ) {
					cov[ j ][ i ] = arr[ j ];
				}
			} // end FOR j

		} // end FOR i

		// [c] Update the means...
		for ( i = 0; i < nArgs; i++ ) {
			means[ i ] += deltas[ i ] / N;
		}
	} // end FOR n

	return cov;
} // end FUNCTION covariance()


// EXPORTS //

module.exports = covariance;
