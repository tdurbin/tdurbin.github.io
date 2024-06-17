var lpGetAuthenticationToken = function (callback) {
    console.log("inside lpGetAuthenticationToken!");
    var token = "tom_dpd";
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
        sub: "jhughes|mands"
    });
}