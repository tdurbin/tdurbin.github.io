_satellite.pushBlockingScript(function(event, target, $variables){
  var eeCookieLevel = _satellite.readCookie('ee-consent-cookie');

if (eeCookieLevel == 'all') {

    adobe.optIn.approveAll();

} else if (eeCookieLevel == 'strictly_necessary' || eeCookieLevel == 'functional') {

    adobe.optIn.approve(['aa', 'ecid']);

    adobe.optIn.deny(['aam', 'campaign', 'target', 'videoaa', 'adcloud', 'livefyre']);

} else {

    adobe.optIn.denyAll();

}
});
