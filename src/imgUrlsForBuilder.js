let testId = "";
let currentTest = "";

testId = process.argv[2] || testId;
checklistId = process.argv[3] || currentTest;
console.log(testId)
console.log(testId)

// if(!testId || !checklistId) {
//     throw new Error("You need to provide testId and currentTest identifiers!");
// }

const imgUrls = [
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/appmail11-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/androidgmailapp-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/aolonline-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/appmail10-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/appmail9-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/chromeaolonline-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/chromecomcast-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/chromefreenetde-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/chromegmailnew-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/chromegoogleapps-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/chromegoogleinbox-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/chromemailru-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/chromeoffice365-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/chromeoutlookcom-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/chromeyahoo-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/comcast-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/ffaolonline-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/ffcomcast-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/fffreenetde-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/ffgmailnew-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/ffgmxde-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/ffgoogleapps-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/ffgoogleinbox-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/ffmailru-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/ffoffice365-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/ffoutlookcom-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/ffwebde-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/ffyahoo-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/freenetde-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/gmailnew-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/gmxde-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/googleapps-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/ipad-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/ipadmini-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/iphone5s-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/iphone5sios8-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/iphone6-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/iphone6plus-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/iphone6s-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/iphone6splus-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/iphone7-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/iphone7plus-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/mailru-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/notes7-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/notes8-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/notes85-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/notes9-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/office365-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/ol2000-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/ol2002-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/ol2003-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/ol2007-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/ol2010-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/ol2011-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/ol2013-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/ol2013dpi120-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/ol2015-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/ol2016-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/outlookcom-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/thunderbirdlatest-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/webde-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/windows10mail-vertical-allowed-1366.png",
    "https://resultcaptures.s3.amazonaws.com/" + checklistId + "/results/yahoo-vertical-allowed-1366.png"
];

module.exports = {
    imgUrls, 
    testId
}    
