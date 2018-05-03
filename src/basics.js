'use strict'

const fetch = require("node-fetch");
const createUrls = require("./imgUrls")
const PNG = require("pngjs").PNG;
const pixelmatch = require("pixelmatch");
const fs = require("fs");
const process = require('process');

// REQUIRED CLI PARAMETERS FOR THE TEST
const testId = process.argv[2]
const refId = process.argv[3]
// const testCase = process.argv[4]

if(!testId || !refId) {
	throw new Error ("All CLI parameters are required!")
}

// DIRECTORY BUILDER
process.chdir("../");

const currentTestDir = testId;

const testDir = `./${currentTestDir}/test`;
const refDir = `./ref`;
const diffDir = `./${currentTestDir}/diff`;

if (!fs.existsSync(currentTestDir)) {
	fs.mkdirSync(currentTestDir);
	fs.mkdirSync(testDir);
	fs.mkdirSync(diffDir)
}

if (!fs.existsSync(refDir)) {
	fs.mkdirSync(refDir);
}

// LITMUS URL BUILDER FOR FETCHING
const imgUrls = createUrls(testId);
const imgUrls2 = createUrls(refId);

console.log("the testID is: ", testId);
console.log(imgUrls);
console.log(imgUrls2);

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
		
		// DIFFING MAGIC AND WRITING DIFF OR ERROR IMAGES
		const diff = new PNG({width: png1.width, height: png1.height});
		const numberOfDiffingPixels = pixelmatch(png1.data, png2.data, diff.data, png1.width, png1.height, {threshold: 0.01}, { includeAA: false});
		console.log(numberOfDiffingPixels);
		
		(numberOfDiffingPixels !== 0) ? writeDiff() : function () {console.log("file was not written")};
		
		function writeDiff() {
			const buffer = PNG.sync.write(diff);
			fs.writeFileSync((`${diffDir}/${img}`), buffer);
		}
		
		
	} else {
		fs.createWriteStream(`${diffDir}/${error}${img}`);
	}
}

async function diffRunner(params) {
	// FETCH IMAGES AND WRITE TO CORRECT FOLDER
	for (let index = 0; index < imgUrls.length; index++) {
		(await fetch(imgUrls[index])).body.pipe(fs.createWriteStream(`${testDir}/${imgUrls[index].split("/").pop()}`));
	}

	if (fs.readdirSync(refDir).length === 0) {
		for (let index = 0; index < imgUrls2.length; index++) {
			(await fetch(imgUrls2[index])).body.pipe(fs.createWriteStream(`${refDir}/${imgUrls2[index].split("/").pop()}`));
		}
	}
	
	const imgsToLoop = fs.readdirSync(`${refDir}`);
	
	imgsToLoop.forEach(img => {
		const img1 = fs.readFileSync(`${refDir}/${img}`);
		const img2 = fs.readFileSync(`${testDir}/${img}`);
		
		// CHECK IMAGE VALIDITY AND DIFF THEM IF THEY ARE VALID
		console.log(`validation results for compared ${img} images: `, validImg(img1), validImg(img2));
		
		if(validImg(img1) && validImg(img2)){
			const png1 = PNG.sync.read(img1);       
			const png2 = PNG.sync.read(img2);
			
			diffTwoImage(null, img, png1, png2);     
			
		} else {
			console.log(`   ${img}, invalid images, skipping stuff`);
			diffTwoImage("ERROR-IN-PROCESSING-", img, null, null);
		}
	});
};

diffRunner();

//process.exit();
