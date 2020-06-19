//CS tc_loader
(function() {
    var a = Math.random() * 10000000000000;
    var script = document.createElement("script");
    script.setAttribute("type", "text/javascript");

    var wa_data = {};
    var tridionSettingsValues = tridionSettings.values;
    wa_data.nav = tridionSettings.values;
	window.wa_data = wa_data;
    if (wa_data.nav.country !== "US" && wa_data.nav.country !== "CA" && wa_data.nav.country !== "MX" && wa_data.nav.country !== "BR") {
        script.setAttribute("src", "//ubistatic2-a.akamaihd.net/worldwide_analytics/tagcommander/customersupport/tc_script_Customer_Support.js?rand=" + a);
    } else {
        script.setAttribute("src", "//ubistatic2-a.akamaihd.net/worldwide_analytics/tagcommander/js/prod/wa_tracking.js");
    }
    document.body.appendChild(script);

})();