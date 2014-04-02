// A collection of helpful snippets for prototyping in jam.

define([], function() {
  var proto = {};
  proto.rect = function(w, h, r, g, b) {
    if (r == undefined){
      r = g = b = 0;
    }

    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");

    canvas.width = w;
    canvas.height = h;

    var color = 'rgb(' + r + ', ' + g + ', ' + b + ')';

    ctx.fillStyle = color;
    ctx.fillRect(0, 0, w, h);

    return canvas;
  };

  proto.sq = function(s, r, g, b) {
    return proto.rect(s, s, r, g, b);
  };

  proto.cir = function(r, r, g, b) {

  };

  return proto;
});
