requirejs.config( {
	  baseUrl: "/public/script"
	, paths : {

		// lib
		"requireJS"				:	"lib/requirejs/require"
		, "async"				:	"lib/requirejs/plugin/async"
		, "text"				:	"lib/requirejs/plugin/text"
		, "i18n"				:	"lib/requirejs/plugin/i18n"
		, "domReady"			:	"lib/requirejs/plugin/domReady"
		, "jquery"				:	"lib/jquery/jquery"
		, "angular"				:	"lib/angular/angular"

		// modules
		

		// controller(s)
		

	  }
	, shim: {
		"angular"				:	{
			"exports"			:	"angular"
		}
	  }
	, urlArgs : "bust=" + ( new Date() ).getTime()

} );