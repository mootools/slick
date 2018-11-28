// more info: https://github.com/jrburke/r.js/blob/master/build/example.build.js

module.exports = {
    baseUrl: '../'
    ,
    name: 'lib/attr'
    ,
    out: '../attr.built.no-oldie.js'
    ,
    paths:{
        'lib/attr.has': 'empty:'
    }
    ,
    has:{
        'has': false,
        'dom.hasAttribute': true,
        'dom.getAttribute': true
    }
    ,
    optimize:'none'
    // ,
    // pragmas:{// true = yes, remove
    //     'has':true,
    //     'oldie':true
    // }
    ,
    wrap:true
    // ,
    // uglify:{
    //     beautify:true
    // }
}

if (module.id == '.') require('requirejs').optimize(module.exports, console.log)
