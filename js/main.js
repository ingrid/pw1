require.config({
  baseUrl:"jam/",
});

require(["jam", "../lib/sylvester", "../js/proto", "../js/player", "../js/level"], function(jam, syl, proto, player, level) {
  jam.config({dataDir:"data/"});

  var main = function() {
	var g = new jam.Game(320, 240, document.body, 2);
	var s = g.root.scene;
    g.bgColor = "rgb(55, 55, 55)";

    var p = new player(10, 10);
    var l = new level();

    s.add(p);
    s.add(l);

	g.run();
  };

  var preload = function() {
	jam.showPreloader(main);
  };

  preload();
});
