require.config({
  baseUrl:"jam/",
});

require(["jam", "../lib/sylvester", "../js/proto", "../js/player", "../js/level"], function(jam, syl, proto, player, level) {
  jam.config({dataDir:"data/"});

  var main = function() {
	var g = new jam.Game(640, 480, document.body);
	var s = g.root.scene;
    g.bgColor = "rgb(55, 55, 55)";

    var l = new level();
    var p = new player(20, 10, l);

    s.add(l);
    s.add(p);

    g.camera.follow = p;

	g.run();
  };

  var preload = function() {
	jam.showPreloader(main);
  };

  preload();

  window.setTimeout(function(){
    window.console.log = function(){
    };
  }, 300);
});
