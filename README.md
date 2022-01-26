# sass-functions-context-test
A small test setup to check for sass custom function context object.

As stated here: https://github.com/sass/dart-sass/issues/1233 there should be an *options* object in the *this context* for custom functions.
When checking the details of https://github.com/sass/dart-sass/pull/1236 the merged code looks like it should do the job: https://github.com/sass/dart-sass/pull/1236/files/4695c73e73a5cee1979519971ffbb694f02582f3
but the *options* context object is not available, no any other object that holds the function calls context information.
The function should output 'true', but it returns the 'false' string and as seen in the output.

This output was generated running on *osx@11.5.2* with *node@^v10.15.3* and *sass@1.49.0*.
Sample output:

```
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
```
