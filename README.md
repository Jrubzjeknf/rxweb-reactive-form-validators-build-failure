# Steps to reproduce the build error

1. `npm install`
2. `ng serve`

# Result

```
Error: ./node_modules/@rxweb/reactive-form-validators/__ivy_ngcc__/fesm2015/rxweb-reactive-form-validators.js
Module build failed (from ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js):
TypeError: C:\temp\testrxweb\node_modules\@rxweb\reactive-form-validators\__ivy_ngcc__\fesm2015\rxweb-reactive-form-validators.js: Column must be greater than or equal to 0, got -15
    at BasicSourceMapConsumer.SourceMapConsumer_findMapping [as _findMapping] (C:\temp\testrxweb\node_modules\@babel\core\node_modules\source-map\lib\source-map-consumer.js:543:13)
    at BasicSourceMapConsumer.SourceMapConsumer_allGeneratedPositionsFor [as allGeneratedPositionsFor] (C:\temp\testrxweb\node_modules\@babel\core\node_modules\source-map\lib\source-map-consumer.js:201:22)
    at C:\temp\testrxweb\node_modules\@babel\core\lib\transformation\file\merge-map.js:186:27
    at Array.forEach (<anonymous>)
    at BasicSourceMapConsumer.SourceMapConsumer_eachMapping [as eachMapping] (C:\temp\testrxweb\node_modules\@babel\core\node_modules\source-map\lib\source-map-consumer.js:155:14)
    at buildMappingData (C:\temp\testrxweb\node_modules\@babel\core\lib\transformation\file\merge-map.js:147:12)
    at mergeSourceMap (C:\temp\testrxweb\node_modules\@babel\core\lib\transformation\file\merge-map.js:21:17)
    at generateCode (C:\temp\testrxweb\node_modules\@babel\core\lib\transformation\file\generate.js:74:39)
    at run (C:\temp\testrxweb\node_modules\@babel\core\lib\transformation\index.js:55:33)
    at run.next (<anonymous>)
    at Function.transform (C:\temp\testrxweb\node_modules\@babel\core\lib\transform.js:27:41)
    at transform.next (<anonymous>)
    at step (C:\temp\testrxweb\node_modules\gensync\index.js:261:32)
    at C:\temp\testrxweb\node_modules\gensync\index.js:273:13
    at async.call.result.err.err (C:\temp\testrxweb\node_modules\gensync\index.js:223:11)
    at C:\temp\testrxweb\node_modules\gensync\index.js:189:28
```