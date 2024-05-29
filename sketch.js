let sourceImg = null;
let maskImg = null;
let renderCounter = 0;

// change these three lines as appropriate
let sourceFile = "input_2.png";  // Input source file
let maskFile = "mask_2.png";     // Mask file
let outputFile = "output_2.png";  // Output file

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup() {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(0);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw() {
  for (let i = 0; i < 7000; i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    fill(pix);

    if (mask[1] > 100) {
      fill(16, 73, 63);

      //size values
      let pointSizeV1 = 15;
      let pointSizeV2 = 1;

      //draws dark green grass pixels
      ellipse(x, y, pointSizeV2, pointSizeV1);

      //draws light green grass pixel
      fill(65, 152, 10, random(50, 50));
      ellipse(x + 1, y + 1, pointSizeV2, pointSizeV1);

      //draws flowers
      if (random() < 0.001) {
        push();
        translate(x, y);
        noStroke();
        for (let i = 0; i < 5; i++) {
          fill(255, 255, 102)
          ellipse(0, 5, 3, 5);
          rotate(PI / 5);
        }
        pop();
      }

      //Draws non-masked area
    } else {
      let pointSize = 10;
      ellipse(x, y, pointSize, pointSize);
    }
  }

  renderCounter = renderCounter + 1;
  if (renderCounter > 40) {
    console.log("Done!");
    noLoop();
    // uncomment this to save the result
    //saveArtworkImage(outputFile);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
