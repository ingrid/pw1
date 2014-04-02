require.config({
  baseUrl:"jam/",
});

require(["jam", "../lib/sylvester", "../js/proto", "../js/player", "../js/level", "../js/goal"], function(jam, syl, proto, player, level, goal) {
  jam.config({dataDir:"data/"});

  var main = function() {
	var g = new jam.Game(640, 480, document.body);
	var s = g.root.scene;
    g.bgColor = "rgb(55, 55, 55)";

    var l = new level();
    var p = new player(20, 10, l);
    var e = new goal(600, 235);


    p.on("update", function(dt) {
      jam.Rect.collide(p, l);
	  if (p.touchingBottom) {
        p.grounded = true;
      } else {
        p.grounded = false;
        }
 	  if (jam.Rect.collide(p, e)) {
        console.log("win");
      }
    });

    s.add(l);
    s.add(p);
    s.add(e);

    g.camera.follow = p;

	g.run();
  };

  var preload = function() {
	jam.showPreloader(main);
  };

  preload();

  /** /
  window.setTimeout(function(){
    window.console.log = function(){
    };
  }, 300);
  /**/
});
