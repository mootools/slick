define(function(require, get){

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
