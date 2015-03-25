
var colorDiff = require('color-diff');
var colorlist = require('css-color-list');
var Color = require('color');


var palette = colorlist().map(function(name) {
  var color = Color(name);
  var rgb = color.rgb();
  rgb = capitalizeRGB(rgb);
  rgb.name = name;
  return rgb;
});

function capitalizeRGB(rgb) {
  return {
    R: rgb.r,
    G: rgb.g,
    B: rgb.b,
  }
}

module.exports = function(value, options) {

  var options = options || {};
  // Options
  // Basic colors
  //black #000000 0,0,0
  //silver  #C0C0C0 192,192,192
  //gray  #808080 128,128,128
  //white #FFFFFF 255,255,255
  //maroon  #800000 128,0,0
  //red #FF0000 255,0,0
  //purple  #800080 128,0,128
  //fuchsia #FF00FF 255,0,255
  //green #008000 0,128,0
  //lime  #00FF00 0,255,0
  //olive #808000 128,128,0
  //yellow  #FFFF00 255,255,0
  //navy  #000080 0,0,128
  //blue  #0000FF 0,0,255
  //teal  #008080 0,128,128
  //aqua  #00FFFF 0,255,255

  var rgb;
  var closest;

  rgb = Color(value).rgb();
  rgb = capitalizeRGB(rgb);
  closest = colorDiff.closest(rgb, palette);
  return closest.name;
};

