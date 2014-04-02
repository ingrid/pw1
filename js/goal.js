define(["jam", "../js/proto"], function(jam, proto) {
  var goal = function(x, y){
	jam.Sprite.call(this, x, y);
    var p_img = new proto.sq(10, 0, 255, 0);

    this.setImage(p_img.toDataURL(), 10, 10);

    this.immovable = true;
  };

  goal.prototype = new jam.Sprite(0, 0);

  return goal;
});
