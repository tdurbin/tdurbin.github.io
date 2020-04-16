_satellite.pushBlockingScript(function(event, target, $variables){
  const legalList = document.querySelector('.component-ee-global-footer__container').querySelectorAll('.component-links-list')[2].querySelector('ul');

const listItem = document.createElement('li');
listItem.className += "component-links-list__list-item component-links-list__link";
const linkItem = document.createElement('a');
linkItem.className += "component-links-list__anchor";
linkItem.textContent = "Cookie settings";

linkItem.addEventListener('click', function(e){
    document.cookie = "eeb-consent-cookie=;domain=.ee.co.uk;path=/;max-age=0";
});

linkItem.href = ".";    


listItem.appendChild(linkItem);
legalList.appendChild(listItem);
});
