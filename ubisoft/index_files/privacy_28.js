tc_privacy_used = typeof tc_privacy_used != 'undefined' ? tc_privacy_used : 0;if(tc_privacy_used=='0'){/*										    
 * tagContainer Privacy v2.5						
 * Copyright Tag Commander						
 * http://www.tagcommander.com/					
 * Generated: 17/05/2018 12:34:23             
 * ---                                         	
 * Version   : 005                   	
 * IDP       : 28                   	
 * IDS       : 915              	
 */

tC.privacyVersion='005';
/*!compressed by YUI*/ try{tC.privacy.document=top.document}catch(e){tC.privacy.document=document}tC.privacy.showPrivacy=function(){var p=tC.privacy.document,y=tC.getCookie(tC.privacy.getCN()),r=y.split("@@@"),k="",a=28,f="005",m=p.getElementById("tc_div_preview"),d=m?m:p.body,q=[{id:26,label:"ADS",id_privacy:28,categoryParent:-1,position:0,description:"Do you accept cookies being deposited and read in order to analyse your interests and offer personalised advertisements?",isUsedInTarget:true,subCategories:null,tagsId:[210]},{id:27,label:"ANALYTICS",id_privacy:28,categoryParent:-1,position:1,description:"Do you accept cookies being deposited and read in order to allow us to measure the audience of our website:",isUsedInTarget:true,subCategories:null,tagsId:[212]}];if(p.getElementById("footer_tc_privacy")){p.getElementById("footer_tc_privacy").style.display="block";return}if(r.length<=2||(k!=""&&r[1]!=k)){}else{return}var l='<p class="tc_privacy_text"><span> <img src="https://ubistatic2-a.akamaihd.net/emea/tagcommander/js/Monochrome_Institutional_Black_CMYK.png" width="70" /> </span> By continuing to navigate on this site, you accept the use of cookies to offer advertising adapted to your interests, [collect visit statistics] and allow you to use the social network share buttons.<a href="https://legal.ubi.com/privacypolicy/" title="Legal">To learn more </a> and <a href="#" onclick="tC.privacyCenter.showPrivacyCenter();PrivacyCallback();return false">set your cookies.</a></p>',h="#ffffff",u="#333333",t="OK",b="#6faae5",x="#ffffff",o="optin",n=p.createElement("div"),s=p.createElement("div"),c=p.createElement("button");dom_container_button=p.createElement("div");dom_container_text=p.createElement("div");dom_style=p.createElement("style");n.id="footer_tc_privacy";dom_container_button.id="footer_tc_privacy_container_button";dom_container_text.id="footer_tc_privacy_container_text";c.id="footer_tc_privacy_button";s.id="footer_tc_privacy_text";function v(){var z=p.getElementById("footer_tc_privacy");d.removeChild(z)}function w(){var B=typeof tc_privacy_force_domain!=="undefined"?tc_privacy_force_domain:null;var C=[];for(var A=0;A<q.length;A++){C.push(q[A].id);if(q[A].subCategories){for(var z=0;z<q[A].subCategories.length;z++){C.push(q[A].subCategories[z].id)}}}tC.setCookie(tC.privacy.getCN()+"_categories",C.join(","),365,"/",B)}function i(){w();if(o=="optout"){tC.privacy.Out(a,f,"ALL")}else{tC.privacy.In(a,f,"ALL")}v();if(typeof window.tc_closePrivacyButton==="function"){window.tc_closePrivacyButton()}}tC(n).resetCss().css({width:"100%",background:u,position:m?"absolute":"fixed",zIndex:m?"1":"999998",bottom:"0",left:"0",textAlign:"left",opacity:0.9});tC(dom_container_button).resetCss().css({right:"10px",display:"inline-block"});tC(c).resetCss().css({color:x,background:b,display:"block",cursor:"pointer",fontSize:"12px",padding:"5px 10px",margin:"10px 0"});tC(dom_container_text).resetCss().css({display:"inline-block"});tC(s).resetCss().css({color:h,padding:"10px 10px 10px 10px",fontSize:"12px",textAlign:"left"});s.innerHTML=l;c.innerHTML=t;if(c.addEventListener){c.addEventListener("click",function(z){i()},true)}else{if(c.attachEvent){c.attachEvent("onclick",function(z){i()})}}dom_container_button.appendChild(c);dom_container_text.appendChild(s);n.appendChild(dom_container_text);n.appendChild(dom_container_button);d.appendChild(n);if(typeof window.tc_showPrivacy==="function"){window.tc_showPrivacy()}dom_style.type="text/css";var j="#footer_tc_privacy_container_text{width:79%;display:inline-block;}#footer_tc_privacy_container_button,#footer_tc_privacy_container_text{vertical-align:middle;}#footer_tc_privacy_container_button{width:19%;display:inline-block;}#footer_tc_privacy_button{float: right;}@media(min-width: 768px) and (max-width: 979px){#footer_tc_privacy_container_text{width:69%;}#footer_tc_privacy_container_button{width:29%;}}@media(max-width: 767px)   {#footer_tc_privacy_container_text{width:100%;}#footer_tc_privacy_container_button{width:100%;}#footer_tc_privacy_button{margin:0 0 0 0;float: none;width:100%;}}";if(dom_style.styleSheet){dom_style.styleSheet.cssText=j}else{dom_style.appendChild(p.createTextNode(j))}[].map.call(p.querySelectorAll("#footer_tc_privacy"),function(z){var A=z.getAttribute("style");if(!A||typeof A==="undefined"){A=""}if(A.length>0&&A.slice(-1)!=";"){A+=";"}A+="background:none repeat scroll 0 0 rgba(20,16,16,0.8);bottom:0;left:0;position:fixed;width:80%;z-index:100000;margin:0 0 0 10%;";z.setAttribute("style",A)});[].map.call(p.querySelectorAll("#footer_tc_privacy_button"),function(z){var A=z.getAttribute("style");if(!A||typeof A==="undefined"){A=""}if(A.length>0&&A.slice(-1)!=";"){A+=";"}A+="background:none repeat scroll 0 0 #EEEEEE;max-width:40px;border:1px solid #AAAAAA;bottom:21px;cursor:pointer;display:block;font-size:11px;position:absolute;margin:10px 0 10px 0;right:10px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;color:#000000;";z.setAttribute("style",A)});[].map.call(p.querySelectorAll("#footer_tc_privacy_container_text"),function(z){var A=z.getAttribute("style");if(!A||typeof A==="undefined"){A=""}if(A.length>0&&A.slice(-1)!=";"){A+=";"}A+="border:none;background:none;display:inline-block;width:93%;margin:auto;";z.setAttribute("style",A)});[].map.call(p.querySelectorAll("#footer_tc_privacy_container_button"),function(z){var A=z.getAttribute("style");if(!A||typeof A==="undefined"){A=""}if(A.length>0&&A.slice(-1)!=";"){A+=";"}A+="border:none;background:none;display:inline-block;width:7%;";z.setAttribute("style",A)});[].map.call(p.querySelectorAll("p.tc_privacy_text"),function(z){var A=z.getAttribute("style");if(!A||typeof A==="undefined"){A=""}if(A.length>0&&A.slice(-1)!=";"){A+=";"}A+="clear:both;color:#ffffff;font-size:13px;font-weight:normal;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:1.5;display:inline-block;";z.setAttribute("style",A)});[].map.call(p.querySelectorAll("p.tc_privacy_text a:link"),function(z){var A=z.getAttribute("style");if(!A||typeof A==="undefined"){A=""}if(A.length>0&&A.slice(-1)!=";"){A+=";"}A+="color:#FFFFFF;text-decoration:underline;text-transform:initial;";z.setAttribute("style",A)});[].map.call(p.querySelectorAll("p.tc_privacy_text span"),function(z){var A=z.getAttribute("style");if(!A||typeof A==="undefined"){A=""}if(A.length>0&&A.slice(-1)!=";"){A+=";"}A+="float:left;margin:0 10px 0 0;";z.setAttribute("style",A)});var g=p.getElementsByTagName("head")[0];g.appendChild(dom_style)};tC.privacyCenter={};tC.privacyCenter.showPrivacyCenter=function(){var document=tC.privacy.document,container=tC.privacy.getContainer(document),preview=document.getElementById("tc_div_preview"),settings={id:28,version:"005",reactived:"",headerContent:"Ubisoft - Set your cookies.",headerBgColor:"#3A3C4A",headerColor:"#FFFFFF",bodyContent:"When you surf on our website, certain information may be saved to or read from your terminal, based on your choices. ",bodyBgColor:"#333333",bodyColor:"#ffffff",btContent:"OK",btBgColor:"#AAAAAA",btColor:"#ffffff",actionType:"optin",categories:[{id:26,label:"ADS",id_privacy:28,categoryParent:-1,position:0,description:"Do you accept cookies being deposited and read in order to analyse your interests and offer personalised advertisements?",isUsedInTarget:true,subCategories:null,tagsId:[210]},{id:27,label:"ANALYTICS",id_privacy:28,categoryParent:-1,position:1,description:"Do you accept cookies being deposited and read in order to allow us to measure the audience of our website:",isUsedInTarget:true,subCategories:null,tagsId:[212]}],categoriesEnabled:tC.privacy.categories,sizes:{width:2000,height:860},labelBtOn:"On",labelBtOff:"Off",labelYesForAll:"On for all",labelNoForAll:"Off for all",defaultConfig:tC.privacy.cookieData?false:true};tC.privacy.set(settings);tC.unique=function(a){var o={},i,l=a.length,r=[];for(i=0;i<l;i++){o[a[i]]=a[i]}for(i in o){r.push(o[i])}return r};tC.privacy.resize=function(width,height){var overlay=document.getElementById("privacy-overlay"),container=document.getElementById("privacy-container"),iframe=document.getElementById("privacy-iframe"),sizes=tC.privacy.getContainerSizes(),width=width||sizes.width,height=height||sizes.height;tC.privacy.settings.sizes=sizes;overlay.style.width=parseInt(width)+"px";overlay.style.height=parseInt(height)+"px";container.style.width=parseInt(width)+"px";container.style.height=(parseInt(height)-10)+"px";iframe.contentWindow.postMessage(tC.JSON.stringify({type:"resize",width:sizes.width,height:sizes.height}),"*")};tC.privacy.close=function(){document.getElementById("privacy-overlay").style.display="none";document.getElementById("privacy-container").style.display="none";if(typeof window.tc_closePrivacyCenter==="function"){window.tc_closePrivacyCenter()}};tC.privacy.setCat=function(o){var f=typeof tc_privacy_force_domain!=="undefined"?tc_privacy_force_domain:null,tagsId=[];for(var kCat in o.categories){for(var kSettingsCat in this.settings.categories){var settingsCat=this.settings.categories[kSettingsCat];if(settingsCat.id===parseInt(o.categories[kCat])){if(settingsCat.tagsId){tagsId=tagsId.concat(settingsCat.tagsId)}}if(settingsCat.subCategories){for(var kSettingsSubCat in settingsCat.subCategories){var settingsSubCat=settingsCat.subCategories[kSettingsSubCat];if(parseInt(settingsSubCat.id)===parseInt(o.categories[kCat])){if(settingsSubCat.tagsId){tagsId=tagsId.concat(settingsSubCat.tagsId)}}}}}}tC.setCookie(tC.privacy.getCN()+"_categories",o.categories.join(","),365,"/",f);this.In(o.idPrivacy,o.version,tagsId.join("|"));tC.privacy.close();document.getElementById("footer_tc_privacy").style.display="none"};tC.privacy.getContainerSizes=function(){var preview=document.getElementById("tc_div_preview");if(preview){var width=preview.offsetWidth;height=preview.offsetHeight}else{var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName("body")[0],width=w.innerWidth||e.clientWidth||g.clientWidth,height=w.innerHeight||e.clientHeight||g.clientHeight}return{width:width,height:height}};tC.privacy.winResize=function(){if(!tC.privacy.onResize){tC.privacy.onResize=true;setTimeout(function(){tC.privacy.onResize=false;var sizes=tC.privacy.getContainerSizes(),width=sizes.width,height=sizes.height;tC.privacy.resize(width,height)},200)}};tC.privacy.loadedIframe=function(){if(window.addEventListener){window.addEventListener("resize",tC.privacy.winResize,false)}else{window.attachEvent("resize",tC.privacy.winResize)}tC.privacyCenter.showPrivacyCenter()};tC.privacyCenter.showPrivacyCenter=function(){var overlay=document.getElementById("privacy-overlay"),container=document.getElementById("privacy-container");overlay.style.display="block";container.style.display="block";tC.privacy.winResize();if(typeof window.tc_showPrivacyCenter==="function"){window.tc_showPrivacyCenter()}};tC.privacy.initPrivacyCenter=function(){if(tC.privacy.privacyCenterIsInitialized){tC.privacyCenter.showPrivacyCenter()}else{tC.privacy.privacyCenterIsInitialized=true;var overlay=document.createElement("div"),containerIframe=document.createElement("div"),iframe=document.createElement("iframe");overlay.id="privacy-overlay";containerIframe.id="privacy-container";iframe.id="privacy-iframe";tC(overlay).resetCss().css({background:"rgba(0,0,0,0.5)",position:"fixed",width:"100%",height:"100%",top:"0",left:"0",zIndex:preview?"1":"999999",display:"none"});tC(containerIframe).resetCss().css({position:"fixed",width:"100%",height:"100%",top:"0",left:"0",zIndex:preview?"1":"999999",display:"none"});tC(iframe).resetCss().css({width:"100%",height:"100%"});var eventMethod=window.addEventListener?"addEventListener":"attachEvent",eventer=window[eventMethod],messageEvent=eventMethod=="attachEvent"?"onmessage":"message";eventer(messageEvent,function(e){try{tC.log(e.data);var data=typeof e.data!=="object"?tC.JSON.parse(e.data):e.data;var type=data.type||null;if(type=="ready"){tC.privacy.settings.sizes=tC.privacy.getContainerSizes();iframe.contentWindow.postMessage(tC.JSON.stringify({type:"init",data:tC.privacy.settings}),"*");var JsonFromCSS={".modal-content":{color:"#ffffff","font-weight":"normal","font-family":"Verdana, Geneva, Arial, Helvetica, sans-serif"}};iframe.contentWindow.postMessage(tC.JSON.stringify({type:"addCss",JsonFromCSS:JsonFromCSS}),"*")}else{eval(data.js)}}catch(e){}},false);container.appendChild(overlay);containerIframe.appendChild(iframe);container.appendChild(containerIframe);var d=new Date();var n=d.getTime();iframe.src="//cdn.tagcommander.com/privacy/template/index.htm"}};if(typeof JSON!=="object"){tC.script.add("//cdn.tagcommander.com/privacy/template/tC.json.js",function(){tC.privacy.initPrivacyCenter()})}else{tC.JSON=JSON;tC.privacy.initPrivacyCenter()}};tC.privacy.showPrivacyCenter=tC.privacyCenter.showPrivacyCenter;tC.privacy.hitCounter(28);tc_privacy_used=1;tC.privacy.showPrivacy();}