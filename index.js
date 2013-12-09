function extend(target) {
  var sources = [].slice.call(arguments, 1);
  sources.forEach(function (source) {
    for (var prop in source) {
      target[prop] = source[prop];
    }
  });
  return target;
}
function JSONCombinator (json) { this.json = json; }
JSONCombinator.prototype.add = function(object) {
  var keys = Object.keys(object);
  for (var i = keys.length - 1; i >= 0; i--) {
    if (this.json[keys[i]]) {
      this.json[keys[i]] = extend({}, this.json[keys[i]], object[keys[i]]);
    }
  }
};
JSONCombinator.prototype.toJSON = function() {
  return JSON.stringify(this.json, null, 2);
};
JSONCombinator.prototype.toObject = function() {
  return this.json;
};

module.exports = JSONCombinator;