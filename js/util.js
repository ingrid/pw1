define([], function() {
  var util = {};

  // To nearest fourth.
  util.approx = function(n) {
    // 0, 125, 375, 625, 875
    var t = Math.floor(n);
    var p = n % 1;

    if (p <=0.125){
      ret = 0.00;
    } else if (p <= 0.375) {
      ret = 0.25;
    } else if (p <= 0.625) {
      ret = 0.50;
    } else if (p <= 0.875) {
      ret = 0.75;
    } else {
      ret = 1.00;
    }

    t += p;

    return t;
  };

  return util;
})
