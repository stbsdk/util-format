/**
 * @license The MIT License (MIT)
 * @copyright Stanislav Kalashnik <darkpark.main@gmail.com>
 */

/* eslint no-path-concat: 0 */

'use strict';


/**
 * Do string substitution according to the given format.
 * http://stackoverflow.com/questions/610406/javascript-equivalent-to-printf-string-format
 *
 * @param {string} format string substitution format
 *
 * @return {string} result data
 *
 * @example
 * console.log(format('This is a {0}', 'cat'));
 * console.log(format('This is a {0} and a {1}', 'cat', 'dog'));
 * console.log(format('This is a {0} and a {1} and another {0}', 'cat', 'dog'));
 */
module.exports = function ( format ) {
    var args = Array.prototype.slice.call(arguments, 1),
        expr = /{(\d+)}/g;

    if ( DEVELOP ) {
        if ( !format ) { throw new Error(__filename + ': format string is empty'); }
        if ( args.length === 0 )  { throw new Error(__filename + ': no arguments'); }
        if ( !expr.test(format) ) { throw new Error(__filename + ': format string does not have substitutions: ' + format); }
    }

    return format.replace(expr, function ( match, number ) {
        return args[number] === undefined ? match : args[number];
    });
};
