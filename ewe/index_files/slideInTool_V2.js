/**
 * eResult Layer Bibliothek
 * Stellt Funktionen für Einladungen zu Online-Umfragen zur Verfügung.
 *
 * @version 1.0
 */

var eResultLayer = function (options) {
    /*
     * HTML Container des Layers
     */
    this.sliderHtml = '<div class="si-tool si-tool--bar"><div class="si-tool-inner si-tool-inner--grid si-tool-inner--grid-mobile-row si-tool-inner--grid-desktop-row"></div></div>';
    this.innerGroup = '<div class="si-tool-inner-group"></div>';
    this.innerItem = '<div class="si-tool-inner-item"></div>';

    this.logo_mobile = '<img class="si-tool-logo si-tool-mobile-logo" src="#" width="118" height="28" />';
    this.logo_desktop = '<img class="si-tool-logo si-tool-desktop-logo" src="#" width="118" height="28" />';

    this.primarybutton = '<a class="si-tool-btn si-tool-btn--primary" href="#0" target="_blank"></a>';
    this.secondarybutton = '<a class="si-tool-btn si-tool-btn--secondary" href="#0"></a>';
    this.closebutton = '<a class="si-tool-close" title="Schlie&szlig;en" href="#0"><span class="si-tool-close-icon">&times;</span><span class="si-tool-close-label"></span></a>';

    this.headline = '<div class="si-tool-headline"></div>';
    this.msg = '<div class="si-tool-msg"></div>';
    this.note = '<div class="si-tool-note"></div>';
    this.elementList = {
         'logo': 'logo'
        ,'headline': 'headline'
        ,'message': 'msg'
        ,'note': 'note'
        ,'button': 'primarybutton'
        ,'laterButton': 'secondarybutton'
        ,'closeButton': 'closebutton'
    }
    /*
     * jQuery Version
     */
    this.jQuerySrc = 'https://data.ewe.de/-/media/ewe/documents/06-sonstige-dokumente/eResult/js/jquery331min.js';

    /*
     * interne Variablen
     */
    this.mode = 'desktop';
    this.visible = false;
    this.closed = false;
    this.scroll = false;
    this.overtime = false;

    // Default Werte setzen
    this.options = {
         jQuerySrc: ''
        ,position: "bottom"
        ,slideBody: true
        ,shadow: false
        ,zIndex: 1000
        ,slideDelay: 2   // Delay in Sekunden, bis die Bar ins Bild rollt (Kommazahlen sind erlaubt)
        ,slideInDuration: 2    // Dauer der Slide In Animation in Sekunden (Kommazahlen sind erlaubt),
        ,slideOutDuration: 2    // Dauer der Slide Out Animation in Sekunden (Kommazahlen sind erlaubt),
        ,cookieName: 'eresult_survey'
        ,cookieDuration: 90 // Tage
        ,chance: 1 // Wahrscheinlichkeit mit der der SlideIn beim Websitebesucher eingeblendet wird (0 .. 1)
        ,slideOnScroll: false
        ,laterReshow: 10080 // Minuten | 10080 Minuten = 1 Woche
        ,href_desktop: ''
        ,headline_desktop: ''
        ,message_desktop: ''
        ,href_mobil: ''
        ,headline_mobil: ''
        ,message_mobil: ''
        ,note: ''
        ,buttonlabel: ''
        ,laterlabel: ''
        ,closerlabel: ''
        ,logo_klein: 'logo-mobile.png'
        ,logo_klein_width: 118
        ,logo_klein_height: 28
        ,logo_gross: 'logo-desktop.png'
        ,logo_gross_width: 118
        ,logo_gross_height: 28
        ,structure_mobile: {
             direction: 'row'
            ,groups: []
        }
        ,structure_desktop: {
             direction: 'row'
            ,groups: []
        }
    }

    /*
     * Initialisierung des Layers
     */
    this.init = function() {

        this.options = this.apply(this.options, options);
        this.validateOptions();

        // Gibt es bereits ein Cookie?
        // Dürfen wir den Layer anzeigen?
        var cval = this.getCookie(this.options.cookieName);
        if (typeof(cval) == "string" && cval.length) {
            return;
        }

        if (this.options.chance) {
            var cval = this.getCookie(this.options.cookieName+"_chance");
            if (cval === null) {
                // The chance cookie is not yet set. Lottery time!
                var c = parseFloat(this.options.chance);
                if (c <= 0 || c > 1) {
                    alert("eResult Layer: Option 'chance' muss eine Kommazahl zwischen 0 und 1 sein. Beispiele: 0.1, 0.5, 1");
                    return;
                }

                cval = (Math.random() < c) ? '1' : '0';
                this.setCookie(this.options.cookieName+"_chance", cval, this.options.cookieDuration);
            }
            // If the current user lost the lottery, he may not participate.
            if (cval == '0')
                return;
        }

        this.browserRepair();

        this.drawLayer();
        this.registerEvents();
        this.showLayer();

    }

    this.drawLayer = function() {
        this.container = j(this.sliderHtml);
        this.body = j('body');

        if (this.options.position == 'top') {
            this.body.prepend(this.container);
        } else {
            this.body.append(this.container);
        }

        this.setMode();

        var groups = (this.mode == 'mobile') ?
                this.options.structure_mobile.groups :
                this.options.structure_desktop.groups,
            i=0,
            len=groups.length,
            innerContainer = j('.si-tool-inner');

        for ( ; i<len; i++) {
            this.addGroupContainer(groups[i], innerContainer);
        }

        this.addClassesToLayer();

        if (this.mode == 'mobile') {
            j('.si-tool-btn--primary').attr('href', this.options.href_mobil);
            j('.si-tool-headline').html(this.options.headline_mobil);
            j('.si-tool-msg').html(this.options.message_mobil);
        } else {
            j('.si-tool-btn--primary').attr('href', this.options.href_desktop);
            j('.si-tool-headline').html(this.options.headline_desktop);
            j('.si-tool-msg').html(this.options.message_desktop);
        }
        j('.si-tool-note').html(this.options.note);

        j('.si-tool-btn--primary').text(this.options.buttonlabel);
        j('.si-tool-btn--secondary').text(this.options.laterlabel);
        j('.si-tool-close-label').text(this.options.closerlabel);
    }

    this.removeLayer = function() {
        this.container.remove();
    }

    this.addGroupContainer = function(obj, container) {
        var i=0,
            len=obj.items.length,
            innerGroup = j(this.innerGroup),
            dir = (obj.direction == 'row') ? 'row' : 'col';

        innerGroup.addClass(dir);
        container.append(innerGroup);

        for ( ; i<len; i++) {
            this.addGroupInnerContainer(obj.items[i], innerGroup);
        }
    }

    this.addGroupInnerContainer = function(list, container) {
        var i=0,
            len=list.length,
            innerItem = j(this.innerItem);

        container.append(innerItem);

        for ( ; i<len; i++) {
            this.addGroupContainerElement(list[i], innerItem);
        }
    }

    this.addGroupContainerElement = function(name, container) {
        if (!this.elementList[name]) {
            return;
        }

        if (name == 'logo') {
            name += (this.mode == 'mobile') ? '_mobile' : '_desktop';
        } else {
            name = this.elementList[name];
        }

        var elem = j(this[name]);
        container.append(elem);
    }

    this.addClassesToLayer = function() {
        var container = this.container,
            innerContainer = j('.si-tool-inner'),
            options = this.options,
            mode = this.mode,
            dir_m = (options.structure_mobile.direction == 'row') ? 'row' : 'col',
            dir_d = (options.structure_desktop.direction == 'row') ? 'row' : 'col';

        container.addClass('si-tool--bar');
        container.addClass('si-tool--' + options.position.toLowerCase());
        container.css('z-index', options.zIndex);
        container.css('display', 'none');

        if (options.slideBody === false) {
            container.addClass('si-tool--modal');
        }

        if (options.shadow === true) {
            container.addClass('si-tool--shadow');
        }

        innerContainer.removeClass('si-tool-inner--grid-mobile-row');
        innerContainer.removeClass('si-tool-inner--grid-desktop-row');
        innerContainer.addClass('si-tool-inner--grid-mobile-' + dir_m);
        innerContainer.addClass('si-tool-inner--grid-desktop-' + dir_d);

        var logo = j('.si-tool-logo');
        if (mode == 'mobile') {
            logo.attr('src', options.logo_klein);
            logo.attr('width', options.logo_klein_width);
            logo.attr('height', options.logo_klein_height);
        } else {
            logo.attr('src', options.logo_gross);
            logo.attr('width', options.logo_gross_width);
            logo.attr('height', options.logo_gross_height);
        }
    }

    this.showLayer = function() {
        var cval_visited = this.getCookie(this.options.cookieName+"_visited"),
            cval_created = this.getCookie(this.options.cookieName+"_created"),
            now = new Date().getTime(),
            restTime = 0,
            slideDelay = this.options.slideDelay*1000,
            instantly = true;

        if (cval_created === null) {
            this.setCookie(this.options.cookieName+"_created", now, this.options.slideInDuration*1000 + slideDelay);
        } else {
            var restTime = now - cval_created;
            slideDelay = slideDelay - restTime;
        }

        if (cval_visited === null) {
            // The visited cookie is not yet set. Set it when the animation is finished (the
            // user should see the full effect once)
            instantly = false;
        }

        if (instantly) {
            this.visible = true;
            this.container.show();
        } else {
            setTimeout(function() {
                this.overtime = true;
                this._slideIn();
            }.bind(this), slideDelay);
        }
    }

    this._slideIn = function() {
        if (!this.overtime || this.visible) {
            return;
        }

        if (this.options.slideOnScroll && !this.scroll) {
            return;
        }

        this.visible = true;
        this.container.slideDown(this.options.slideInDuration*1000, function() {
            this.setCookie(this.options.cookieName+"_visited", 1, this.options.cookieDuration);
        }.bind(this));

        // var height = this.container.outerHeight(true);
        // this.container.css('top', '-'+height+'px');
        // this.container.show();
        // this.container.animate({
        //     top: "0"
        // }, this.options.slideInDuration*1000, 'swing');

        // this.container.fadeIn(this.options.slideInDuration*1000, function() {});
    }

    this._slideOut = function() {
        this.closed = true;
        this.container.slideUp(this.options.slideOutDuration*1000, function() {});
        // this.container.fadeOut(this.options.slideInDuration*1000, function() {});
    }

    this.hideLayer = function(reason) {
        if (reason == 'spaeter') {
            this.setCookie(this.options.cookieName, reason, this.options.laterReshow, 'minutes');
            this.deleteCookie(this.options.cookieName+"_visited");
            this.deleteCookie(this.options.cookieName+"_created");
        } else {
            this.setCookie(this.options.cookieName, reason, this.options.cookieDuration);
        }

        this._slideOut();
    }

    /*
     * Prüfen, ob die übergebenen Optionen valide sind
     */
    this.validateOptions = function() {
        if (this.options.position != 'top' && this.options.position != 'bottom') {
            alert("eResult Layer: Option 'position' muss entweder 'top' oder 'bottom' sein, siehe Dokumentation.");
        }
    }

    this.registerEvents = function() {
        var closeBtn = j('.si-tool-close'),
            teilnehmenBtn = j('.si-tool-btn--primary'),
            spaeterBtn = j('.si-tool-btn--secondary');

        closeBtn.on('click', this.hideLayer.bind(this, 'hide'));
        teilnehmenBtn.on('click', this.hideLayer.bind(this, 'click'));
        spaeterBtn.on('click', this.hideLayer.bind(this, 'spaeter'));

        j(window).resize(this.onResize.bind(this));
        j(window).scroll(this.onScroll.bind(this));
    }

    this.setMode = function() {
        this.mode = this.getMode();
    }

    this.getMode = function() {
        var name = j('.si-tool-inner').css('animation-name');
        return (name == 'mobile') ? 'mobile' : 'desktop';
    }

    this.onResize = function() {
        var mode = this.getMode();
        if (this.mode != mode && this.closed == false) {
            this.removeLayer();
            this.drawLayer();
            this.registerEvents();
            if (this.visible == true) {
                this.showLayer();
            }
        }
    }

    this.onScroll = function() {
        this.scroll = true;
        this._slideIn();
    }

    /**
     * Copies all the properties of config to obj.
     * @param {Object} obj The receiver of the properties
     * @param {Object} config The source of the properties
     * @param {Object} defaults A different object that will also be applied for default values
     * @return {Object} returns obj
     */
    this.apply = function(o, c, defaults){
        if(defaults){
            this.apply(o, defaults);
        }
        if(o && c && typeof c == 'object'){
            for(var p in c){
                o[p] = c[p];
            }
        }
        return o;
    }

    this.setCookie = function(cname, cvalue, exdays, daysOrHours) {
        var d = new Date();
        if (daysOrHours == 'minutes') {
            d.setTime(d.getTime() + (exdays*60*1000));
        } else if (daysOrHours == 'hours') {
            d.setTime(d.getTime() + (exdays*60*60*1000));
        } else {
            d.setTime(d.getTime() + (exdays*24*60*60*1000));
        }
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";domain=.ewe.de;path=/";
    }

    this.getCookie = function(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return null;
    }

    this.deleteCookie = function(cname) {
        document.cookie = cname + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=.ewe.de;path=/';
    }

    this.browserRepair = function() {
        if(!!navigator.userAgent.match(/Trident.*rv\:11\./)) {
            j('html').addClass('ie11');
        }
    }

    /*
     * Nachladen von Javascript-Dateien
     */
    this.load_js = function(callback) {
        var head = document.getElementsByTagName('head')[0],
            script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = options.jQuerySrc ? options.jQuerySrc : this.jQuerySrc;
        head.appendChild(script);
        script.onload = function(){
            callback();
        }
    }

    /*
     * jQuery laden, ohne das es mit eine vorhandene jQuery-Version in Konflikt kommt
     * Sobald jQuery geladen wurde, wird die Funktion "init" aufgerufen
     */
    if (typeof jQuery !== 'undefined') {
        var jqsite = jQuery.noConflict(),
            j;
        this.load_js(function() {
            j = jQuery.noConflict();
            jQuery = $ = jqsite;
            j(document).ready(this.init.bind(this));
        }.bind(this));
    } else {
        var j;
        this.load_js(function() {
            j = jQuery.noConflict();
            j(document).ready(this.init.bind(this));
        }.bind(this));
    }

}


/*
 * Utilities hinzufügen
 *
 */

if (!Function.prototype.bind) {
  Function.prototype.bind = function(oThis) {
    if (typeof this !== 'function') {
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }

    var aArgs   = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        fNOP    = function() {},
        fBound  = function() {
          return fToBind.apply(this instanceof fNOP
                 ? this
                 : oThis,
                 aArgs.concat(Array.prototype.slice.call(arguments)));
        };

    if (this.prototype) {
      // Function.prototype doesn't have a prototype property
      fNOP.prototype = this.prototype;
    }
    fBound.prototype = new fNOP();

    return fBound;
  };
}
