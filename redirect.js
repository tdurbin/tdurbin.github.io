// SET PARAMETERS HERE //
var destination = {
    site: "1685908",

    // Optional: Environment only needs to be specified when redirecting to a destination site
    //           located in a farm different from the source site.
    //
    // Possible values are "qa" "alpha". Defaults to production.

    // environment: "alpha",

    // Optional: In order to be able to test CoBrowse on redirected accounts we need to have lpTag deployed. Setting
    //           this flag to true will add lpTag to the site if it was not originally deployed on the source site.
    //           It will not override existing lpTags.
    addLpTag: true
};
// NO EDITS BELOW THIS LINE!
(function(win, dest) {
    var win = window;
    var OVERRIDES = {
        qa: {
            server: "hc1.dev.lprnd.net",
            domain: "tlv_plankton3.dev.lprnd.net",
            tagjs: "tlv_plankton4.dev.lprnd.net"
        },
        alpha: {
            server: "base.liveperson.net",
            domain: "lptag-a.liveperson.net",
            tagjs: "tags-a.liveperson.net"
        }
    };
    dest.overrides = dest.environment && OVERRIDES[dest.environment];

    function redirectLpTag(lpTag) {
        if (dest.overrides) {
            lpTag.ovr = dest.overrides;
        }
        // REDIRECT LPTAG
        Object.defineProperty(lpTag, "site", {
            get: function() {
                return dest.site;
            },
            set: noop
        });
    }

    function redirectLpMTagConfig(lpMTagConfig) {
        // REDIRECT LPMTAGCONFIG
        Object.defineProperty(lpMTagConfig, "lpNumber", {
            get: function() {
                return dest.site;
            },
            set: noop
        });
        if (dest.server) {
            Object.defineProperty(lpMTagConfig, "lpServer", {
                get: function() {
                    return dest.server;
                },
                set: noop
            });
            // mTag.js
            Object.defineProperty(lpMTagConfig, "lpTagSrv", {
                get: function() {
                    return dest.server;
                },
                set: noop
            });
        }
    }

    function noop() {}

    function addLpTag() {
        // LPTAG CODE START
        window.lpTag = window.lpTag || {};
        if (typeof window.lpTag._tagCount === 'undefined') {
            window.lpTag = {
                site: dest.site,
                section: lpTag.section || '',
                autoStart: lpTag.autoStart === false ? false : true,
                ovr: dest.overrides || {},
                _v: '1.5.1',
                _tagCount: 1,
                protocol: location.protocol,
                events: {
                    bind: function(app, ev, fn) {
                        lpTag.defer(function() {
                            lpTag.events.bind(app, ev, fn);
                        }, 0);
                    },
                    trigger: function(app, ev, json) {
                        lpTag.defer(function() {
                            lpTag.events.trigger(app, ev, json);
                        }, 1);
                    }
                },
                defer: function(fn, fnType) {
                    if (fnType === 0) {
                        this._defB = this._defB || [];
                        this._defB.push(fn);
                    } else if (fnType == 1) {
                        this._defT = this._defT || [];
                        this._defT.push(fn);
                    } else {
                        this._defL = this._defL || [];
                        this._defL.push(fn);
                    }
                },
                load: function(src, chr, id) {
                    var t = this;
                    setTimeout(function() {
                        t._load(src, chr, id);
                    }, 0);
                },
                _load: function(src, chr, id) {
                    var url = src;
                    if (!src) {
                        url = this.protocol + '//' + ((this.ovr && this.ovr.domain) ? this.ovr.domain : 'lptag.liveperson.net') + '/tag/tag.js?site=' + this.site;
                    }
                    var s = document.createElement('script');
                    s.setAttribute('charset', chr ? chr : 'UTF-8');
                    if (id) {
                        s.setAttribute('id', id);
                    }
                    s.setAttribute('src', url);
                    document.getElementsByTagName('head').item(0).appendChild(s);
                },
                init: function() {
                    this._timing = this._timing || {};
                    this._timing.start = (new Date()).getTime();
                    var that = this;
                    if (window.attachEvent) {
                        window.attachEvent('onload', function() {
                            that._domReady('domReady');
                        });
                    } else {
                        window.addEventListener('DOMContentLoaded', function() {
                            that._domReady('contReady');
                        }, false);
                        window.addEventListener('load', function() {
                            that._domReady('domReady');
                        }, false);
                    }
                    if (typeof(window._lptStop) == 'undefined') {
                        this.load();
                    }
                },
                start: function() {
                    this.autoStart = true;
                },
                _domReady: function(n) {
                    if (!this.isDom) {
                        this.isDom = true;
                        this.events.trigger('LPT', 'DOM_READY', {
                            t: n
                        });
                    }
                    this._timing[n] = (new Date()).getTime();
                },
                vars: lpTag.vars || [],
                dbs: lpTag.dbs || [],
                ctn: lpTag.ctn || [],
                sdes: lpTag.sdes || [],
                ev: lpTag.ev || []
            };
        }
    }

    function le2Redirect(win) {
        console.log("Redirecting Account...");
        // Define lpTag
        if (dest.addLpTag) {
            console.log("Adding lpTag...");
            // LPTAG CODE START
            addLpTag();
            console.log("Initializing lpTag...");
            lpTag.init();
            // LPTAG CODE END
        }
        console.log("Redirecting lpTag...");
        if (win.lpTag) {
            redirectLpTag(win.lpTag);
        }
        console.log("Redirecting lpMTagConfig...");
        var tmpLpMTagConfig = win.lpMTagConfig || {};
        redirectLpMTagConfig(tmpLpMTagConfig);
    }
    le2Redirect(window);
})(window, destination);