//CS tc_script
var a = Math.random() * 10000000000000; 


	$(document).ready(function () {
	    $.getScript("https://ubistatic2-a.akamaihd.net/worldwide_analytics/tagcommander/customersupport/customersupport-wa_data.js?rand=" + a);
	    $.getScript("https://ubistatic2-a.akamaihd.net/worldwide_analytics/tagcommander/js/tc_UbiWorldWide_1.js?rand=" + a);
	    $.getScript("https://ubistatic2-a.akamaihd.net/worldwide_analytics/tagcommander/customersupport/tc_CustomerSupport_1.js?rand=" + a);
	});


