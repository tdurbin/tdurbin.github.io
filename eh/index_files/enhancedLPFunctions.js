/*
	version 1.12 - 21/03/2019
	@copyright Copyright 2016, 2017, 2018, 2019 AWE
	@license MIT License: http://www.opensource.org/licenses/mit-license
	You MUST include the licenses and credits herein in uses & reproductions of this software.
	Include flexbox field reordering  
*/

/*
	@preserve @author Sanford Whiteman, TEKNKL (blog.teknkl.com / sandy@teknkl.com)
	@copyright Copyright 2016, 2017, 2018, 2019 FigureOne, Inc.
	@license MIT License: http://www.opensource.org/licenses/mit-license
	You MUST include the licenses and credits herein in uses & reproductions of this software.
*/

function getCookie(name) {
	var ca = document.cookie.split(';'),
			cname = name+"=";
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		
		while (c.charAt(0) == ' ') {
			c = c.substring(1, c.length);
		}
		if (c.indexOf(cname) === 0) {
			return c.substring(cname.length, c.length);
		}
	}
	return null;
}

function getURLParameterByName(name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
			results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return null;
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function leftPad(n, width, z) {
	z = z || '0';
	n = n + '';
	return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

function utf8_to_b64( str ) {
  return window.btoa(unescape(encodeURIComponent( str )));
}

function b64_to_utf8( str ) {
  return decodeURIComponent(escape(window.atob( str )));
}

function destyleMktoForm(mktoForm, options) {
	/* Example function call
      destyleMktoForm(form, {keepInline:false, keepSheets:true});
      2 parameters possible :
      	- keepInline: keeps any inline style add at form level, such as field width
      	- KeepSheets: keeps Marketo forms 2 and theme styles sheets
  */
	var formEl = mktoForm.getFormElem()[0],
			_forEach = Array.prototype.forEach,
			attrTag = 'data-wrapper-for',
			ANCESTORS_STOR = '.mktoFormRow, .mktoFormCol, .mktoButtonRow',
			ROW_STOR = '.mktoFormRow',
			COL_STOR = '.mktoFormCol',
			INPUTS_STOR = 'INPUT,SELECT,TEXTAREA,BUTTON,[data-name],.mktoPlaceholder',
			LABEL_STOR = 'label.mktoLabel',
			placeholderPrefix = /^mktoPlaceholder/,
			COLUMN_LAYOUT_PREFIX = "mfc",
			COLUMN_LAYOUT_STOR = "DIV[class|=" + COLUMN_LAYOUT_PREFIX + "]",
			COLUMN_LAYOUT_RE = new RegExp("^" + COLUMN_LAYOUT_PREFIX + "-"),
			options = options || {},
			reqClass = "requiredField",
			emptyLabClass = "emptyLabel",
			reqClassSel = ".mktoRequiredField",
			cbxInputSel = 'input[type="checkbox"]',
			cbxWrapperClass = 'checkbox-wrapper',
			FieldTypeSelectors = [{selector:"select", type:"droplist"},
			                      {selector:"input[type=text]", type:"string-field"},
			                      {selector:"input[type=email]", type:"email-field"},
			                      {selector:"input[type=tel]", type:"phone-field"},
			                      {selector:"input[type=date]", type:"date-field"},
			                      {selector:".mktoRadioList", type:"radio-field"},
			                      {selector:"textarea", type:"text-area"},
			                      {selector:"button", type:"button"},
			                      {selector:".mktoCheckboxList label:empty", type:"checkbox-field"},
			                      {selector:".mktoCheckboxList label:not(:empty)", type:"checkboxes-field"},
			                      {selector:"input[type=hidden]", type:"hidden-field"}],
			attrTTag = 'data-mkto-type',
			attrNBFieldsTag = 'data-mkto-nbfields',
			attrNumFieldsTag = 'data-mkto-numfields',
			arrayFrom = getSelection.call.bind([].slice);
			
	// remove element styles from <form> and children
	if (!options.keepInline) {
		var styledEls = arrayFrom(formEl.querySelectorAll("[style]")).concat(formEl);
		styledEls.forEach(function(el) {
			el.removeAttribute("style");
    });
  }
        
  // disable remote stylesheets and local <style>s
  if (!options.keepSheets) {
    var styleSheets = arrayFrom(document.styleSheets);
    styleSheets.forEach(function(ss) {
      if ([mktoForms2BaseStyle, mktoForms2ThemeStyle].indexOf(ss.ownerNode) != -1 || formEl.contains(ss.ownerNode) ) {
        ss.disabled = true;
      }
    });
  }

	// add all mfc classes from label to ancestors
  arrayFrom(formEl.querySelectorAll(ANCESTORS_STOR)).forEach(function(ancestor) {
    arrayFrom(ancestor.querySelectorAll(COLUMN_LAYOUT_STOR)).forEach(function(label) {
      arrayFrom(label.classList).filter(COLUMN_LAYOUT_RE.test.bind(COLUMN_LAYOUT_RE)).forEach(function(columnClassItem){
        ancestor.classList.add(columnClassItem);
      });
    });
  });
  
  // add a required class to ancestor
  arrayFrom(formEl.querySelectorAll(ANCESTORS_STOR)).forEach(function(ancestor) {
    arrayFrom(ancestor.querySelectorAll(reqClassSel)).forEach(function(reqElement) {
      ancestor.classList.add(reqClass);
    });
  });

	// add emptyLabclass to label & ancestors if empty, so that it can be set to width = 0
  arrayFrom(formEl.querySelectorAll(ANCESTORS_STOR)).forEach(function(ancestor) {
    arrayFrom(ancestor.querySelectorAll(LABEL_STOR)).forEach(function(labElement) {
	  	if (labElement.lastChild.nodeName == "DIV") {
  	    labElement.classList.add(emptyLabClass);
  	    ancestor.classList.add(emptyLabClass);
  		} 
    });
  });

	// Count Number of cols in row and add nbcols attribute
  arrayFrom(formEl.querySelectorAll(ROW_STOR)).forEach(function(ancestor) {
    ancestor.setAttribute(attrNBFieldsTag, '');
    var NbCols = ancestor.querySelectorAll(COL_STOR).length,
    		NbColsStr = NbCols.toString(),
    		colNum = 0,
    		colNumStr = "";
    ancestor.setAttribute(attrNBFieldsTag, NbColsStr);    
    arrayFrom(ancestor.querySelectorAll(COL_STOR)).forEach(function(col) {
    	colNum++;
    	colNumStr = colNum.toString();
    	col.setAttribute(attrNumFieldsTag,colNumStr);
    	col.setAttribute(attrNBFieldsTag, NbColsStr);
  	});
	});

	// Add data-wrapper-for and data-mkto-type attributes
  arrayFrom(formEl.querySelectorAll(ANCESTORS_STOR)).forEach(function(ancestor) {
    ancestor.setAttribute(attrTag, '');
		// Add data-wrapper-for attribute to ancestors and labels
    arrayFrom(ancestor.querySelectorAll(INPUTS_STOR)).forEach(function(input) {
      var currentTag = ancestor.getAttribute(attrTag);
      console.log('input: '+input);
      ancestor.setAttribute(attrTag, [
        currentTag ? currentTag : '', 
        input.id, 
        input.name != input.id ? input.name : '',
        input.getAttribute('data-name'),
        arrayFrom(input.classList)
          .filter(function(cls){
            return placeholderPrefix.test(cls);
          })
          .map(function(cls){
            return cls.replace(placeholderPrefix,"");
          })
          .join(" ")
      ].join(" ").trim());
    });    

		// And also add data-type attribute to ancestors and labels
    FieldTypeSelectors.forEach(function(fieldtype) {
      arrayFrom(ancestor.querySelectorAll(fieldtype.selector)).forEach(function(input) {
        ancestor.setAttribute(attrTTag, fieldtype.type);
        arrayFrom(ancestor.querySelectorAll(".mktoFieldWrap > label")).forEach(function(label) {
         	label.setAttribute(attrTTag, fieldtype.type);
        });
		  });
		});
  });

  formEl.setAttribute("data-styles-ready", "true");

}

function customFieldOrder(mktoForm, fieldOrderList) {
	/* Example function call
     var fieldOrderList = [
        "submitButton",
        "FirstName",
        "LastName",
        "Email",
        "Website",
        "ConsentDisclaimer"
    ];
	customFieldOrder(form, fieldOrderList);
	
  To include a Rich Text Area in the reorder list, put
  a hidden <input> inside it (choose any unused name).
  Here I have 
      <input type="hidden" name="ConsentDisclaimer">
  in the RTA.
  Then just order it alongside the standard field names.
	
 	*/

  var formEl = mktoForm.getFormElem()[0],
    arrayFrom = getSelection.call.bind([].slice);

  var ANCESTORS_STOR = ".mktoForm > .mktoFormRow, .mktoForm > .mktoButtonRow",
    INPUTS_STOR = "INPUT, SELECT, TEXTAREA, BUTTON, A",
    FLEXBOX_ORDER_STYLES = ["order", "WebkitOrder", "MozOrder", "msFlexOrder"],
    buttonName = 'submitButton',
    fieldOrder = fieldOrderList.map(function(reorderFieldName) {
    	if (reorderFieldName == buttonName) {
    		return formEl.querySelector(".mktoButtonRow");
    	} else {
    		return formEl.querySelector("[data-wrapper-for~='"+reorderFieldName+"']");
    	}
    });

  var allRows = formEl.querySelectorAll(ANCESTORS_STOR);

  fieldOrder
    .map(function(reorderedField) {
      return reorderedField instanceof HTMLElement
        ? reorderedField
        : formEl.querySelector("[name='" + reorderedField + "']");
    })
    .forEach(function(reorderedField, order) {
      arrayFrom(allRows)
        .filter(function(row) {
          return row.contains(reorderedField);
        })
        .forEach(function(row) {
          FLEXBOX_ORDER_STYLES.forEach(function(compatOrderStyle) {
            row.style[compatOrderStyle] = order;
          });
        });
    });
  
  var formIndex = MktoForms2.allForms().indexOf(mktoForm);
  
  arrayFrom(allRows)
    .map(function(row, domIndex) {
      return {
        rowEl: row,
        effectiveIndex: allRows.length + parseInt(row.style.order) || domIndex
      };
    })
    	.sort(function(lRowInfo, rRowInfo) {
      	return (lRowInfo.effectiveIndex - rRowInfo.effectiveIndex);
    	})
    		.forEach(function(rowInfo, effectiveIndex) {
      		var childInputs = rowInfo.rowEl.querySelectorAll(INPUTS_STOR);
      				arrayFrom(childInputs).forEach(function(input) {        
        				input.setAttribute("tabindex", effectiveIndex + 1 + ((formIndex +1) * 100));
      				});
    		});
}
    
function addMtkTokToElements(BntSelector) {
      /* Get MKT_TOK from the inboud URL and add it to all required buttons */
      var mktTok = getURLParameterByName("mkt_tok", document.location);
      
      if(mktTok) {
        [].forEach.call(document.querySelectorAll(BntSelector), function (el) {
        	var buttonHref = el.href;
					if (buttonHref.indexOf("?")>=0) {
						buttonHref = buttonHref+ "&mkt_tok="+mktTok;
					} else {
						buttonHref = buttonHref+ "?mkt_tok="+mktTok;
					}
          el.href = buttonHref;
        });
      }
    }

function setNullFieldValues(mktoForm) {
	var formEl = mktoForm.getFormElem()[0],
  		NULL_PLACEHOLDER_STOR = 'INPUT[type="checkbox"][value="NULL"], OPTION[value="NULL"]',
  		nullPlaceholderEls = formEl.querySelectorAll(NULL_PLACEHOLDER_STOR),
  		newFormData = {},
  		arrayFrom = getSelection.call.bind([].slice),
  		currentVals = mktoForm.getValues();
		
	arrayFrom(nullPlaceholderEls).map(function(itm) {
		return itm.name || itm.parentNode.name;
	}).forEach(function(field) {
		if (!currentVals[field]) {
			newFormData[field] = "NULL";
		}
	});
	mktoForm.setValues(newFormData);
}
    
function addMutexListeners(mktoForm, mutexCollSelectors) {
	/* Example function call
	var mutexCollSelectors = ['input[name="fieldName2"], input[name="fieldName2"], input[name="fieldName3"]', 'input[name="Unsubscribed"]'];
	addMutexListeners (form, mutexCollSelectors);
	*/
	
	var mutexCollectionsEls = [],
			formEl = mktoForm.getFormElem()[0];
      
	// get string selectors into collections
	mutexCollSelectors.forEach(function(selectors, idx) {
		mutexCollectionsEls.push(formEl.querySelectorAll(selectors));
	});
 
	// iterate collections, attaching evt listeners that will scan all foreign collections on click
	Array.prototype.forEach.call(mutexCollectionsEls,function(collection, idx) {
		Array.prototype.forEach.call(collection, function(el) {
			el.addEventListener('click', function(e) {
				Array.prototype.forEach.call(mutexCollectionsEls,function(collection, iidx) {
					idx == iidx || Array.prototype.forEach.call(mutexCollectionsEls[iidx], function(el) {
						el.checked = false;
					});
				});
			});
		});
	});
}
    
function moveElsBelowButton(mktoForm, ElSelector) {
	var formEl = mktoForm.getFormElem()[0];      
/*	console.log("movable elements: "+ formEl.querySelectorAll(ElSelector)); */
	[].forEach.call(formEl.querySelectorAll(ElSelector), function(row) {
		formEl.appendChild(row);
	});
}

(function(f,k){(function(k,e){"object"===typeof module&&null!==module&&module.exports?module.exports=exports=e():"function"===typeof define&&define.amd?define(e):f[k]=e()})("cookies",function(){var m=f.document,e={expires:null,path:"/",domain:null,secure:!1},d=function(a){"object"===typeof f.console&&null!==f.console&&"function"===typeof f.console.warn&&(d=function(a){f.console.warn(a)},d(a))},g=function(a){var b,c;"object"!==typeof a||null===a?b=e:(b={expires:e.expires,path:e.path,domain:e.domain,
secure:e.secure},"object"===typeof a.expires&&a.expires instanceof Date?b.expires=a.expires:"object"===typeof a.expires_at&&a.expires_at instanceof Date?(b.expires=a.expires_at,d('Cookie option "expires_at" has been deprecated. Rename to "expires". Support for "expires_at" will be removed in a version to come.')):"object"===typeof a.expiresAt&&a.expiresAt instanceof Date?(b.expires=a.expiresAt,d('Cookie option "expiresAt" has been deprecated. Rename to "expires". Support for "expiresAt" will be removed in a version to come.')):
"number"===typeof a.hoursToLive&&0!==a.hoursToLive&&(c=new Date,c.setTime(c.getTime()+36E5*a.hoursToLive),b.expires=c,d('Cookie option "hoursToLive" has been deprecated. Rename to "expires" and prodvide a Date instance (see documentation). Support for "hoursToLive" will be removed in a version to come.')),"string"===typeof a.path&&""!==a.path&&(b.path=a.path),"string"===typeof a.domain&&""!==a.domain&&(b.domain=a.domain),!0===a.secure&&(b.secure=a.secure));return b},n=function(){return String.prototype.trim?
function(a){return String.prototype.trim.call(a)}:function(){var a,b;a=/^\s+/;b=/\s+$/;return function(c){return c.replace(a,"").replace(b,"")}}()}(),l=function(){var a=/\d/,b=f.isNaN;return function(c){return null===c||!a.test(c)||b(c)}}(),p=function(){var a,b;a=JSON&&"function"===typeof JSON.parse?function(a){var b=null;if("string"===typeof a&&""!==a&&(a=n(a),""!==a))try{b=JSON.parse(a)}catch(t){b=null}return b}:function(){return null};b=/^(?:\{.*\}|\[.*\])$/;return function(){var c={},q=m.cookie.split(";"),
f=q.length,e,d,g,h;for(e=0;e<f;e+=1){d=q[e].split("=");g=n(d.shift());d=1<=d.length?d.join("="):"";try{h=decodeURIComponent(d)}catch(r){h=d}try{h="true"===h?!0:"false"===h?!1:l(h)?b.test(h)?a(h):h:parseFloat(h)}catch(r){}c[g]=h}return c}}();return{get:function(a){var b,c,d=p();if("string"===typeof a)b=d[a]!==k?d[a]:null;else if("object"===typeof a&&null!==a)for(c in b={},a)Object.prototype.hasOwnProperty.call(a,c)&&(b[a[c]]=d[a[c]]!==k?d[a[c]]:null);else b=d;return b},filter:function(a){var b,c={},
d=p();"string"===typeof a&&(a=new RegExp(a));for(b in d)Object.prototype.hasOwnProperty.call(d,b)&&b.match(a)&&(c[b]=d[b]);return c},set:function(a,b,c){if("object"!==typeof c||null===c)c={};if(b===k||null===b)b="",c.expires=new Date,c.expires.setFullYear(1978);else if(b=!0===b?"true":!1===b?"false":l(b)?b:String(b),"string"!==typeof b)if("object"===typeof JSON&&null!==JSON&&"function"===typeof JSON.stringify)b=JSON.stringify(b);else throw Error("cookies.set() could not be serialize the value");a=
a+"="+encodeURIComponent(b);c=g(c);c=["object"===typeof c.expires&&c.expires instanceof Date?"; expires="+c.expires.toGMTString():"","; path="+c.path,"string"===typeof c.domain?"; domain="+c.domain:"",!0===c.secure?"; secure":""].join("");m.cookie=a+c},del:function(a,b){var c={},d;if("object"!==typeof b||null===b)b={};"boolean"===typeof a&&!0===a?c=this.get():"string"===typeof a&&(c[a]=!0);for(d in c)Object.prototype.hasOwnProperty.call(c,d)&&"string"===typeof d&&""!==d&&this.set(d,null,b)},test:function(){var a=
!1;this.set("test_cookies_jaaulde_js","data");"data"===this.get("test_cookies_jaaulde_js")&&(this.del("test_cookies_jaaulde_js"),a=!0);return a},setOptions:function(a){"object"!==typeof a&&(a=null);e=g(a)}}})})(this);

function findPrivateSuffix(f){
/*
Caching Private Domain Suffix Finder v0.3.7
Copyright (c) 2016, Sanford Whiteman/TEKNKL
MIT License
contains [JAAAulde/cookies v3.0.6](https://github.com/JAAulde/cookies)
Copyright (c) 2005-2015, Jim Auldridge
MIT License (https://raw.githubusercontent.com/JAAulde/cookies/master/LICENSE)
*/
var k={},m=RegExp("(?:^|\\s|;)(?:_mch_auto_domain=)(.*?)(?:;|$)","ig"),e={},d,g;
f=f||{};k[2]=!0;try{if(d=sessionStorage.getItem("shortestPrivateSuffix"),f.cache&&!d)try{sessionStorage.setItem("_mch_cache_test",""),sessionStorage.removeItem("_mch_cache_test"),k[1]=!0}catch(p){}}catch(p){}if(f.cache&&d)e.source=1;else{f=document.location.hostname.split(/\./);g=0;for(var n=f.length;g<n;g++){var l=f.slice(g).join(".");cookies.set("_mch_auto_domain",l,{domain:l})}for(f=document.cookie.toString();g=
m.exec(f);)if(g=g[1],!d||g.length<d.length)d=g,cookies.del("_mch_auto_domain",{domain:g});e.source=2;1==k[1]&&sessionStorage.setItem("shortestPrivateSuffix",d)}e.cookieDomain="."+d;e.domainLevel=d.split(".").length;return e
};