
var _ = require('lodash');
var colorDiff = require('color-diff');
var Color = require('color');
var colorlist = require('css-color-list');
var basicColors = require('./lib/basic-colors');


var extendedPalette = colorlist().map(function(name) {
  var color = Color(name);
  var rgb = color.rgb();
  rgb = capitalizeRGB(rgb);
  rgb.name = name;
  return rgb;
});

var basicPalette = basicColors.map(function(hex) {
  var color = Color(hex);
  var rgb = color.rgb();
  rgb = capitalizeRGB(rgb);
  rgb.name = color.keyword();
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
  options = _.defaults(options, {
    basic: false
  });

  // Options
  // Basic colors

  var rgb;
  var closest;
  var palette = options.basic ? basicPalette : extendedPalette;

  rgb = Color(value).rgb();
  rgb = capitalizeRGB(rgb);
  closest = colorDiff.closest(rgb, palette);
  return closest.name;
};

