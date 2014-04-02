define(["jam", "../js/proto"], function(jam, proto) {
  var player = function(x, y){
	jam.Sprite.call(this, x, y);
    var p_img = new proto.rect(10, 10, 255, 0, 0);

	//this.image = p_img;
    //this.width = 10;
    //this.height = 10;
    this.setImage(p_img.toDataURL(), 10, 10);
    console.log(p_img.toDataURL());
    this.width = 10;
    this.height = 10;

    this.on("update", function(dt) {
	  if(jam.Input.down("LEFT")) {
		this.velocity.x = -50;
        this.facing = jam.Sprite.LEFT;
	  }
	  else if (jam.Input.down("RIGHT")) {
		this.velocity.x = 50;
        this.facing = jam.Sprite.RIGHT;
	  }
	  else {
		this.velocity.x = 0;
	  }
	  if(jam.Input.justPressed("UP")) {
		//this.velocity.y = -100;
	  }
    });
  };

  player.prototype = new jam.Sprite(0, 0);

  return player;
});
