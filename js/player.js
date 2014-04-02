define(["jam", "../js/proto"], function(jam, proto) {
  var player = function(x, y, tm){
	jam.Sprite.call(this, x, y);
    var p_img = new proto.sq(10, 255, 0, 0);

    this.setImage(p_img.toDataURL(), 10, 10);

	this.acceleration.y = 250;
    this.speed = 100;
    this.grounded = false;

    this.on("update", function(dt) {
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
	  if(jam.Input.justPressed("UP")
         && this.grounded
         && !(jam.Input.down("RIGHT") || jam.Input.down("LEFT"))
        ) {
		this.velocity.y = -100;
	  }
    });
  };

  player.prototype = new jam.Sprite(0, 0);

  return player;
});
