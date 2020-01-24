const total = 200;
let points = [];
let r;
let factor = 0;

function drawLine(i, f) {
  let a = points[i];
  let b = createVector();
  let angle = map((i * f) % total, 0, total, 0, TWO_PI);
  b.x = r * cos(angle + PI);
  b.y = r * sin(angle + PI);
  line(a.x, a.y, b.x, b.y);
}

function setup() {
  createCanvas(400, 400);
  r = (width/2) * 0.9; //radius

  // initialize points
  for (let i = 0; i < total; i++) {
    let a = map(i, 0, total, 0, TWO_PI);
    let x = r * cos(a + PI);
    let y = r * sin(a + PI);
    points.push(createVector(x, y));
  }
}

function draw() {
  factor += 0.01;

  translate(width / 2, height / 2);
  background(0);
  stroke(255);
  strokeWeight(1);
  noFill();
  circle(0, 0, 2 * r);

  fill(255);
  for (let p of points) {
    circle(p.x, p.y, 10);
  }

  for (let i = 0; i < points.length; i++) {
    drawLine(i, factor);
  }
}
