# JSON Combinator

Combine JSON files (or simple) JavaScript Objects.

Example:

```javascript
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
```

`obj.toJSON()` returns:

```json
{
  "test": {
    "hey": "ho",
    "santa": "claus",
    "blupp": 2
  },
  "foo": "bar",
  "beebob": 123
}
```