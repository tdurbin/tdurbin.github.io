var lpGetAuthenticationToken = function (callback) {
    console.log("inside lpGetAuthenticationToken!");
    var token = "deb_bot";
    if (token) {
        console.log("got token! " + token);
        console.log("calling callback with token...");
        callback(token);
    }
};

lpTag.identities = [];
lpTag.identities.push(identityFn);
function identityFn(callback) {
    callback({
        iss: "https://auth.emea.liveperson.tech/",
        acr: "loa1",
        sub: "auth0|qgTAhbANtNTU3wB3"
    });
}