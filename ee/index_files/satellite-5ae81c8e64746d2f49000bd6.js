_satellite.pushAsyncScript(function(event, target, $variables){
  $('.component-basketv2-affiliate').hide();

function createCookie(name, value, expires, path, domain) {
		  var cookie = name + "=" + escape(value) + ";";

  
		  if (expires) {
			// If it's a date
			if(expires instanceof Date) {
			  // If it isn't a valid date
			  if (isNaN(expires.getTime()))
			   expires = new Date();
			}
			else
			  expires = new Date(new Date().getTime() + parseInt(expires) * 1000 * 60 * 60 * 24);

			cookie += "expires=" + expires.toGMTString() + ";";
		  }

		  if (path)
			cookie += "path=" + path + ";";
		  if (domain)
			cookie += "domain=" + domain + ";";

		  document.cookie = cookie;
		
}

if(window.location.href === "https://business.ee.co.uk/EEcheckout/") {
		createCookie("hideAffiliatePromo", "affiliate", 99999, "/", "business.ee.co.uk");
}
		
if(window.location.href === "https://business.ee.co.uk/basket/?oj=true") {
		if (document.cookie.indexOf('hideAffiliatePromo') > -1 ) {
		  
      $('.component-basketv2-affiliate').show();
		} else {
			
			//document.getElementsByClassName("affiliate-promo")[0].style.visibility = "visible";
			//document.getElementsByClassName ("component-basket__affiliate")[0].style.visibility = "hidden";
      $('.component-basketv2-affiliate').hide();
		} 
} 


});
