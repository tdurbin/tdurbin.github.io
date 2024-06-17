var lpGetAuthenticationToken = function (callback) {
    console.log("inside lpGetAuthenticationToken!");
    var token = "tom_human";
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
        iss: "https://something.someplace.com/",
        acr: "loa1",
        sub: "auth0|57a309c8d8b4745e4381c6ec"
    });
}