define(function(require, attr){

    //>>excludeStart("has", pragmas.has);
    var has = require('./attr.has')
    //>>excludeEnd("has");

    var getters = require('./attr.getters') || {}

    attr.define = function(name, fn){
        getters[name] = fn
        return this
    }

    attr.lookup = function(name){
        return getters[name]
    }

    has('dom.hasAttribute')
    ?
    attr.has = function(node, attribute){
        return node.hasAttribute(attribute)
    }
    :
    attr.has = function(node, attribute){
        // IE6-7 (at least) doesn't implement hasAttribute
        node = node.getAttributeNode(attribute)
        return !!(node && (node.specified || node.nodeValue))
    }

    has('dom.getAttribute')
    ?
    attr.get = function(node, attribute){
        var getter = getters[attribute]
        if (getter) return getter.call(node, attribute)
            return node.getAttribute(name)
    }
    :
    attr.get = function(node, attribute){
        // in IE6-7, if a form has an input of id x, form.getAttribute(x) returns a reference to the input
        var getter = this.getters[attribute]
        if (getter) return getter.call(node, attribute)
            var attributeNode = node.getAttributeNode(attribute)
        return attributeNode ? attributeNode.nodeValue : null
    }
})
