/*
v1.1
23/01/2019
*/

var hasSOI = false,
    hasChangedSOI = false,
    hiddenSOI = false,
    hasUnsub = false,
    hasChangedUnsub = false;

MktoForms2.loadForm(mktoDomain, mktoMunchkinID, mktoFormID, function(form) {
	var formEl = form.getFormElem()[0],
			emailEl = formEl.querySelector('#Email'),
  		submitEl = formEl.querySelector('BUTTON[type="submit"]'),
      formElId = form.getId(),
      startingVals = form.getValues(),
      GAID2 = "";
 
  destyleMktoForm(form, {keepInline:false, keepSheets:false});    

  if (Object.keys(startingVals).indexOf("optInRequested") != -1) {
    if((startingVals["optInRequested"] == "yes") || (startingVals["optInRequested"] == "true") || (startingVals["optInRequested"] == "1")){
      hasSOI = true;
    }
    var SOIEl = document.querySelectorAll('input[Name=optInRequested][type=hidden]');
    if  (SOIEl) {
      hiddenSOI = true;
    }
  }
      
  if (Object.keys(startingVals).indexOf("Unsubscribed") != -1) {
    if((startingVals["Unsubscribed"] == "yes") || (startingVals["Unsubscribed"] == "true") || (startingVals["Unsubscribed"] == "1")){
      hasUnsub = true;
    }
  }
      
  console.log("hasSOI: " + hasSOI);
  console.log("hasUnsub: " + hasUnsub);
  console.log("hiddenSOI: " + hiddenSOI);      

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'contactFormInit',
    'formId' : formElId,
    'formType' : mktoFormType
  });
 
  //GA Events through GTM
  var ga_label = document.location.pathname + '#formId=' + form.getId();
      
  // Form submission event
  form.onSubmit(function(){
    var SummittedValues = form.getValues(),
        SummittedValuesJson = JSON.stringify(SummittedValues);
    
   	// Checking the presence of the SOI Field, if it has changed to true and indicating it to Marketo
    yesnofield = "no";
    if (Object.keys(SummittedValues).indexOf("optInRequested") != -1) {
      if (!hasSOI && ((SummittedValues["optInRequested"] == "yes") || (SummittedValues["optInRequested"] == "true") || (SummittedValues["optInRequested"] == "1")) ){
        yesnofield = "yes";
      }
      if (hiddenSOI && ((SummittedValues["optInRequested"] == "yes") || (SummittedValues["optInRequested"] == "true") || (SummittedValues["optInRequested"] == "1")) ) {
        yesnofield = "yes";
      }
    }
    console.log("optedInInForm: "+yesnofield);
    form.addHiddenFields({"optedInInForm" : yesnofield });
    
   	// Checking the presence of the Unsubscribed Field, if it has changed to true and indicating it to Marketo
    yesnofield = "no";
    if (Object.keys(SummittedValues).indexOf("Unsubscribed") != -1) {
      if (!hasUnsub && ((SummittedValues["Unsubscribed"] == "yes") || (SummittedValues["Unsubscribed"] == "true") || (SummittedValues["Unsubscribed"] == "1"))){
        yesnofield = "yes";
      } 
    }
    console.log("optedOutInForm: "+yesnofield);
    form.addHiddenFields({"optedOutInForm" : yesnofield });

    // Setting the opt-out field opposite to the unsubscribe field or vice-versa     
    if (Object.keys(SummittedValues).indexOf("Unsubscribed") != -1) {
      if ((SummittedValues["Unsubscribed"] == "yes") || (SummittedValues["Unsubscribed"] == "true") || (SummittedValues["Unsubscribed"] == "1")) {
        yesnofield = "no";
      } else {
        yesnofield = "yes";
      }
      form.addHiddenFields({ "optInRequested" : yesnofield });
    } else if (Object.keys(SummittedValues).indexOf("optInRequested") != -1) {
      if ((SummittedValues["optInRequested"] == "yes") || (SummittedValues["optInRequested"] == "true") || (SummittedValues["optInRequested"] == "1")){
        yesnofield = "no";
      } else {
        yesnofield = "yes";
      }
      form.addHiddenFields({ "Unsubscribed" : yesnofield });
    }

    // Computing GAID2 as email address in base 64 encoding and sendind it to GTM Dtalayer with the submit event
    GAID2 = utf8_to_b64( SummittedValues["Email"].toLowerCase() + '_' + Date.now());

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
            'event': 'contactFormSubmit',
            'formId' : formElId,
            'formType' : mktoFormType,
            'GAleadId' : GAID2,
						'formFields' : SummittedValuesJson
    });

    // Adding UTM and IDs to Marketo
    form.addHiddenFields({
      'first_utm_medium': getCookie('eh_medium'),
      'first_utm_source': getCookie('eh_source'),
      'first_utm_campaign': getCookie('eh_campaign'),
      'first_utm_content': getCookie('eh_content'),
      'first_utm_term': getCookie('eh_term'),
      'last_utm_medium': getCookie('eh_medium'),
      'last_utm_source': getCookie('eh_source'),
      'last_utm_campaign': getCookie('eh_campaign'),
      'last_utm_content': getCookie('eh_content'),
      'last_utm_term': getCookie('eh_term'),
      'gAID': getCookie('MktoGAID'),
      'gAID2': GAID2
    });
  });
         
  // Form is validated
  form.onValidate(function(){
  });

  // form success event
  form.onSuccess(function(vals, followUpUrl) { 
    var SentValues = form.getValues(),
        SentValuesJson = JSON.stringify(SentValues);
  	

		// Sending the success event to GA
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
            'event': 'contactFormSent',
            'formId' : formElId,
            'formType' : mktoFormType,
            'gAId2' : GAID2,
						'formFields' : SentValuesJson
    });
    
    // Managing the follow-up.
    if (customFollowUpUrl != "") {
      document.location.href= customFollowUpUrl;
      return false;    
    } else if (followUpMessage != "") {
      var formEl = form.getFormElem()[0];
      SubmitEl = formEl.querySelector('.mktoButton[type="submit"]');
      SubmitEl.textContent = followUpMessage; // Change thankyou note in button
      return false;
    }    
  }); 
});
