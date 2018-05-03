var shell = require('shelljs');
var fs = require('fs');

try {
    var t = fs.readdirSync("empty"); 
    console.log(t);
    
 } catch (e) {
    console.log("szar van");
    // console.log(e);
}
 
// shell.exec('node basics.js 191ca2bc-41c8-4dfc-93d7-a89a2e687324 187d9278-c32c-45d3-a00e-0665a29c7f2a');
// shell.exec('node basics.js f31ff4b9-b4b4-4b00-add4-15bc5f8e6c77 187d9278-c32c-45d3-a00e-0665a29c7f2a');
// shell.exec('node basics.js a36ed76d-3c5f-4ff5-8c39-d389176f98ab 187d9278-c32c-45d3-a00e-0665a29c7f2a');
// shell.exec('node basics.js 97f3b447-8300-46bb-81c5-049f83aea365 187d9278-c32c-45d3-a00e-0665a29c7f2a');

// shell.exit(0);