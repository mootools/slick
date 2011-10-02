/*jshint asi:true, laxbreak:true*/
define(['./Source/Slick.Finder', './attr.amd'], function(Slick, attr){
	return {

		isXML: Slick.isXML,
		contains: Slick.contains,

		find: Slick.find,
		search: Slick.search,
		match: Slick.match,

		override: Slick.override,

		attr: attr,

		pseudo:{
			define: Slick.definePseudo,
			lookup: Slick.lookupPseudo
		}
	}
})
