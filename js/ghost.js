define(["jam", "./proto", "./util"], function(jam, proto, util) {
  var ghost = function(path, r, g, b){
    console.log("g1");
    var ip = path.steps[0];
    var p_img = new proto.sq(10, r, g, b);

	jam.Sprite.call(this, ip.x, ip.y);
    this.setImage(p_img.toDataURL(), 10, 10);

    this.tdt = 0;

    this.on("update", function(dt) {
      this.tdt += dt;
      var t = util.approx(this.tdt);
      var p = path.steps[t];
      if (p !== undefined){
        this.x = p.x;
        this.y = p.y;
      }
    });

  };

  ghost.prototype = new jam.Sprite(0, 0);

  return ghost;
});
