const fs = require("fs");
const fetch = require("node-fetch");
const createUrls = require("./imgUrls")
const PNG = require("pngjs").PNG;
const pixelmatch = require("pixelmatch");

let testId = "";
let currentTest = "";

testId = process.argv[2] || testId;
checklistId = process.argv[3] || currentTest;

const imgUrls = createUrls(checklistId);
console.log("the testID is: ", checklistId);
// console.log(imgUrls)

const currentTestDir = testId;

const testDir = `./${currentTestDir}/test`;
const refDir = `./${currentTestDir}/ref`;
const diffDir = `./${currentTestDir}/diff`;

if (!fs.existsSync(currentTestDir)) {
    fs.mkdirSync(currentTestDir);
    fs.mkdirSync(refDir);
    fs.mkdirSync(testDir);
    fs.mkdirSync(diffDir)
}

(async function () {
    //const result = await Promise.all(imgUrls.map(imgUrl => fetch(imgUrl));
    imgUrls.forEach(async imgUrl => {
        const result = await fetch(imgUrl);

        const fileName = imgUrl.split("/").pop();
        /*use this for ref generation */ const dest = fs.createWriteStream(`${refDir}/${fileName}`);
        // /*use this for test generation */ const dest = fs.createWriteStream(`${testDir}/${fileName}`);
        
        result.body.pipe(dest);
    
        console.log("done");
    });
})();

function validImg (img) {
    let result = true;
    const imageVal = new PNG().parse(img, function(error, data) {
        if(error) result = false;        
    });
    return result;
}

function diffTwoImage(error, img, png1, png2) {
    error = error || {};
    png1 = png1 || {};
    png2 = png2 || {};
    
        if (typeof error === "object") {
            if (png1.width !== png2.width || png1.height !== png2.height) {
                console.log(`ERROR!!! width or height differed for ${img}`);
                return;
            }

            const diff = new PNG({width: png1.width, height: png1.height});
            pixelmatch(png1.data, png2.data, diff.data, png1.width, png1.height, {threshold: 0}, { includeAA: false});

            const buffer = PNG.sync.write(diff);
            fs.writeFileSync((`${diffDir}/${img}`), buffer);

        } else {
            fs.createWriteStream(`${diffDir}/${error}${img}`);
        }
}

// (function diffRunner(params) {
//     const imgsToLoop = fs.readdirSync(`${refDir}`);

//     imgsToLoop.forEach(img => {
//         const img1 = fs.readFileSync(`${refDir}/${img}`);
//         const img2 = fs.readFileSync(`${testDir}/${img}`);

//         console.log(`validation results for compared ${img} images: `, validImg(img1), validImg(img2));
        
//         if(validImg(img1) && validImg(img2)){
//             const png1 = PNG.sync.read(img1);       
//             const png2 = PNG.sync.read(img2);

//             diffTwoImage(null, img, png1, png2);     

//         } else {
//             console.log(`   ${img}, invalid images, skipping stuff`);
//             diffTwoImage("ERROR-IN-PROCESSING-", img, null, null);
//         }
//     });
// })();

process.exit();



