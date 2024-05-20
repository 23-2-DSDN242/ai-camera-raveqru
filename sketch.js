let sourceImg=null;
let maskImg=null;
let renderCounter=0;

// change these three lines as appropiate
let sourceFile = "input_7.png"
// "input_2.png"]

let maskFile   = "mask_7.png" //"mask_2.png"]
let outputFile = "output_4.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () {
  let main_canvas = createCanvas(1920, 1080);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(0);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  for(let i=0;i<4000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    fill(pix);

  
    if(mask[0] > 128) {
      fill(54,103,53)
      let pointSize = 10;
      ellipse(x, y, pointSize, pointSize);
      let pointSize1 = 3;
      fill(103,145,103)
      ellipse (x, y, pointSize1, pointSize1);
      if (random() < 0.07) { // Adjust this  as needed
        fill(255,255,0); // Yellow color
        let pointSize1 = 7;
        ellipse(x, y, pointSize1, pointSize1);
      }
    }
    
    else {
      let pointSize = 10;
      ellipse(x, y, pointSize, pointSize);    
    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 25) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    // saveArtworkImage(outputFile);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
