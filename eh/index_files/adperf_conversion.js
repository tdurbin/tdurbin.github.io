/* 2014-12-17 12:15:31 */
/*
(c) Copyright Weborama SA - PARIS
All rights reserved

It is illegal to modify, disassemble, sell, copy or publish  this software 
or any part thereof. The use of this software is only permitted with the 
prior and express written permission of Weborama SA - PARIS.

for more information please contact: info@weborama.com
*/
(function(){"use strict";var I1a=navigator.userAgent.toLowerCase(),I1b=document,I1c=(I1a.indexOf('opera')>=0)?parseFloat(I1a.slice(I1a.indexOf('opera')+6)):0,I1d=((I1a.indexOf('msie')>=0)&&(!I1c))?(I1a.indexOf('trident/5.0')!==-1?9:parseFloat(I1a.slice(I1a.indexOf('msie')+5))):0;function I1e(I1f){if(typeof I1f==="undefined"||I1f===""||I1f===null){return false;}
return true;}
function I1g(I1h){var I1i=new Date(),I1j={},I1k='a',I1l='',I1t='',I1u,I1m=".weborama.fr",I1n="/fcgi-bin/dispatch.fcgi",I1p='',I1v,I1w;try{I1v=escape(document.location);I1w=escape((top!==null&&top.location!==null&&typeof(top.location.href)==="string")?top.document.referrer:document.referrer);}catch(e){}
I1i=parseInt(I1i.getTime()/1000-60*I1i.getTimezoneOffset(),10);if(location.protocol==='https:'){I1k='b';}
if(I1h.fullhost!==undefined&&I1h.fullhost!==''){I1p=((location.protocol==='https:')?"https://":"http://")+I1h.fullhost;}else if(I1h.host!==''){I1p=((location.protocol==='https:')?"https://":"http://")+I1h.host+'.solution.weborama.fr';}else{I1p=((location.protocol==='https:')?"https://ssl":"http://perf")+I1m;}
I1l=I1p+I1n+"?a.A=co";I1l+="&a.si="+I1h.site;I1l+="&a.cp="+I1h.conversion_page;I1l+="&a.ct="+I1k;if(I1e(I1h.client)&&I1h.client!==0){I1l+="&a.cid="+escape(I1h.client);}
if(I1e(I1h.amount)&&I1h.amount!==0){I1l+="&a.re="+escape(I1h.amount);}if(I1e(I1h.invoice_id)&&I1h.invoice_id!==0){I1l+="&a.iid="+escape(I1h.invoice_id);}
if(I1e(I1h.quantity)&&I1h.quantity!==0){I1l+="&a.inu="+I1h.quantity;}
if(I1e(I1h.is_client)){I1l+="&a.isc="+I1h.is_client;}
if(I1e(I1h.funnel_id)){I1l+="&a.fu="+I1h.funnel_id;}
if(I1e(I1h.funnel_step)){I1l+="&a.fus="+I1h.funnel_step;}
if(I1e(I1h.is_mobile)){I1l+="&g.ism="+(I1h.is_mobile?1:0);}
if(I1e(I1h.device_id)&&I1h.device_id.match&&I1h.device_id.match(/^[a-f0-9_\-]+$/i)){I1l+="&g.did="+encodeURIComponent(I1h.device_id);}
I1l+='&da='+I1i+'&g.ru='+I1w+'&g.pu='+I1v;if(I1h.optional_parameters){for(I1u in I1h.optional_parameters){if((typeof I1j[I1u]==="undefined"||I1j[I1u]!==I1h.optional_parameters[I1u])&&typeof I1h.optional_parameters[I1u]!=="function"){if(I1t.length>0){I1t+=',';}
I1t+=encodeURIComponent(I1u)+':'+encodeURIComponent(I1h.optional_parameters[I1u]);}
}
if(I1t.length>0){I1l=I1l+"&a.opt="+encodeURIComponent(I1t);}
}
return I1l;}
function I1q(I1h){try{var I1r=I1b.createElement('IFRAME'),I1s=I1b.getElementsByTagName('body').item(0)||I1b.documentElement.childNodes[0];I1r.style.width=I1r.style.height='1px';I1r.style.border='0px';I1r.style.position='absolute';I1r.style.display='none';I1r.style.top=I1r.style.left='0px';I1r.style.zIndex=0;I1r.src=I1g(I1h);if(I1d>5&&I1d<=6){I1s.insertAdjacentHTML("beforeBegin","<iframe src='"+I1g(I1h)+"' width=\"1\" height=\"1\" frameborder=\"0\" style='zindex:0;position:absolute;border:0px;display:none;left:0;top:0;width:1px;height:1px;'><\/iframe>");}
else if(I1s.firstChild!==null){I1s.insertBefore(I1r,I1s.firstChild);}
else{I1s.appendChild(I1r);}
}catch(e){I1b.write("<iframe src='"+I1g(I1h)+"' width=\"1\" height=\"1\" frameborder=\"0\" style='zindex:0;position:absolute;border:0px;display:none;left:0;top:0;width:1px;height:1px;'><\/iframe>");}
}
if(typeof window.adperfTracker==="undefined"){window.adperfTracker=(function(){return{track:I1q};}());}
}());