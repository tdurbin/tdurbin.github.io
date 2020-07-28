var lpGetAuthenticationToken = function (callback) {
    console.log("inside lpGetAuthenticationToken!");
    var token = "sam_bot";
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
        iss: "https://twd-oauth2.herokuapp.com/",
        acr: "loa1",
        sub: "srosendorff|20200217"
    });
}