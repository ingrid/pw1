define(["jam", "./proto", "./util", "./ghost"], function(jam, proto, util) {
  var player = function(x, y){
	jam.Sprite.call(this, x, y);
    var p_img = new proto.sq(10, 255, 0, 0);

    this.setImage(p_img.toDataURL(), 10, 10);

    this.init = {};
    this.init.x = x;
    this.init.y = y;

	this.acceleration.y = 250;
    this.speed = 100;

    this.tdt = 0.0;
    this.path = {};
    this.path.term = 0;
    this.path.steps = {};
    this.path.steps[0] = {
      x: x,
      y: y
    };

    this.on_update = function(dt){
    };

    this.on("update", function(dt) {
      this.on_update();
	  if(jam.Input.down("LEFT")) {
		this.velocity.x = -this.speed;
        this.facing = jam.Sprite.LEFT;
	  }
	  else if (jam.Input.down("RIGHT")) {
		this.velocity.x = this.speed;
        this.facing = jam.Sprite.RIGHT;
	  }
	  else {
		this.velocity.x = 0;
	  }
	  if(jam.Input.justPressed("UP") && this.touchingBottom) {
		this.velocity.y = -100;
	  }

      // Ghost path.
      // Lots of rounding to save time, not accurate.
      this.tdt += dt;

      var t = util.approx(this.tdt);;

      this.path.steps[t] = (this.path.steps[t] || {x: this.x, y: this.y});
    });
  };

  player.prototype = new jam.Sprite(0, 0);

  return player;
});
