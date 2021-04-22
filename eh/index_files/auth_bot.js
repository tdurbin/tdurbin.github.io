var lpGetAuthenticationToken = function (callback) {
    console.log("inside lpGetAuthenticationToken!");
    var token = "tom_bot";
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
        sub: "auth0|57a309c8d8b4745e4381c6ec"
    });
}