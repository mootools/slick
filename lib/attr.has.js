define(function(require, exports){
    var has = exports = require('has')

    has.add('dom.getAttribute', function(global, document, testEl){
        return has.isHostType(testEl, 'hasAttribute')
    })

    has.add('dom.hasAttribute', function(global, document, testEl){
        // FIXME: add hasAttribute feature test
        return true
    })
    
    return has
})
