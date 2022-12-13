//tealium universal tag - utag.3520 ut4.0.202207272023, Copyright 2022 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={"id":id};utag.o[loader].sender[id]=u;u.ev={"view":1,"link":1};u.scriptrequested=u.scriptrequested||false;var UDOsAccept=UDOsAccept||['adobemcvid','aam_uuid','lpvid','cid','app_id','app_name','app_version','application_id','customer_id','device','device_orientation','device_os_version','device_resolution','error_code','error_type','event','event_action','event_category','event_content','funnel_name','funnel_step','funnel_step_name','page_category','page_language','page_name','page_subcategory','page_url','product_category','product_id','product_name','product_quantity','product_sku','product_subcategory','product_unit_price','promotion_action','promotion_category','promotion_content','promotion_event','push_notifications','registration_event','visitor_id'];u.map={"vendor_celebrus_collectionurl":"collection_url,celebrus_collection_url,celebrus_page_url","vendor_celebrus_compact":"compact_version,celebrus_compact_version","vendor_celebrus_packet":"packet_version,celebrus_packet_version","vendor_celebrus_sslport":"sslport,celebrus_sslport","vendor_celebrus_udocollection":"udo_collection","vendor_celebrus_doReinit":"doReinit_collection","vendor_celebrus_csaname":"csa_name","page_url":"page_url"};u.extend=[function(a,b){try{if(b['ut.env']=='prod'){b['vendor_celebrus_collectionurl']='www.mcmprod.hsbc.co.uk';b['vendor_celebrus_compact']='3';b['vendor_celebrus_packet']='1';b['vendor_celebrus_sslport']='';b['vendor_celebrus_doReinit']='1';b['vendor_celebrus_udocollection']='1';b['vendor_celebrus_csaname']='csaHSBC';b['vendor_celebrus_doReinit_url_fire']='1'}}catch(e){utag.DB(e);}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){utag.DB("send:3520");utag.DB(b);var c,d,e,f;u.data={"csa_name":"DEFINED IN EXTENSION","page_url":"","compact_version":"DEFINED IN EXTENSION","packet_version":"DEFINED IN EXTENSION","collection_url":"DEFINED IN EXTENSION","sslport":"443"};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){if(typeof utag_err!='undefined'){utag_err.push({e:'extension error:'+e,s:utag.cfg.path+'utag.'+id+'.js',l:c,t:'ex'})}}};utag.DB("send:3520:EXTENSIONS");utag.DB(b);c=[];for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
utag.DB("send:3520:MAPPINGS");utag.DB(u.data);if(!u.data.collection_url){utag.DB(u.id+": Tag not fired: Required attribute not populated [collection_url]");return;}
var csaName=utag.data.vendor_celebrus_csaname=u.data.vendor_celebrus_csaname||u.data.csa_name;var portControl=(typeof b.vendor_celebrus_sslport!="undefined"&&b.vendor_celebrus_sslport!="")?":"+u.data.sslport:"";var endpoint="https://"+u.data.collection_url+portControl;if(!u.scriptrequested){window[csaName+'compatVersion']=u.data.compact_version;window[csaName+'packetVersion']=u.data.packet_version;window[csaName+'useCorsForInitialRequest']="1";window[csaName+'useJsonFormatForInitialCorsRequest']="1";window.CelebrusDataPrivacy={MAY_CONTAIN_PERSONAL_DATA:1,ANONYMOUS_DATA_ONLY:2};window[csaName+'pPO']=function(b,e){window.localStorage&&window.localStorage.setItem(csaName+"P3P",b);var g=new Date;g.setFullYear(g.getFullYear()+20);window[csaName+'SC'](csaName+"P3P="+b,g.toGMTString());e&&window[csaName+'SC'](csaName+"P3P="+b,g.toGMTString(),"","","","",e,!1);"optedOut"==b&&window[csaName+'stopEvents']&&window[csaName+'stopEvents']();window[csaName+'doReInit']?window[csaName+'doReInit']():window[csaName+'Go']&&!window[csaName+'wid']&&[csaName+'Go']()};window[csaName+'optOut']=function(b){window[csaName+'pPO']("optedOut",b)};window[csaName+'optIn']=function(b){window[csaName+'pPO']("optedIn",b)};window[csaName+'anonymous']=function(b){window[csaName+'pPO']("anonymous",b)};window[csaName+'sessionShutdownPeriodExceeded']=function(){var b=!1,b=document.cookie?-1<document.cookie.indexOf(csaName+"SF="):null!=window.sessionStorage.getItem(csaName+"SF");if(!b)
return!1;b=window[csaName+'findCookieVal'](csaName+"SF");b=parseInt(b,10);return-1==b||isNaN(b)?!1:Math.abs((new Date).valueOf()-b)>10800000?!0:!1};function periodicAssessShutdownState(){window[csaName+'findCookieVal'](csaName+"SF")&&(window[csaName+'sessionShutdownPeriodExceeded']()?(window[csaName+'doDeleteCookie']&&window[csaName+'doDeleteCookie'](csaName+"SF"),window[csaName+'lstActv']=(new Date).valueOf(),window[csaName+'qNI']=!0,window[csaName+'findCookieVal'](csaName+"P3P",1),window[csaName+'resetCSA']&&window[csaName+'resetCSA'](),window[csaName+'executeReInitNow']&&window[csaName+'executeReInitNow()']):window.setTimeout(window[csaName+"periodicAssessShutdownState"],1E4))};var GL=-1==document.cookie.indexOf(csaName+"SF=")&&-1==document.cookie.indexOf(csaName+"StopFlag=y")&&-2!=window[csaName+'sn'];window[csaName+'pendingManualEvents']||(window[csaName+'pendingManualEvents']=[]);window[csaName+'queuedYoutubeReferences']||(window[csaName+'queuedYoutubeReferences']=[]);window[csaName+'sn']||(window[csaName+'event']=function(b){window[csaName+'pendingManualEvents'].push({eventTypeIdentifier:"basket",payload:b})},window[csaName+'click']=function(b){b&&window[csaName+'pendingManualEvents'].push({eventTypeIdentifier:"click",payload:b})},window[csaName+'textchange']=function(b){b&&window[csaName+'pendingManualEvents'].push({eventTypeIdentifier:"textchange",payload:b})},window[csaName+'formsubmit']=function(b){window[csaName+'pendingManualEvents'].push({eventTypeIdentifier:"formsubmit",payload:b})},window[csaName+'SendJsonData']=function(b,e){window[csaName+'pendingManualEvents'].push({eventTypeIdentifier:"jsondata",payload:b,dataPrivacyVal:e})},window[csaName+'trackYouTubeIframePlayer']=function(b,e){window[csaName+'queuedYoutubeReferences'].push({playerRef:b,playerIdentifier:e})});window[csaName+'initialExecutionCanProceed']=function(){return 1==GL?window[csaName+'windowID']?!1:!0:!1};window[csaName+'blockExecutionForInsertAlreadyPresent']=function(){return window[csaName+'getSD']?!0:!1};window[csaName+'SL']=function(){function b(){l[csaName+'windowID']="_"+(new Date).getTime()+"0."+window[csaName+'generateUUID']()+"_";var a=window[csaName+'findCookieVal'](csaName+"session"),c=window[csaName+'findCookieVal'](csaName+"persisted"),b=window[csaName+'findCookieVal']("usy46gabsosd"),d,h,f,e,m,g=!1,p=!1;b&&(g=!0);a&&(p=!0);var k=a?a.split("_"):null;if(k&&5==k.length)
d="x"+k[0]+"_"+k[3],h=k[1],f=k[2],e=k[3],m=k[4],A=e,B=d;else{for(d=""+Math.floor(9999*Math.random()+1);4>d.length;)
d="0"+d;b&&(d=A,e=window[csaName+'findCookieVal']("usy46gabsosd"))&&(k=e.lastIndexOf("_"),-1!=k&&(e=e.substring(k+1),d=4==e.length&&e.match(W)?e:d));A=d;B=l[csaName+'windowID']+A;try{l.top.name||(l.top.name=l[csaName+'windowID'])}catch(q){}
d=B;e=A}
return{sessionInfo:d,lastActivityTS:h,sessionStartTS:f,loadBalancerID:e,sessionKey:m,sessionCookieVal:a,persistedCookieVal:c,legacyCookieVal:b,foundLegacyCookie:g,foundSessionCookie:p}}
function e(){var a=window[csaName+'findCookieVal'](csaName+"persisted");if(a){var c=a.split("_");return 7!=c.length?null:{dbID:c[0],rtID:c[1],udID:c[2],acqTS:c[3],recSN:c[4],recTS:c[5],frq:c[6],cookieVal:a}}
return null}
function g(){if(G){var a="_";G.dbID&&(a=G.dbID+a);G.rtID&&(a+=G.rtID);return a}
return window[csaName+'findCookieVal'](csaName+"DBID",1)}
function k(){return r&&r.sessionKey?r.sessionKey:window[csaName+'findCookieVal'](csaName+"key")}
function h(a){return J?(a=J(a),a=a.replace(/'/g,"%27"),a=a.replace(/~/g,"%7E")):escape(a)}
function p(a){return"https:"==(""+location.protocol).toLowerCase()||1==l[csaName+'ForceSecure']?csaName+"ssl"+a:csaName+"tcp"+a}
function m(a){a=p(a);try{if(l.sessionStorage){var c=l.sessionStorage.getItem(a);if(c)
return""+c}}catch(b){}
return""}
function q(a,c){var b=p(a);try{l.sessionStorage&&l.sessionStorage.setItem(b,c)}catch(d){}}
function f(a){try{var c=m(a),b=parseInt(c);return isNaN(b)?0:b}catch(d){return 0}}
function u(){return f("lastQueuePointer")}
function y(a){try{var c=parseInt(m(a));isNaN(c)&&(c=0);49==c?c=0:c++;q(a,""+c)}catch(b){}}
function w(){var a=f("lastProcessPointer"),c=u();a<c&&y("lastProcessPointer")}
function v(){var a=u();m(a)&&y("lastQueuePointer")}
function t(){var a=f("lastProcessPointer"),c="";try{c=m(a)}catch(b){}
try{var V=p(a);try{l.sessionStorage&&l.sessionStorage.removeItem(V)}catch(b){}}catch(b){}
return c}
function z(a){a=a.replace(/&/g,"+");a=a.replace(/%/g,"q");a=a.replace(/(..)(..)/g,"$2$1");a=a.replace(/(........)(.....)/g,"$2$1");var c=g(),b=k();b&&(c+="_"+b);return a="z="+h(c)+"&y="+a}
function K(a,c){return a?-1!==a.indexOf(c,a.length-c.length):!1}
function L(a){function c(){w();d()}
function b(){w();d()}
function d(){var d=t();if(d)
if(0==d.indexOf("reinit:"))
c();else{window.CelebrusLoggingUtils&&window.CelebrusLoggingUtils.logEventQueued(d);var e;var h=S;try{var f=endpoint;K(d,":http")&&(f=endpoint);var f=f+"/"+A+"/",d=z(d),k="ZDY21YGC90LI/uw2jde932.bmp?";h&&(k="1"==window[csaName+'useJsonFormatForInitialCorsRequest']?"AEZ32ZHD01MJ/jsEvent.json?":"AEZ32ZHD01MJ/jsEvent.js?");e=f+k+d}catch(m){e=null}
if(e)
if(S)
T(e,c,b);else{null==l[csaName+'sImgArr'][0]&&(l[csaName+'sImgArr'][0]=new Image,d=l[csaName+'sImgArr'][0],d.attachEvent?d.attachEvent("onload",c):d.addEventListener&&d.addEventListener("load",c,!1),d=l[csaName+'sImgArr'][0],h=b,d.attachEvent?d.attachEvent("onerror",h):d.addEventListener&&d.addEventListener("error",h,!1));try{l[csaName+'sImgArr'][0].src=e}catch(m){b()}}
else
b()}
else
a()}
l[csaName+'sImgArr']=[];d()}
function M(a,c,b,d){return(c=window[csaName+'findCookieVal'](a))?a+"="+c:""}
function N(a,c){""!=c&&(""!=a&&(a+="; "),a+=c);return a}
function D(){if("function"==typeof XMLHttpRequest||"object"==typeof XMLHttpRequest){var a=new XMLHttpRequest;return"1"==window[csaName+'useCorsForInitialRequest']&&"withCredentials"in a}
return!1}
function T(a,c,b){var d=a.indexOf("?"),e="",h="";-1==d?e=a:(e=a.substring(0,d),h=a.substring(d+1));var f=new XMLHttpRequest;f.open("POST",e,!0);f.withCredentials=!0;f.setRequestHeader("Content-Type","text/plain;charset=UTF-8");c&&(f.onload=function(){c(f)});b&&(f.onerror=function(){b(f)});try{f.send(h)}catch(k){}}
if(!window[csaName+'blockExecutionForInsertAlreadyPresent']()){var l=window,H=document,X=location,U=H.cookie,A="",B="",W=/^[a-z0-9]+$/i;l[csaName+'LF']=!0;l[csaName+'TCP']=endpoint;l[csaName+'SSL']=endpoint;l[csaName+'gPr']=function(a){var c=(""+X.protocol).toLowerCase();if("https:"==c)
return endpoint;a||(a=c);1==l[csaName+'ForceSecure']&&(a="https:");return"http:"==a||"http"==a?endpoint:endpoint};window[csaName+'clearStoppedState']=function(){window[csaName+'doDeleteCookie']&&window[csaName+'doDeleteCookie'](csaName+"SF")};window[csaName+'stop']=function(){window[csaName+'deleteSessionCookie']&&window[csaName+'deleteSessionCookie']();if(document.cookie)
window[csaName+'SC']&&window[csaName+'doDeleteCookie'](csaName+"key");else
try{window.sessionStorage&&window.sessionStorage.removeItem(csaName+"key")}catch(a){}
window[csaName+'oTP']=!1;window[csaName+'SC']&&window[csaName+'SC'](csaName+"SF="+(new Date).valueOf())};var E=window.crypto||window.msCrypto;window[csaName+'generateUUID']=function(){return"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx".replace(/[x]/g,function(a){return(16*Math.random()|0).toString(16)})};"undefined"!=typeof E&&"undefined"!=typeof E.getRandomValues&&(window[csaName+'generateUUID']=function(){var a=new Uint16Array(8);E.getRandomValues(a);var c=function(c){for(c=c.toString(16);4>c.length;)
c="0"+c;return c};return""+c(a[0])+c(a[1])+c(a[2])+c(a[3])+c(a[4])+c(a[5])+c(a[6])+c(a[7])});var J=l.encodeURIComponent,r="",G="";window[csaName+'cookieList']=[];l[csaName+'gC']=function(a){var c=("usy46gabsosd "+csaName+"uvt "+csaName+"DBID "+csaName+"key "+csaName+"session "+csaName+"persisted "+csaName+"P3P").split(" "),b="";if(false){for(var d=document.cookie,e=0;e<c.length;e++){var f=M(c[e],a);f&&(b=N(b,f),d=-1<d.indexOf(f+"; ")?d.replace(f+"; ",""):-1<d.indexOf(f+";")?d.replace(f+";",""):d.replace(f,""))}
return{celebrusCookies:b,siteCookies:d}}
c=("usy46gabsosd "+csaName+"uvt "+csaName+"DBID "+csaName+"key "+csaName+"session "+csaName+"persisted "+csaName+"P3P").split(" ");for(e=0;e<c.length;e++)
(f=M(c[e],a))&&(b=N(b,f));c="";if(0<window[csaName+'cookieList'].length)
for(d=0,e=window[csaName+'cookieList'].length;d<e;d++)
(f=M(window[csaName+'cookieList'][d],a))&&(c=N(c,f));return{celebrusCookies:b,siteCookies:c}};l[csaName+'ae']=function(){l[csaName+'wid']||((new Date).valueOf()-l[csaName+'Tm']>30000?0===l.frames.length&&window[csaName+'doDeleteCookie']&&(window[csaName+'doDeleteCookie']("usy46gabsosd"),window[csaName+'doDeleteCookie'](csaName+"session"),l[csaName+'SC'](csaName+"SF="+(new Date).valueOf()),periodicAssessShutdownState()):l.setTimeout(l[csaName+'ae'],2E3))};l[csaName+'client_event']=function(a,c){if(!(-1<document.cookie.indexOf(csaName+"SF="))){var b=window;b[csaName+'queueUserEvent']?b[csaName+'queueUserEvent'](a,c):b.setTimeout(window[csaName+'client_event']('"'+a+'"','"'+c+'"'),500)}};l[csaName+'GP']=function(a){return null};l[csaName+'GPWID']=function(a){return a[csaName+'windowID']};l[csaName+'executeJsonResponse']=function(a){a=JSON.parse(a);var c=window[csaName+'wid'],b=a.windowVariables,d;for(d in b)
0===d.indexOf(csaName)&&(window[d]=csaName+"uSC"==d||csaName+"useCors"==d||csaName+"doCapture"==d||csaName+"lookups"==d||csaName+"useJsonFormatRequest"==d?"true"==b[d]:csaName+"idl"==d||csaName+"sST"==d||csaName+"mST"==d?parseInt(b[d],10):b[d]);if(d=a.queueNavigatorInfo)
window[csaName+'qNI']=d;if(a.isExcludedFromSample&&setShutdown)
setShutdown();else{(d=a.isMinimalCookieFormat)?(window[csaName+'deleteLegacyCookies']&&window[csaName+'deleteLegacyCookies'](),sessionset(a.sessionCookieValue)):(legacyset(a.sn,a.lastActivityTs,a.sessionStartTs,a.lbId),keyset(a.sessionKey));window[csaName+'doCelebrusInsertInvocation']&&window[csaName+'doCelebrusInsertInvocation'](c);if(c=a.persistedCookieValues)
d?persisted(c.dbID,c.rtId,c.acq,c.sn,c.cookieName,c.cookieExpiry,c.frq,c.acqTS,c.recTS,c.trackDevices):(c.trackDevices?uvt(c.acq,c.sn,c.cookieExpiry,c.acqTS,c.recTS):window[csaName+'doDeleteCookie']&&window[csaName+'doDeleteCookie'](csaName+"uvt"),window[csaName+'doDeleteCookie']&&window[csaName+'doDeleteCookie'](csaName+"DBID"),DBIDset(c.dbID+"_"+c.rtId,c.cookieExpiry));if(a.contentResponse&&window[csaName+'RTEHandler']){c=[];try{c=JSON.parse(a.contentResponse)}catch(f){}
try{window[csaName+'RTEHandler'].handleResponse(c)}catch(f){}}}};l[csaName+'dynamicCreateScript']=function(a,c,b){var d=document;if(d.getElementById){var f=d.getElementsByTagName("head").item(0);f&&(d=d.createElement("SCRIPT"),d.type="text/javascript",d.id=a,c&&(d.src=c),b&&(d.text=b),f.appendChild(d))}};l[csaName+'LC']=function(b,c){csaName+"csaId"!=c&&D()?T(b,function(b){200===b.status&&(b=b.responseText,D()&&"1"==window[csaName+'useJsonFormatForInitialCorsRequest']?b&&window[csaName+'executeJsonResponse'](b):window[csaName+'dynamicCreateScript'](c,"",b))},null):window[csaName+'dynamicCreateScript'](c,b,"")};var S=window.sessionStorage&&D();l[csaName+'GP']=function(b){try{return b===b.parent?null:b.parent}catch(c){}
return null};l[csaName+'TWID']="AUTOSET";window[csaName+'resetCSA']=function(){window[csaName+'doResetCSA']&&window[csaName+'doResetCSA']()};window[csaName+'doReInit']=function(b){try{var c=window.sessionStorage?!0:!1;c&&window[csaName+'sessionStorageEnabled']&&(c=window[csaName+'sessionStorageEnabled']());if(c&&window[csaName+'oTP']){v();var f=u(),c="",c=m(f);c||(q(f,"reinit:"+window[csaName+'windowID']+(b?":1":":0")),v())}else
window[csaName+'executeReInitNow']&&window[csaName+'executeReInitNow']()}catch(d){}};window[csaName+'executeReInitNow']=function(b){window[csaName+'clearStoppedState']&&window[csaName+'clearStoppedState']();l[csaName+'lstActv']=(new Date).valueOf();window[csaName+'findCookieVal'](csaName+"P3P",1);window[csaName+'resetCSA']&&window[csaName+'resetCSA']();b&&(window[csaName+'deleteSessionCookie']&&window[csaName+'deleteSessionCookie'](),v());window[csaName+'getSD']&&window[csaName+'getSD'](document.body,window,document,navigator)};window[csaName+'tmoPoll']=function(){var b=l[csaName+'lstActv'],c=l[csaName+'idl'],f=(new Date).valueOf();-1!=b&&f-b>c&&window[csaName+'doReInit']&&window[csaName+'doReInit']();window.setTimeout(window[csaName+'tmoPoll'],1E4)};0===window.location.href.indexOf("file://")&&window[csaName+'tmoPoll']();window[csaName+'jsInsertAlreadyLoaded']=!1;l[csaName+'getSD']=function(a,c,f){function d(b,c,a){if(!c&&0!==c&&!1!==c)
return a;c=h(c);a.length+b.length+c.length<=F&&(a=a+b+c);return a}
function l(b,c,a,d,f,e,h){return b.length+a.length+d.length+f.length+c.length+e.length+h.length+3+20<=F?!0:!1}
function m(b,c){try{b||(b="");var a=b.split("_");if(5>a.length){var d=(new Date).valueOf();return c.sessionNumber+"_"+d+"_"+d+"_"+c.loadBalancerId+"_"+c.sessionKey}
a[0]=c.sessionNumber;a[3]=c.loadBalancerId;a[4]=c.sessionKey;return a.join("_")}catch(f){return b}}
function p(b){var a="",a=D()&&"1"==window[csaName+'useJsonFormatForInitialCorsRequest']?""+b+"/"+A+"/handler9/session.json?":""+b+"/"+A+"/handler9/session.js?";b=k();window[csaName+'appSessionObject']?((b=window[csaName+'appSessionObject'])&&r&&(r.sessionInfo="x"+b.sessionNumber+"_"+b.loadBalancerId,r.loadBalancerID=b.loadBalancerId,r.sessionKey=b.sessionKey,r.sessionCookieVal=m(r.sessionCookieVal,b),persistedValFromAppComponents=b.uvt.split("="),2==persistedValFromAppComponents.length&&(r.persistedCookieVal=persistedValFromAppComponents[1]),A=r.loadBalancerID,B=r.sessionInfo),a=d("se=",r.sessionInfo,a),a=d("&wf=",r.sessionCookieVal,a),a=d("&wg=",r.persistedCookieVal,a),a=d("&tz=",r.sessionKey,a)):(a=r&&r.foundSessionCookie&&!r.foundLegacyCookie?d("se=",r.sessionInfo,a):d("se=",B,a),a=d("&wf=",r.sessionCookieVal,a),a=d("&wg=",r.persistedCookieVal,a),a=d("&di=",g(),a),a=d("&tz=",b,a));var e;a:{if(window[csaName+'appSessionObject'])
try{e=window[csaName+'AppBridge'].getConsent("1");break a}catch(q){}
e=window[csaName+'findCookieVal'](csaName+"P3P",1)}
a=d("&us=",e,a);a=d("&sj=",csaName,a);a=d("&aP=",c[csaName+'windowID'],a);a=d("&bd=",navigator.cookieEnabled,a);a=d("&si=",navigator.javaEnabled(),a);a=d("&aM=",R(c),a);b=M();-2<b&&(a=d("&aO=",""+b,a));a=d("&vb=",c[csaName+'compatVersion'],a);a=d("&wa=","8.18.18460",a);try{a=c.top.name?d("&aW=",c.top.name,a):d("&aW=",c[csaName+'windowID'],a)}catch(q){}
b="not_available";try{b=c==c.top}catch(q){}
a=d("&bu=",b,a);b=c[csaName+'gC'](U);if(window[csaName+'appSessionObject']){for(var n=b.celebrusCookies.split("; "),x=!1,t=!1,w=!1,u=0,Y=n.length;u<Y;u++){var v=n[u].split("=");2==v.length&&(csaName+"session"==v[0]||"usy46gabsosd"==v[0]?(n[u]=csaName+"session="+m(v[1],window[csaName+'appSessionObject']),x=!0):csaName+"persisted"==v[0]?(n[u]=window[csaName+'appSessionObject'].uvt,t=!0):csaName+"P3P"==v[0]&&(n[u]=csaName+"P3P="+e,w=!0))}
x||(n[n.length]=m("",window[csaName+'appSessionObject']));t||(n[n.length]=window[csaName+'appSessionObject'].uvt);w||(n[n.length]=csaName+"P3P="+e);e=n.join("; ");b.celebrusCookies=e}
x=b.siteCookies;e=h(b.celebrusCookies);if(a.length<F){n=[];n[0]=f.title;n[1]=x;n[2]=f.referrer;n[3]=location.href;(n[4]=c[csaName+'PageID'])||0===c[csaName+'PageID']||(n[4]="");for(t=x=!1;!l(a,h(n[0]),h(n[1]),h(n[2]),h(n[3]),h(n[4]),e)&&!x;)
x=0,h(n[1]).length>h(n[x]).length&&(x=1),h(n[2]).length>h(n[x]).length&&(x=2),h(n[3]).length>h(n[x]).length&&(x=3),h(n[4]).length>h(n[x]).length&&(x=4),n[x]=n[x].substring(0,Math.min(n[x].length/2,F-a.length-20)),t=!0,x=0===n[0].length&&0===n[1].length&&0===n[2].length&&0===n[3].length&&0===n[4].length;a=d("&cf=",n[0],a);a=d("&az=",b.celebrusCookies+"; "+n[1],a);a=d("&ar=",n[2],a);a=d("&au=",n[3],a);a=d("&sg=",n[4],a);t&&(a=d("&ic=","true",a))}
return a}
function q(){for(var a=t(),b=0;a&&50>b;)
if(0==a.indexOf("reinit:"))
a=t(),b++;else
return a;return null}
function u(){var a,b;if(b=q()){K(b,":https")&&!I&&(I=!0,C=O);w();window.CelebrusLoggingUtils&&window.CelebrusLoggingUtils.logEventQueued(strEvt);a="";for(var c=0;b&&50>c;){a="";for(var d=z(b),f=0;b&&a.length+d.length<F&&50>f;)
a=a+d+"&a=2",b=q(),K(b,":https")&&!I&&(I=!0,C=O),b&&(w(),d=z(b)),f++;b&&(d=endpoint,I||(d=endpoint),resourcePath="1"==window[csaName+'useJsonFormatForInitialCorsRequest']?"/AEZ32ZHD01MJ/jsEvent.json?":"/AEZ32ZHD01MJ/jsEvent.js?",d=d+resourcePath+"z="+
a.substring(4),T(d));c++}
window[csaName+'LC'](C+"&ipe="+a,csaName+"loadPageId")}else
window[csaName+'LC'](C,csaName+"loadPageId")}
function v(a,b){D()&&"1"==window[csaName+'useJsonFormatForInitialCorsRequest']?a&&window[csaName+'executeJsonResponse'](a):window[csaName+'dynamicCreateScript'](b,"",a)}
function y(a,b,d,e,h,k,l,m){E=window[csaName+'gPr']();(a=f.cookie)||(a="");if(""==a&&window.sessionStorage){try{(a=window.sessionStorage.getItem("usy46gabsosd"))||(a="");d=b="";window.localStorage&&(b=window.localStorage.getItem(csaName+"DBID"),d=window.localStorage.getItem(csaName+"uvt"));var g=window.sessionStorage.getItem(csaName+"key");a=a?"usy46gabsosd="+a:"";b&&(a+="; "+csaName+"DBID="+b);d&&(a+="; "+csaName+"uvt="+d);g&&(a+="; "+csaName+"key="+g)}catch(q){}
U=a}
a.length>P&&a.substring(0,P);if(r.foundLegacyCookie||r.foundSessionCookie)
r.foundLegacyCookie&&!r.sessionCookieVal&&(b=a.indexOf("usy46gabsosd"),g=a.indexOf(";",b),-1==g&&(g=a.length),g=a.substring(b,g),d=csaName+"__",e=g.indexOf(d),-1<e?(b=g.indexOf("::",e),0>b&&(b=g.indexOf(";",e)),0>b&&(b=g.length),B="x"+g.substring(e+d.length,b)):(d=csaName+"_",e=g.indexOf(d),-1<e?(e+=d.length-1,b=g.indexOf("::",e),0>b&&(b=g.indexOf(";",e)),0>b&&(b=g.length),B=g.substring(e,b)):(g=a.indexOf("usy46gabsosd="),b=a.indexOf(";",g),0>b&&(b=a.length),B=c[csaName+'windowID']+A,c[csaName+'SC'](a.substring(g,b)+"::"+csaName+c[csaName+'windowID']+A))));else{c[csaName+'SC']("usy46gabsosd="+csaName+c[csaName+'windowID']+A);B=c[csaName+'windowID']+A;try{c.top.name||(c.top.name=c[csaName+'windowID'])}catch(q){}}
J=p(endpoint);O=p(endpoint);C=I?O:J;!c[csaName+'SF']&&C.length<=F&&(window.CelebrusLoggingUtils&&window.CelebrusLoggingUtils.logConfigurationSent(C),D()?window[csaName+'sendScriptRequests'](C,E,u,v):window[csaName+'sendScriptRequests'](C,E,"",v));c[csaName+'ae']()}
function M(a,b,d){if(Q){a=Q(c);try{if(!a||!a.frames)
return-1;b=a.frames;for(d=0;d<b.length;d++)
if(b[d]==c)
return d}catch(e){}}
return-1}
window[csaName+'appSessionObject']="";if(window[csaName+'AppBridge'])
try{var N=window[csaName+'findCookieVal'](csaName+"persisted"),H=window[csaName+'AppBridge'].isEventForwardingAllowed(location.href,N);H&&(window[csaName+'appSessionObject']=JSON.parse(H))}catch(Z){window[csaName+'appSessionObject']=""}
r=b();G=e();var F=1940,P=1024,C="",E="",O="",J="";D()&&(F=51200,P*=4);var I=endpoint==window[csaName+'gPr']();c[csaName+'GPWID']=function(a,b){if(!Q)
return"not_available";(b=Q(a))||(b=a);try{return b[csaName+'windowID']}catch(c){return"not_available"}};var Q=c[csaName+'GP'],R=c[csaName+'GPWID'];c[csaName+'Tm']=(new Date).valueOf();S?y():L(y)};var R=window[csaName+'initialExecutionCanProceed']();!R&&window[csaName+'findCookieVal'](csaName+"SF")?window[csaName+'periodicAssessShutdownState']():(R||window.SpeedTrapComponent)&&l[csaName+'getSD'](H.body,l,H)}};window[csaName+'sendScriptRequests']=function(b,e,g,k){window.CelebrusLoggingUtils&&window.CelebrusLoggingUtils.isDryRun()?window.CelebrusLoggingUtils.executeResponseForDryRun():(window[csaName+'appSessionObject']&&k?(b=window[csaName+'AppBridge'].getJsResponse(b,!0,"1"==window[csaName+'useJsonFormatForInitialCorsRequest']),k(b,csaName+"loadPageId")):window.sessionStorage&&g?g():window[csaName+'LC'](b,csaName+"loadPageId"),window[csaName+'jsInsertAlreadyLoaded']||(window[csaName+'LC'](""+e+"/JavascriptInsert.js",csaName+"csaId"),window[csaName+'jsInsertAlreadyLoaded']=!0))};window[csaName+'cookieAllowsScriptToProceed']=function(b){return-1<b.indexOf(csaName+"SF=")?!1:!0};function Go(){function b(b){e&&(window[csaName+'SL']&&window[csaName+'SL'](),e=!1)}
var e=!1;"prerender"==document.webkitVisibilityState||document.hidden?(e=!0,document.addEventListener&&(document.addEventListener("webkitvisibilitychange",b,!1),document.addEventListener("visibilitychange",b,!1))):window[csaName+'SL']&&window[csaName+'SL']()}
window[csaName+'SC']||(window[csaName+'SC']=function(b,e,g,k,h,p,m,q){var f=document,u=window;k=b+"; path=/;";var y=b.split("=");if(u[csaName+'uSC']){if("https:"!=location.protocol)
return;k+=" secure;"}
var w=k;e&&(k=k+"expires="+e);";"==k.charAt(k.length-1)&&(k=k.substring(0,k.length-1));u[csaName+'GD']&&(f.cookie=k+u[csaName+'GD']());if(q||!(-1<f.cookie.indexOf(b))||e)
if(g=location.hostname,h=g.split("."),m)
f.cookie=k+";domain="+m;else{if(2<=h.length){p=h.length-2;m="."+h[p+1];do
if(m="."+h[p]+m,f.cookie=k+"; domain="+m,p--,q)
try{if(-1==document.cookie.indexOf(y[0]+"="))
return}catch(t){}
while((q&&-1<f.cookie.indexOf(y[0]+"=")||!q&&-1==f.cookie.indexOf(b))&&0<=p);if(!q&&-1==f.cookie.indexOf(b)&&w)
for(p=h.length-2,m="."+h[p+1];-1==f.cookie.indexOf(b)&&0<=p;)
m="."+h[p]+m,f.cookie=w+" domain="+m,p--}
0!==location.href.indexOf("file://")&&(q&&-1<f.cookie.indexOf(b)||!q&&-1==f.cookie.indexOf(b))&&(q?(g=new Date,g.setFullYear(1970),f.cookie=w+" domain="+location.hostname+"; expires="+g.toGMTString()):f.cookie=w+" domain="+location.hostname);if(!q&&-1==f.cookie.indexOf(b)||q&&-1<f.cookie.indexOf(b)&&!u[csaName+'uSC']){b=b.split("=");try{var v=window.sessionStorage;e&&(v=window.localStorage);v&&(b[1]&&-1<b[1].indexOf(";")&&(b[1]=b[1].substring(0,b[1].indexOf(";"))),q?v.removeItem(b[0]):v.setItem(b[0],b[1]));return}catch(t){}
u[csaName+'SF']=1}}});window[csaName+'findCookieVal']=function(b,e){if(document.cookie)
for(var g=document.cookie.split("; "),k=0;k<g.length;k++){var h=g[k].split("=");try{if(h[0]==b)
return h[1]}catch(m){}}
g="";try{var p=window.sessionStorage;if(e||csaName+"uvt"==b||csaName+"DBID"==b||csaName+"persisted"==b)
p=window.localStorage;p&&(g=p.getItem(b))}catch(m){}
return g};window[csaName+'deleteLegacyCookies']=function(){var b=!0,e=window[csaName+'findCookieVal']("usy46gabsosd",!1);e&&1<e.split("::").length&&(b=!1);if(document.cookie)
window[csaName+'SC']&&(b&&window[csaName+'doDeleteCookie']("usy46gabsosd"),window[csaName+'doDeleteCookie'](csaName+"uvt"),window[csaName+'doDeleteCookie'](csaName+"key"),window[csaName+'doDeleteCookie'](csaName+"DBID"));else
try{window.sessionStorage&&(b&&window.sessionStorage.removeItem("usy46gabsosd"),window.sessionStorage.removeItem(csaName+"key")),window.localStorage&&(window.localStorage.removeItem(csaName+"uvt"),window.localStorage.removeItem(csaName+"DBID"))}catch(g){}};window[csaName+'doDeleteCookie']=function(b,e){var g=new Date;g.setFullYear(1970);window[csaName+'SC']&&window[csaName+'SC'](b+"=0",g.toGMTString(),"","","","",e,!0)};function sessionset(b){window[csaName+'SC'](csaName+"session="+b)}
function persisted(b,e,g,k,h,p,m,q,f,u){var y=new Date,w,v=0,t;a:{var z=document.cookie;""==z&&window.localStorage&&(z=(z=window.localStorage.getItem(csaName+"persisted"))?csaName+"persisted="+z:"");z=z.split("; ");t=0;for(var K=z.length;t<K;t++){var L=z[t].split("=");if(1<L.length&&h==L[0]){t=unescape(L[1]);break a}}
t=null}
m&&(v=m);z=!0;t&&(t=t.split("_"),7<=t.length&&(k==t[4]&&(z=!1),t[2]&&(w=t[2],q=t[3],v=t[6])));z&&(m||v++);w||(w=g);y.setTime(y.getTime()+p);u?window[csaName+'SC'](h+"="+
b+"_"+e+"_"+w+"_"+q+"_"+k+"_"+f+"_"+v,y.toGMTString()):window[csaName+'SC'](h+"="+b+"_"+e+"_____",y.toGMTString())}
function legacyset(b,e,g,k){var h=window,p=document.cookie;h[csaName+'GD']&&h[csaName+'GD']();var m=p.indexOf("usy46gabsosd"),q="";if(-1==m)
window[csaName+'SC']&&window[csaName+'SC']("usy46gabsosd="+csaName+"__"+b+"_"+e+"_"+g+k);else{var q=p.indexOf(";",m),f=h="";0>q&&(q=p.length);p=p.substring(m+12+1,q);m=p.indexOf(csaName);-1<m?(h=p.substring(0,m),""!=h&&(h="::"+h),m=p.indexOf("::",m),-1<m&&(f=""==h?p.substring(m):p.substring(m+2))):h="::"+p;q="usy46gabsosd="+csaName+"__"+b+"_"+e+"_"+g+
k;""!=h&&(q+=h);""!=f&&(q+=f);window[csaName+'SC']&&window[csaName+'SC'](q)}}
function keyset(b,e){window[csaName+'SC'](csaName+"key="+b)}
function DBIDset(b,e){var g=new Date;g.setTime(g.getTime()+e);window[csaName+'SC'](csaName+"DBID="+b,g.toGMTString())}
function uvt(b,e,g,k,h){var p=new Date,m,q=0,f;a:{f=document.cookie;""==f&&window.localStorage&&(f=(f=window.localStorage.getItem(csaName+"uvt"))?csaName+"uvt="+f:"");f=f.split("; ");for(var u=0,y=f.length;u<y;u++){var w=f[u].split("=");if(1<w.length&&csaName+"uvt"==w[0]){f=unescape(w[1]);break a}}
f=null}
if(f&&(f=f.split("_"),5<=f.length)){if(e==f[2])
return;m=f[0];k=f[1];q=f[4]}
q++;m||(m=b);p.setTime(p.getTime()+g);window[csaName+'SC'](csaName+"uvt="+m+"_"+k+"_"+e+"_"+h+"_"+q,p.toGMTString())}
function setShutdown(){window[csaName+'deleteSessionCookie']&&window[csaName+'deleteSessionCookie']();var b=(new Date).valueOf();if(window[csaName+'GD']){var e=window[csaName+'GD']();document.cookie=csaName+"SF="+b+";path=/"+e}else
window[csaName+'SC']&&window[csaName+'SC'](csaName+"SF="+b)}
Go();window[csaName+'RTEHandler']={maxWaitDurationMillis:1E4,maxActionProcessDurationMillisToAllowRequeue:50,targetMissingPollingDurationMillis:250,domContentReadyPollingDurationMillis:100,injectionCount:0,staleCount:0,rejectedCount:0,errorCount:0,nameVal:"RTEHandler",currentActionID:"",currentRuleID:"",currentContentID:"",currentCustomID:"",queue:[],isDomContentReady:function(){var a=document.getElementsByTagName("body");return a&&0!==a.length?"complete"==document.readyState||"loaded"==document.readyState||"interactive"==document.readyState?!0:!1:!1},reset:function(){this.queue=[];this.errorCount=this.rejectedCount=this.staleCount=this.injectionCount=0},getTimestampMillis:function(){return(new Date).getTime()},handleResponse:function(a,c){if(!a||!a.length||!c&&-1<document.cookie.indexOf(csaName+"SF=y"))
return 0;var b=this.getTimestampMillis(),d,e,f;d=0;for(e=a.length;d<e;d++){f=a[d];try{f.queueTimestampMillis=b;if(f.content&&(f.content=this.doUnescape(f.content),f.parsedContent=this.parseContent(f.content),!f.parsedContent)){this.rejectedCount++;continue}
f.externalContentId&&(f.externalContentId=this.doUnescape(f.externalContentId));f.replacementurl&&(f.replacementurl=this.doUnescape(f.replacementurl));f.idValue&&(f.idValue=this.doUnescape(f.idValue));this.validVariables(f.csaNumber,f.contentKey)?f.csaCallbackTime?this.doCallback(f):this.queueAction(f):this.distributeActionToChildCsas(f)||this.queueAction(f)}catch(g){this.rejectedCount++,this.handleError(g)}}
return this.processQueue()},doCallback:function(a){window[csaName+'dCB']?window[csaName+'dCB'](parseInt(a.csaCallbackTime),this.getTimestampMillis()):(window[csaName+'dCBValTS']=this.getTimestampMillis(),window[csaName+'dCBVal']=parseInt(a.csaCallbackTime))},queueAction:function(a){this.queue.unshift(a)},isOlderThan:function(a,c){var b=this.getTimestampMillis();return Math.abs(b-c)>a},isActionStale:function(a){return this.isOlderThan(this.maxWaitDurationMillis,a.queueTimestampMillis)},processQueue:function(){if(0===this.queue.length)
return 0;if(!this.isDomContentReady()){var a=this;window.setTimeout(function(){a.processQueue.call(a)},this.domContentReadyPollingDurationMillis);return 0}
var c=0,b;for(b=this.queue.length-1;0<=b;b--){var d=this.queue[b];try{if(this.isActionStale(d))
this.staleCount++,this.queue.splice(b,1);else{var e=this.getTimestampMillis();this.processAction(d)?(this.injectionCount++,this.queue.splice(b,1),this.actionsExecutedCount++,c++):this.isOlderThan(this.maxActionProcessDurationMillisToAllowRequeue,e)&&(this.rejectedCount++,this.queue.splice(b,1))}}catch(f){this.queue.splice(b,1),this.handleError(f)}}
0<this.queue.length&&(a=this,window.setTimeout(function(){a.processQueue.call(a)},this.targetMissingPollingDurationMillis));return c},processAction:function(a){return this.validVariables(a.csaNumber,a.contentKey)?(this.currentActionID=a.actionID,this.currentRuleID=a.ruleID,this.currentContentID=a.contentID,this.currentCustomID=a.customID,a=this.updateContent(a),this.currentCustomID=this.currentContentID=this.currentRuleID=this.currentActionID="",a):this.distributeActionToChildCsas(a)},validVariables:function(a,c){return window[csaName+'wid']!=a||c&&c!=window[csaName+'contentKey']?!1:!0},isObjectInArray:function(a,c){if(!c||!a)
return!1;for(var b=0,d=c.length;b<d;b++)
if(c[b]===a)
return!0;return!1},recurseChildCsas:function(a,c,b){var d=-1;try{d=a[csaName+'wid']}catch(f){return!1}
if(d==c.csaNumber){if(a[csaName+'RTEHandler'])
return c.csaCallbackTime&&a[csaName+'RTEHandler'].doCallback(c),a[csaName+'RTEHandler'].queueAction(c),this.isObjectInArray(a,b)||b.push(a),!0}else
try{if(a.frames&&0<a.frames.length)
for(var d=0,e=a.frames.length;d<e;d++)
if(this.recurseChildCsas(a.frames[d],c,b))
return!0}catch(f){}
return!1},distributeActionToChildCsas:function(a){if(window[csaName+'gHW']){var c=[];a=this.recurseChildCsas(window[csaName+'gHW'](),a,c);if(0<c.length)
for(var b=0,d=c.length;b<d;b++)
c[b][csaName+'RTEHandler'].processQueue();return a}
return!1},insertNodeAfter:function(a,c){var b=c.parentNode;b.lastchild==c?b.appendChild(a):b.insertBefore(a,c.nextSibling)},getParentElement:function(a){return a.parentElement?a.parentElement:a.parentNode?a.parentNode:""},replaceImage:function(a,c,b){if(b){for(var d=!1,e=a;a&&!d;){if(a.href&&("a"==(""+a.tagName).toLowerCase()||"area"==(""+a.tagName).toLowerCase())){a.href=b;d=!0;break}
var f=this.getParentElement(a);if(a===f)
break;a=f}
if(d)
e.src=c;else if(a=document.createElement("SPAN"),d=document.createElement("A"),d.href=b,a.appendChild(d),b=this.getParentElement(e))
b.replaceChild(a,e),d.appendChild(e),e.src=c,e.setAttribute("style","border-style: none")}else
a.src=c},doUnescape:function(a){window.decodeURIComponent||(a=a.replace(/%C2%A3/g,"%A3"));a=a.replace(/\\+/g,"%20");return a=window.decodeURIComponent?window.decodeURIComponent(a):unescape(a)},pushContentAddedData:function(a){this.currentActionID&&(window[csaName+'variableStateChange']?window[csaName+'reportContentAction'](this.currentActionID,this.currentRuleID,this.currentContentID,this.currentCustomID):(window[csaName+'ContentIdArray']||(window[csaName+'ContentIdArray']=[]),window[csaName+'ContentIdArray'][window[csaName+'ContentIdArray'].length]={actionId:this.currentActionID,ruleId:this.currentRuleID,contentId:this.currentContentID,customId:this.currentCustomID}))},getFormName:function(a){if(!a)
return"";var c=a.getAttribute("name");return c?c:a.name&&!a.name.type?a.name:""},getFormID:function(a){if(!a)
return"";var c=a.getAttribute("id");return c?c:a.id&&!a.id.type?a.id:""},getElementClass:function(a){var c=a.getAttribute("class");c||(c=a.getAttribute("className"));return c},findMatchesByParentFormName:function(a,c,b){var d=new RegExp(c);a||(a=document.getElementsByTagName("*"));for(var e=[],f=0,g=a.length;f<g;f++)
if(a[f].form){var h=this.getFormName(a[f].form);b?d.test(h)&&(e[e.length]=a[f]):c==h&&(e[e.length]=a[f])}
return e},findMatchesByParentFormID:function(a,c,b){var d=new RegExp(c);a||(a=document.getElementsByTagName("*"));for(var e=[],f=0,g=a.length;f<g;f++)
if(a[f].form){var h=this.getFormID(a[f].form);b?d.test(h)&&(e[e.length]=a[f]):c==h&&(e[e.length]=a[f])}
return e},findMatchesByName:function(a,c,b){a||(a=document.getElementsByTagName("*"));var d=[];if(b)
for(c=new RegExp(c),b=0;b<a.length;b++)
c.test(a[b].name)&&(d[d.length]=a[b]);else
for(c=c?c.toLowerCase():c,b=0;b<a.length;b++){var e=(""+a[b].name).toLowerCase();c==e&&(d[d.length]=a[b])}
return d},findMatchesById:function(a,c,b){a||(a=document.getElementsByTagName("*"));var d=[];if(b)
for(c=new RegExp(c),b=0;b<a.length;b++)
c.test(a[b].id)&&(d[d.length]=a[b]);else
for(b=0;b<a.length;b++)
c==a[b].id&&(d[d.length]=a[b]);return d},findMatchesByClass:function(a,c,b){a||(a=document.getElementsByTagName("*"));var d=[];if(b)
for(c=new RegExp(c),b=0;b<a.length;b++)
c.test(this.getElementClass(a[b]))&&(d[d.length]=a[b]);else
for(b=0;b<a.length;b++)
c==this.getElementClass(a[b])&&(d[d.length]=a[b]);return d},findMatchesByHref:function(a,c,b){a||(a=document.getElementsByTagName("A"));var d=[];if(b)
for(c=new RegExp(c),b=0;b<a.length;b++)
c.test(a[b].href)&&(d[d.length]=a[b]);else
for(c=c.toLowerCase(),b=0;b<a.length;b++){var e=(""+a[b].href).toLowerCase();c==e&&(d[d.length]=a[b])}
return d},findMatchesBySrc:function(a,c,b){a||(a=document.getElementsByTagName("IMG"));var d=[];if(b)
for(c=new RegExp(c),b=0;b<a.length;b++)
c.test(a[b].src)&&(d[d.length]=a[b]);else
for(c=c.toLowerCase(),b=0;b<a.length;b++){var e=(""+a[b].src).toLowerCase();c==e&&(d[d.length]=a[b])}
return d},findMatchesByTagName:function(a,c,b){c=c.toUpperCase();a||(a=document.getElementsByTagName("*"));var d=[];if(b)
for(c=new RegExp(c),b=0;b<a.length;b++)
c.test((""+a[b].tagName).toUpperCase())&&(d[d.length]=a[b]);else
for(b=0;b<a.length;b++){var e=(""+
a[b].tagName).toUpperCase();c==e&&(d[d.length]=a[b])}
return d},findMatchesByType:function(a,c,b){c=c.toLowerCase();a||(a=document.getElementsByTagName("*"));var d=[];if(b)
for(c=new RegExp(c),b=0;b<a.length;b++)
c.test((""+a[b].type).toLowerCase())&&(d[d.length]=a[b]);else
for(b=0;b<a.length;b++){var e=(""+a[b].type).toLowerCase();c==e&&(d[d.length]=a[b])}
return d},updateContent:function(a){"undefined"!=typeof SpeedTrapComponent&&SpeedTrapComponent.logMessage("Inserting "+a.parsedContent);if(3==a.csaAction)
return this.insertContentAtTopOfPage(a.parsedContent),!0;if(4==a.csaAction)
return this.insertContentAtEndOfPage(a.parsedContent),!0;if(!a.attributesArray)
return!1;for(var c=!1,b=null,d="",e="",f="",g="",h="",p="",k=0,q=a.attributesArray.length;k<q;k++){var l=a.attributesArray[k].attributeType,m=a.attributesArray[k].attributeValue,n=a.attributesArray[k].attributeIsRegEx;"NAME"==l?b=this.findMatchesByName(b,m,n):"ID"==l?b=this.findMatchesById(b,m,n):"CLASS"==l?b=this.findMatchesByClass(b,m,n):"IMAGE"==l?(d={val:m,isRegex:n},c=!0):"ANCHOR"==l?e={val:m,isRegex:n}:"TAGNAME"==l?f={val:m,isRegex:n}:"FORM_NAME"==l?g={val:m,isRegex:n}:"FORM_ID"==l?h={val:m,isRegex:n}:"TYPE"==l&&(p={val:m,isRegex:n})}
g&&(b=this.findMatchesByParentFormName(b,g.val,g.isRegex));h&&(b=this.findMatchesByParentFormID(b,h.val,h.isRegex));e&&(b=this.findMatchesByHref(b,e.val,e.isRegex));d&&(b=this.findMatchesBySrc(b,d.val,d.isRegex));f&&(b=this.findMatchesByTagName(b,f.val,f.isRegex));p&&(b=this.findMatchesByType(b,p.val,p.isRegex));if(null===b)
return!1;e=!1;for(k=0;k<b.length;k++)
d=b[k],f=(""+b[k].tagName).toUpperCase(),"HEAD"!=f&&"META"!=f&&(c&&"IMAGE"==a.replacementContentType?(0==a.csaAction?(this.replaceImage(d,a.parsedContent.childNodes[0].nodeValue,a.replacementurl),this.tagContent(d)):1==a.csaAction?(e=this.toInnerHtmlNode(a.parsedContent.childNodes[0]),(f=d.parentNode)&&f.insertBefore(e,d)):2==a.csaAction&&(e=this.toInnerHtmlNode(a.parsedContent.childNodes[0]),this.insertNodeAfter(e,d)),e=!0):(e=!0,this.modifyTarget(d,a)),this.pushContentAddedData());return e},insertContentAtTopOfPage:function(a){var c=document.createElement("SPAN");this.tagContent(c);var b=document.getElementsByTagName("body")[0];b&&(b.insertBefore(c,b.firstChild),this.appendToDoc(c,a),this.pushContentAddedData())},insertContentAtEndOfPage:function(a){var c=document.createElement("SPAN");this.tagContent(c);var b=document.getElementsByTagName("body")[0];b&&(b.appendChild(c),this.appendToDoc(c,a),this.pushContentAddedData())},modifyTarget:function(a,c){if(a){var b=document.createElement("SPAN");this.tagContent(b);var d=a.parentNode;0==c.csaAction?d&&d.replaceChild(b,a):1==c.csaAction?d&&d.insertBefore(b,a):2==c.csaAction&&this.insertNodeAfter(b,a);this.appendToDoc(b,c.parsedContent)}},parseContent:function(a){if(window.DOMParser)
a=(new DOMParser).parseFromString(a,"text/xml");else{var c=new ActiveXObject("Microsoft.XMLDOM");c.async="false";c.loadXML(a);a=c}
a=a.getElementsByTagName("strtecontent");return 1==a.length?a[0]:null},getHeadReference:function(){var a=document.getElementsByTagName("HEAD");return 0<a.length?a[0]:null},appendToDoc:function(a,c){var b=null,d=c.nodeName.toUpperCase();if("STRTECONTENT"==d)
b=a;else if("HEAD"==d){var e=this.getHeadReference();if(e){for(d=0;d<c.childNodes.length;d++)
this.appendToDoc(e,c.childNodes[d]);return}}else if(b=this.createNewNode(c,a),null===b)
return;e=0===d.indexOf("FB");if("SCRIPT"!=d&&"NOSCRIPT"!=d&&"STYLE"!=d&&"OBJECT"!=d&&"TABLE"!=d&&"H1"!=d&&"H2"!=d&&"H3"!=d&&"H4"!=d&&"H5"!=d&&"H6"!=d&&!e)
for(d=0;d<c.childNodes.length;d++)
this.appendToDoc(b,c.childNodes[d])},createNewNode:function(a,c){var b;if(3==a.nodeType)
b=document.createTextNode(a.nodeValue),c.appendChild(b);else{if(1==a.nodeType){b=a.nodeName.toUpperCase();var d=0===b.indexOf("FB");"OBJECT"==b||"TABLE"==b||"H1"==b||"H2"==b||"H3"==b||"H4"==b||"H5"==b||"H6"==b||d?(b=this.createObjectNode(a),c.appendChild(b)):"SCRIPT"==b?b=this.createScriptNode(a,c):"NOSCRIPT"==b?(b=this.createNoScriptNode(a),c.appendChild(b)):"STYLE"==b?b=this.createStyleNode(a,c):(b=document.createElement(a.nodeName.toUpperCase()),this.copyAttributes(a,b),c.appendChild(b));return b}
return null}},createObjectNode:function(a){return this.toInnerHtmlNode(a)},tagInjectedContent:function(a,c,b,d,e){a&&(c&&(a[csaName+'contentActionIdentifier']=c),b&&(a[csaName+'ruleIdentifier']=b),d&&(a[csaName+'contentIdentifier']=d),e&&(a[csaName+'customIdentifier']=e))},tagContent:function(a){this.tagInjectedContent(a,this.currentActionID,this.currentRuleID,this.currentContentID,this.currentCustomID)},toXML:function(a){return"undefined"!=typeof XMLSerializer?(new XMLSerializer).serializeToString(a):a.xml?a.xml:""},toInnerHtmlNode:function(a){var c=document.createElement("SPAN");c.innerHTML=this.toXML(a);this.tagContent(c);return c},createScriptNode:function(a,c){var b=document.createElement("SCRIPT");c.appendChild(b);var d=a.attributes.getNamedItem("type");d&&(b.type=d.value);if(d=a.attributes.getNamedItem("src"))
b.src=d.value;0<a.childNodes.length&&(b.text=a.childNodes[0].nodeValue);return b},createNoScriptNode:function(a){for(var c=document.createElement("NOSCRIPT"),b=document.createElement("SPAN"),d=0;d<a.childNodes.length;d++)
this.appendToDoc(b,a.childNodes[d]);c.text=b.innerHTML;return c},createStyleNode:function(a,c){var b=document.createElement("STYLE");c.appendChild(b);var d=a.attributes.getNamedItem("type");d&&(b.type=d.value);if(d=a.attributes.getNamedItem("src"))
b.src=d.value;if(d=a.attributes.getNamedItem("media"))
b.media=d.value;0<a.childNodes.length&&(b.styleSheet?b.styleSheet.cssText=a.childNodes[0].nodeValue:b.innerHTML=this.toXML(a.childNodes[0]));return b},copyAttributes:function(a,c){for(var b=null,d=null,e=0,f=a.attributes.length;e<f;e++){var g=""+a.attributes[e].name,h=a.attributes[e].value;if("style"==g.toLowerCase())
c.style.cssText=h;else if("class"==g.toLowerCase())
window.attachEvent?c.className=h:c.setAttribute(g,h);else if("type"==g){b=h;continue}
"value"==g?d=h:c.setAttribute(g,h)}
b&&c.setAttribute("type",b);d&&(c.setAttribute("value",d),c.value=d)},handleError:function(a){this.errorCount++;if(window.SpeedTrapComponent){var c;c="There was an error.\n"+("Error description: "+
a.message+"\n");c+="Line no: "+a.lineNumber+"\n";a.stack&&(c+="Stack: "+a.stack);window.SpeedTrapComponent.logMessage("Error "+c)}}};;}
u.counter=u.counter||1;(function(u){var delay=u.data.celebrus_spa_counter_delay||2;u.counter+=1;if(utag_cfg_ovrd.noview==true&&b["ut.event"]=="view"&&u.data.doReinit_collection.toString()==="1"&&u.counter>delay){window[csaName+'doReInit']();}
if(typeof u.data.udo_collection!="undefined"&&u.data.udo_collection.toString()==="1"){function merge(ar,b){var i
len,mapped={};for(i=0,len=ar.length;i<len;i++){for(ar[i]in b){if(b.hasOwnProperty(ar[i])&&b[ar[i]]==undefined){mapped[ar[i]]=b[ar[i]];}}}
return f;}
window[csaName+'SendJsonData']({events:[merge(UDOsAccept,b)]});}
return u;})(u);utag.DB("send:3520:COMPLETE");}};utag.o[loader].loader.LOAD(id);}("3520","hsbc.uk-rbwm"));}catch(error){utag.DB(error);}
