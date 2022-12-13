//tealium universal tag - utag.2920 ut4.0.202207272023, Copyright 2022 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}
if(utag.ut===undefined){utag.ut={};}
u.ev={'view':1};u.initialized=u.initialized||false;u.map={};u.extend=[];u.send=function(a,b){if(u.ev[a]){var c,d,e,f,i;u.data={};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
if(!u.initialized){var promo={e:{},h:[],v:[],mutOb:null,scrollTimer:null,resizeTimer:null,sendTimer:null,list:function(){var banners=document.querySelectorAll('[data-pid]');for(a=0;a<banners.length;a++){var pid=banners[a].attributes["data-pid"].value.trim();if(!promo.e[pid]){var top=Math.round(banners[a].getBoundingClientRect().top+window.pageYOffset);promo.e[pid]={t:top,b:top+banners[a].offsetHeight};promo.h.push(pid);}}},inViewCheck:function(x){var vt=window.pageYOffset;var vb=vt+window.innerHeight
var i=0;var l=promo.h.length;while(i<l){if(promo.e[promo.h[i]].b<=vb&&promo.e[promo.h[i]].t>=vt){promo.v.push(promo.h.splice(i,1));l--;}else
i++;}},addMutOb:function(){promo.mutOb=new MutationObserver(promo.promotionTrackingLogic);promo.mutOb.observe(document.body,{childList:true,subtree:true});},dismantle:function(){clearInterval(promo.sendTimer);window.removeEventListener('scroll',promo.onScroll);},promotionTrackingLogic:function(){promo.list();promo.inViewCheck();if(promo.sendTimer){clearInterval(promo.sendTimer);}
promo.sendTimer=setInterval(promo.send,1500);window.addEventListener('scroll',promo.onScroll);},init:function(){if(document.readyState=='complete'){promo.promotionTrackingLogic();promo.addMutOb();}else{window.addEventListener('load',function(){promo.promotionTrackingLogic();promo.addMutOb();});}},onScroll:function(){if(promo.scrollTimer!==null)
clearTimeout(promo.scrollTimer);promo.scrollTimer=setTimeout(promo.inViewCheck,1000);},send:function(trigger){if(promo.v.length>3||(promo.h.length==0&&promo.v.length>0)||promo.v.length>0){var msg=[];while(promo.v.length>0){msg.push(promo.v.shift());}
msg=msg.join(',');if(trigger=='start'){utag.data['promotion_event']='display';utag.data['promotion_content']=msg;}else
TMS.trackEvent('link',{'promotion_event':'display','promotion_content':msg});}
if(promo.h.length==0){promo.dismantle();}}}
function externalLinkConfig(aa){if(typeof window.modalsConfiguration!="undefined")
var modals=window.modalsConfiguration.modals;else
var modals;b['aem_modal_paths']=b['aem_modal_paths']||modals;var config=b['aem_modal_paths'],i,len,res=false,wt;for(var urls in config){if(TMS.util.hasOwn(config,urls)&&TMS.util.check.isArray(config[urls].whitelist)){for(i=0,len=config[urls].whitelist.length;i<len;i++){wt=config[urls].whitelist[i];if(wt&&new RegExp(wt.replace(/\*/g,".*"),"g").test(aa)===true){res=true;wt=null;break;}}}}
return res;}
function promoclicktracking(e){if(typeof TMS!='undefined'&&e.type=='click'){tar=e.target||e.srcElement;var record=['data-pid-action','data-pid','href','target'];var target=TMS.util.findAttr(tar,'data-pid')
var response={};function getTextValue(element){return element.innerText||element.textContent;}
for(i=0;i<record.length;i++){if(target!==false&&target.attributes[record[i]]){response[record[i]]=getTextValue(target.attributes[record[i]]);}}
if(target!==null){response.tagName=target.tagName;}
if(response.tagName=='BODY'){response={};}
if(!response.target){response.target="_self";}
var attrVal=response;if(attrVal['data-pid']){var isAttrTarget=(attrVal['target']&&attrVal['target'].toLowerCase()!=="_blank");var dl={page_url:(b.page_url!==undefined)?b.page_url:utag.data.page_url,page_name:(b.page_name!==undefined)?b.page_name:utag.data.page_name,click_event:'internal_promotion',vam_event:attrVal['data-pid-action']||'clickthrough',pid_content:attrVal['data-pid'],promotion_content:attrVal['data-pid']}
TMS.trackEvent('link',dl);function isEmpty(obj){for(var key in obj){if(obj.hasOwnProperty(key))
return false;}
return true;}
function delayRedirect(){if(attrVal['href']&&/^[^#]/.test(attrVal['href'])&&isAttrTarget){e.preventDefault();e.stopPropagation();setTimeout(function(){window.location.href=attrVal['href'];},500);}
if(attrVal['data-pid']){e.stopImmediatePropagation()}}
window.modalsConfiguration=window.modalsConfiguration||{};if(attrVal['href']){if(!isEmpty(window.modalsConfiguration.modals)){var clickedLink=attrVal['href']
if(clickedLink[0]==="/"){clickedLink=window.location.hostname+clickedLink}
if(externalLinkConfig(clickedLink)){delayRedirect();}}else{if(attrVal['href'][0]==="/"||attrVal['href'].indexOf(TMS.util.getCookieDomain())>-1||attrVal['href'].indexOf('hangseng.com')>-1){delayRedirect();}}}}}}
if(!TMS.util.check.isDefined(window.impressiontrackingrunning)){window.impressiontrackingrunning=true;window.Evnt.addE(document,"click",function(e){promoclicktracking(e);});promo.init();}}}};utag.o[loader].loader.LOAD(id);})("2920","hsbc.uk-rbwm");}catch(error){utag.DB(error);}