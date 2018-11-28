/*jshint asi:true, laxbreak:true*/
define(['./Source/Slick.Finder'], function(Slick){
	return {
		has: Slick.hasAttribute,
		get: Slick.getAttribute,

		define: Slick.defineAttributeGetter,
		lookup: Slick.lookupAttributeGetter
	}
})
