function Star() {

  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random(width);
  this.pz = this.z;
 
  this.show = function() {
    fill(255);
    noStroke();
    var sx = map(this.x / this.z, 0, 1, 0, width);
    var sy = map(this.y / this.z, 0, 1, 0, height);
    var r = map(this.z,0,width,10,0);
    ellipse(sx, sy, r, r);
    
    px = map(this.x/this.pz,0,1,0,width);
    py = map(this.y/this.pz,0,1,0,height);
    stroke(255);
    //line(px,py,sx,sy,0);
  };

  this.update = function() {
    this.z = this.z - 6;
    if (this.z < 0) {
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.z = width;
      this.pz = this.z;
    }
  }

}