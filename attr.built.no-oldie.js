
define('lib/attr.getters',['require','exports','module'],function(require, get){

    get['class'] = function(){
        return this.getAttribute('class') || this.className
    }

    get['for'] = function(){
        return ('htmlFor' in this) ? this.htmlFor : this.getAttribute('for')
    }

    get.href = function(){
        return ('href' in this) ? this.getAttribute('href', 2) : this.getAttribute('href')
    }

    get.style = function(){
        return (this.style) ? this.style.cssText : this.getAttribute('style')
    }

    get.type = function(){
        return this.getAttribute('type')
    }

    get.tabindex = function(){
        var attributeNode = this.getAttributeNode('tabindex')
        return (attributeNode && attributeNode.specified) ? attributeNode.nodeValue : null
    }

    get.maxlength =
    get.maxLength = function(){
        var attributeNode = this.getAttributeNode('maxLength')
        return (attributeNode && attributeNode.specified) ? attributeNode.nodeValue : null
    }
    
})

define('lib/attr',['require','exports','module','./attr.has','./attr.getters'],function(require, attr){

        var has = require('./attr.has')
    
    var getters = require('./attr.getters') || {}

    attr.define = function(name, fn){
        getters[name] = fn
        return this
    }

    attr.lookup = function(name){
        return getters[name]
    }

    true
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

    true
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
