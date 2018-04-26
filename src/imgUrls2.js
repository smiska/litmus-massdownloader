const currentTestId = "";
const testId = process.argv[2] || currentTestId;
// const currentRefId = "";
// const refId = process.argv[2] || currentRefId;

const clients = [
    "androidgmailapp",
    "aolonline",
    "appmail10",
    "appmail9",
    "chromeaolonline",
    "chromecomcast",
    "chromefreenetde",
    "chromegmailnew",
    "chromegoogleapps",
    "chromegoogleinbox",
    "chromemailru",
    "chromeoffice365",
    "chromeoutlookcom",
    "chromeyahoo",
    "comcast",
    "ffaolonline",
    "ffcomcast",
    "fffreenetde",
    "ffgmailnew-vertical",
    "ffgmxde",
    "ffgoogleapps",
    "ffgoogleinbox",
    "ffmailru",
    "ffoffice365",
    "ffoutlookcom",
    "ffwebde",
    "ffyahoo",
    "freenetde",
    "gmailnew",
    "gmxde",
    "googleapps",
    "ipad",
    "ipadmini",
    "iphone5s",
    "iphone5sios8",
    "iphone6",
    "iphone6plus",
    "iphone6s",
    "iphone6splus",
    "iphone7",
    "iphone7plus",
    "mailru",
    "notes7",
    "notes8",
    "notes85",
    "notes9",
    "office365",
    "ol2000",
    "ol2002",
    "ol2003",
    "ol2007",
    "ol2010",
    "ol2011",
    "ol2013",
    "ol2013dpi120",
    "ol2015",
    "ol2016",
    "outlookcom",
    "thunderbirdlatest",
    "webde",
    "windows10mail",
    "yahoo"
];

const imgUrls = clients.map(client => {
    const url = `https://resultcaptures.s3.amazonaws.com/${testId}/results/${client}-vertical-allowed-1366.png`;
    console.log(url);
    return url;
});

module.exports = {
    imgUrls, 
    testId,
    ref
}    
