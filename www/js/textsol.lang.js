var data_lang = {
			"en" : {
				"label.chats" : "Chats",
				"label.settings" : "Settings",
				"label.signout" : "Sign Out",
				"desc.settings" : "Below are your Live Chat Settings",
				"label.availability" : "Availability",
				"label.notification" : "Notification",
                "label.language" : "Language",
				"label.on" : "On",
				"label.off" : "Off",
                "label.chatclosed" : "Chat Closed",
                "label.closechat" : "Close Chat",                
                "label.country" : "Country",
                "label.browser" : "Browser",
                "label.city" : "City",
				"label.url" : "Url",
                "label.send" : "Send",                
                "label.pressenter" : "Type and press Enter...",
                "label.currentlyactivechats" : "Your currently active chats",
                "label.nochatsinprogress" : "There are currently no chats in progress.", 
                "label.confirmclosechat" : "Are you sure want to close this chat session?",                
                "label.somethingwrong" : "Something went wrong. Please try again later.",
                "label.wait" : "Wait...",
                "label.pleaseenteryourmessage" : "Please enter your message."
			},
			"es" : {
				"label.chats" : "Chats",
				"label.settings" : "Configuración",
				"label.signout" : "Salir",
				"desc.settings" : "A continuación se presentan los ajustes",
				"label.availability" : "Disponibilidad",
				"label.notification" : "Notificación",
                "label.language" : "Idioma",
				"label.on" : "Activado",
				"label.off" : "Discapacitado",
                "label.chatclosed" : "Chat Cerrado",
                "label.closechat" : "Cerrar Chat",                
                "label.country" : "País",
                "label.browser" : "Navegador",
                "label.city" : "Ciudad",
				"label.url" : "Url",
                "label.send" : "Mandar",                
                "label.pressenter" : "Escriba y presione Enter ...",
                "label.currentlyactivechats" : "Sus chats activas",
                "label.nochatsinprogress" : "Actualmente no hay chats en curso.", 
                "label.confirmclosechat" : "¿Seguro desea cerrar esta sesión de chat?",                
                "label.somethingwrong" : "Algo salió mal. Por favor, inténtelo de nuevo más tarde.",
                "label.wait" : "Espere ...",
                "label.pleaseenteryourmessage" : "Introduzca su mensaje."
			},
            "fr" : {
				"label.chats" : "Chats",
				"label.settings" : "Configuration",
				"label.signout" : "Sign Out",
				"desc.settings" : "Below are your Live Chat Settings",
				"label.availability" : "Availability",
				"label.notification" : "Notification",
                "label.language" : "Language",
				"label.on" : "On",
				"label.off" : "Off",
                "label.chatclosed" : "Chat Closed",
                "label.closechat" : "Close Chat",                
                "label.country" : "Country",
                "label.browser" : "Browser",
                "label.city" : "City",
				"label.url" : "Url",
                "label.send" : "Send",                
                "label.pressenter" : "Type and press Enter...",
                "label.currentlyactivechats" : "Your currently active chats",
                "label.nochatsinprogress" : "There are currently no chats in progress.", 
                "label.confirmclosechat" : "Are you sure want to close this chat session?",                
                "label.somethingwrong" : "Something went wrong. Please try again later.",
                "label.wait" : "Wait...",
                "label.pleaseenteryourmessage" : "Please enter your message."
			}
};
       
        
var lang = {
    // Application Constructor
    initialize: function() {
        this.bodyOriginal = $('#languagecontent').html();
        this.parse();
    },
    langPref: 'en',  
    bodyOriginal: '',
    set: function(lg) {
        this.langPref = lg;
    },     
    get: function(str) {
        return data_lang[this.langPref][str];
    },    
    parse: function() {   
        var to = this.bodyOriginal;      
        $.each(data_lang[this.langPref], function(key, val) {
			//alert(key.toString() + ' ' + val.toString());
            var regex = new RegExp('\\b'+key.toString()+'\\b','g');
			//$('body').html( $('body').html().replace(regex,val.toString()));    
            to = to.replace(regex,val.toString()); 					
        });						 
        $('#languagecontent').html(to);
    }
};

//alert(lang.get('label.on'));