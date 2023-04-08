chrome.runtime.onMessage.addListener(receiver);
let configs;
const startDoodling = function (sketch) {
  sketch.setup = function () {
    document.body.style["userSelect"] = "none";
    const height = document.body.clientHeight;
    const width = document.body.clientWidth;
    const canvas = sketch.createCanvas(width, height);
    canvas.position(0, 0);
    canvas.style("pointer-events", "none");
    sketch.clear();
  };

  sketch.draw = function () {
    const color = configs ? configs.color : "black";
    const width = configs ? configs.width : 4;
    sketch.stroke(color);
    sketch.strokeWeight(width);
    if (sketch.mouseIsPressed) {
      sketch.line(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
    }
  };

  sketch.keyPressed = function(){
    if(sketch.key == 'e'){
      sketch.clear();
    }
  }
};
function receiver(request) {
  if (request.message === "clicked") {
    startDoodling();
  }
  if ((request.message = "config-changes")) {
    configs = request;
  }
}
const myp5 = new p5(startDoodling);
