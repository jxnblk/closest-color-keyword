
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
  var rgb;
  var closest;

  rgb = Color(value).rgb();
  rgb = capitalizeRGB(rgb);
  closest = colorDiff.closest(rgb, palette);
  return closest.name;
};

