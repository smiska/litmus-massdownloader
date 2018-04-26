var fs = require('fs'),
    PNG = require('pngjs').PNG,
    pixelmatch = require('pixelmatch');

if (!fs.existsSync("diff")) {
    fs.mkdirSync("diff");
}
    

var imgsToLoop = fs.readdirSync("./ref");
console.log(imgsToLoop);
imgsToLoop.forEach(img => {
    
    var img1 = fs.createReadStream('./ref/' + img).pipe(new PNG()).on('parsed', doneReading),
        img2 = fs.createReadStream('./df44a4dc-8cc5-42bb-9e0a-f4f667a844e5/' + img).pipe(new PNG()).on('parsed', doneReading),
        filesRead = 0;
    
    function doneReading() {
        if (++filesRead < 2) return;
        console.log("typof img2, " , typeof img2);
        var diff = new PNG({width: img1.width, height: img1.height});
        console.log("typof diff, " , typeof diff);
        console.log("img1.data", img1.data)
        console.log("img2.data", img2.data)
        console.log("diff.data", diff.data)
        console.log("img1.width", img1.width)
        console.log("img1.height", img1.height)
    
        console.log(pixelmatch(img1.data, img2.data, diff.data, img1.width, img1.height, {threshold: 0.1}));
    
        diff.pack().pipe(fs.createWriteStream('./diff/' + img));
    }
})
