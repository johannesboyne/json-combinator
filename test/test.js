var test = require('tap').test;

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

test('json-combinator-mapper', function (t) {
  t.plan(2);
  
  t.equal(obj.toJSON().length, 106);

  t.deepEqual(obj.toObject(), { test: { hey: 'ho', santa: 'claus', blupp: 2 }, foo: 'bar', beebob: 123 }, 'equal objects');
  t.end();
});