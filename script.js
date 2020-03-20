var img1 = null;
function upld() {
  var c1 = document.getElementById("c1");
  var img11 = document.getElementById("img1");
  img1 = new SimpleImage(img11);
  img1.drawTo(c1);
}
function orgnl() {
  var c1 = document.getElementById("c1");
  img1.drawTo(c1);
}
function redd() {
  var img2 = new SimpleImage(img1);
  for (var p of img2.values()) p.setRed(255);
  var c1 = document.getElementById("c1");
  img2.drawTo(c1);
}
function grey() {
  var img2 = new SimpleImage(img1);
  for (var p of img2.values()) {
    var avg = (p.getRed() + p.getGreen() + p.getBlue()) / 3;
    p.setRed(avg);
    p.setGreen(avg);
    p.setBlue(avg);
  }
  var c1 = document.getElementById("c1");
  img2.drawTo(c1);
}
function clearcn() {
  var d1 = document.getElementById("c1");
  var ctx1 = d1.getContext("2d");
  ctx1.clearRect(0, 0, d1.width, d1.height);
}
function fun() {
  var img2 = new SimpleImage(img1);
  for (var p of img2.values()) {
    if (p.getRed() + p.getBlue() + p.getGreen() < 300) {
      p.setRed(255 * Math.random());
      p.setGreen(255 * Math.random());
      p.setBlue(255 * Math.random());
    }
  }
  var c1 = document.getElementById("c1");
  img2.drawTo(c1);
}
function rnbw() {
  var img2 = new SimpleImage(img1);

  for (var p of img2.values()) {
    var y = p.getY();
    var h = img2.getHeight();
    if (y < h / 7) p.setRed(255);
    else if (y >= h / 7 && y < (2 * h) / 7) {
      p.setRed(255);
      p.setGreen(127);
    } else if (y >= (2 * h) / 7 && y < (3 * h) / 7) {
      p.setRed(255);
      p.setGreen(255);
    } else if (y >= (3 * h) / 7 && y < (4 * h) / 7) {
      p.setGreen(255);
    } else if (y >= (4 * h) / 7 && y < (5 * h) / 7) {
      p.setBlue(255);
    } else if (y >= (5 * h) / 7 && y < (6 * h) / 7) {
      p.setRed(75);
      p.setGreen(130);
    } else if (y >= (6 * h) / 7 && y <= h) {
      p.setRed(148);
      p.setBlue(211);
    }
  }
  var c1 = document.getElementById("c1");
  img2.drawTo(c1);
}
function scram() {
  var img2 = new SimpleImage(img1);
  for (var p of img2.values()) {
    var y = p.getY();
    var x = p.getX();
    var a = Math.random();
    if (a <= .75) {
      var b = 5 * Math.random();
      if (y + b < img2.getHeight() && x + b < img2.getWidth())
        img2.setPixel(p.getX() + b, p.getY() + b, p);
    }
  }
  var c1 = document.getElementById("c1");
  img2.drawTo(c1);
}
function scram2() {
  var img2 = new SimpleImage(img1);
  for (var p of img2.values()) {
    var y = p.getY();
    var x = p.getX();
    var a = Math.random();
    if (a <= 0.5) {
      var b = 100 * Math.random();
      if (y + b < img2.getHeight() && x + b < img2.getWidth())
        img2.setPixel(p.getX() + b, p.getY() + b, p);
    }
  }
  var c1 = document.getElementById("c1");
  img2.drawTo(c1);
}
