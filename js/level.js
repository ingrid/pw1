define(["jam", "../js/proto"], function(jam, proto) {
  // Tile size;
  var s = 10;

  // Build sprite sheet.
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");

  canvas.width = 20;
  canvas.height = s;

  ctx.fillStyle = "rgb(0, 255, 255)";
  ctx.fillRect(s, 0, s, s);

  // Our complete sprite sheet.
  var tiles = canvas.toDataURL();;

  // Our level CSV, super crappy.
  var csv =
    "1,0,0,0,0,0,0,1\n" +
	"1,0,0,0,0,0,0,1\n" +
	"1,0,0,0,0,0,1,1\n" +
	"1,0,0,0,0,0,0,1\n" +
	"1,1,0,0,0,0,0,1\n" +
	"1,0,0,0,0,0,0,1\n" +
	"1,0,0,0,0,0,0,1\n" +
	"1,1,1,1,1,1,1,1\n";

  var level = function(){
	jam.TileMap.call(this, s, tiles);
    this.x = 20;
    this. y = 20;

    this.loadCSV(csv);
    console.log(tiles);
  };

  level.prototype = new jam.TileMap(s, tiles);

  return level;
});
