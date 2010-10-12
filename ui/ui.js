// //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  // //
// Baseline

var ns = Array.prototype

if (!ns.forEach) ns.forEach = function(fn){
	for (var i = -1, l=this.length; i < l; ++i){
		fn(this[i], i, this)
	}
}

ns = null

// //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  // //
// Util

function $$(selector, context){
	return Slick.search(context || document, selector, [])
}

// function removeElement(element){
// 	element.parentNode.removeChild(element)
// }
// 
// function Element_svgImgToObject(img){
// 	var obj = document.createElement('div')
// 	obj.innerHTML = '<object data="' + img.src + '" type="image/svg+xml"><i class=img>' + img.alt + '</i></object>'
// 	obj = obj.firstChild
// 	img.parentNode.replaceChild(obj, img)
// 	return obj
// }

function Element_objectSVGToImg(obj){
	var img = document.createElement('div')
	img.innerHTML = '<img src="' + obj.data + '" height=512 width=512>'
	img = img.firstChild
	obj.parentNode.replaceChild(img, obj)
	return img
}


// //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  // //
// Site Specific

// Fix for browsers who can't handle svg in IMG
// Since this is a visual fix it's perfectly valid to sniff
if (/WebKit|Trident\/(?:[5-9]\b|\d\d+)/.test(navigator.userAgent))
$$('object[data*=.svg]').forEach(Element_objectSVGToImg)
