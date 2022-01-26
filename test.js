const sass = require( 'sass' );

// Simple template with a function use
const template = ':root { --has-this-context-options: #{custom-function-test()}; }';

// No additional options except the function definition
const options = {
    functions : {

        // Use one optional argument to check make sure there are some,
        // to check if there are any additional arguments holding the context.
        'custom-function-test($optional:null)' : function() {

            // Function receives only the arguments from the sass function call as expected
            // but no further arguments that like a context.
            console.log( 'arguments >>>', arguments );

            // As stated here: https://github.com/sass/dart-sass/issues/1233
            // there should be an options object available in the *this* context, it's undefined
            console.log( 'this.options >>>', this.options );

            // since this refers to the global object as we can see from the keys.
            console.log( 'this >>>', Object.keys( this ) );
            const has_options = this.options && typeof this.options === 'object';
            return new sass.SassString( has_options ? 'true' : 'false' );
        },
    },
};

// Run sass
console.log( 'result >>>', sass.compileString( template, options ) );

/*
This output was generated running on *osx@11.5.2* with *node@^v10.15.3* and *sass@1.49.0*.
Sample output:

arguments >>> [Arguments] { '0': [ null ] }
this.options >>> undefined
this >>> [ 'DTRACE_NET_SERVER_CONNECTION',
  'DTRACE_NET_STREAM_END',
  'DTRACE_HTTP_SERVER_REQUEST',
  'DTRACE_HTTP_SERVER_RESPONSE',
  'DTRACE_HTTP_CLIENT_REQUEST',
  'DTRACE_HTTP_CLIENT_RESPONSE',
  'global',
  'process',
  'Buffer',
  'clearImmediate',
  'clearInterval',
  'clearTimeout',
  'setImmediate',
  'setInterval',
  'setTimeout' ]
result >>> { css: ':root {\n  --has-this-context-options: false;\n}',
  loadedUrls: [] }

*/
