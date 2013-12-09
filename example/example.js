var JSONCombinator = require('./..');

var obj = new JSONCombinator({
  "test": {
    "hey": "ho",
    "santa": "claus"
  },
  "foo": "bar",
  "beebob": 123
});
obj.add({"test": {"blupp": 2}});

console.dir(obj.toObject());
console.log(obj.toJSON());