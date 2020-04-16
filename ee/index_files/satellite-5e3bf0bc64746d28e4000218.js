_satellite.pushBlockingScript(function(event, target, $variables){
  //if there are new doubleclick categories or types that needs to be defined, it can be done in the config object below. Scroll further down to see more of the code comments.    
var config = [
    {
    'dcm':'dcm value missing',
      'urls': [/o=Android/i],
      'doubleclickId': 'DC-3796688',
    'doubleclickSrc': '3796688',
    'doubleclickType': 'eebus360',
    'doubleclickCat': 'ee-bu001'
    },        
    {
    'dcm':'dcm value missing',
      'urls': [/mobile-broadband.*/i],
      'doubleclickId': 'DC-3796688',
    'doubleclickSrc': '3796688',
    'doubleclickType': 'eebus360',
    'doubleclickCat': 'ee-sm0'
    },
    {
    'dcm':'dcm value missing',
      'urls': [/\/phones\/samsung.*/i],
      'doubleclickId': 'DC-3796688',
    'doubleclickSrc': '3796688',
    'doubleclickType': 'eebus360',
    'doubleclickCat': 'ee-bu000'
    },
    {
    'dcm':'dcm value missing',
      'urls': [/tablets.*/i],
      'doubleclickId': 'DC-3796688',
    'doubleclickSrc': '3796688',
    'doubleclickType': 'eebus360',
    'doubleclickCat': 'ee-bu002'
    },
    {
    'dcm':'dcm value missing',
        'urls': [/\/phones\/apple.*/i],
        'doubleclickId': 'DC-3796688',
    'doubleclickSrc': '3796688',
    'doubleclickType': 'eebus360',
    'doubleclickCat': 'ee-co0'
    }
  ];

  var pageUrl = window.location.pathname;
  const queryParam = window.location.search;

 //this loop ensures that the variables defined in the config object above are returned to "_satellite" object so they can be referenced in other pieces of code. Note that these are not setup as data elements in the interface. 
    for (var i = 0; i < config.length; i++) {
      for (var j = 0; j < config[i].urls.length; j++) {
        if (config[i].urls[j].test(pageUrl) || (config[i].urls[j].test(queryParam) && pageUrl.indexOf("phones") != -1)) {
            _satellite.setVar('doubleclickId',config[i].doubleclickId);
            _satellite.setVar('doubleclickSource',config[i].doubleclickSrc);
            _satellite.setVar('doubleclickCategory',config[i].doubleclickCat);
            _satellite.setVar('doubleclickType',config[i].doubleclickType);
            gtagDC();
        }
      }
    }
  
  
  // this is the actual tag that is supposed to fire. Wrapped it into a function and called the function in the code above. 
  
  
function gtagDC(){  
gtag('event', 'conversion', {
    'allow_custom_scripts': true,
    'send_to': _satellite.getVar("doubleclickId") +"/"+ _satellite.getVar("doubleclickType") +"/"+ _satellite.getVar("doubleclickCategory") + "+standard"
  });
}
});
