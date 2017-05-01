# tap-light
A very light test framework, meant for live testing.

```javascript
test('msg', function (t) {
  t.assert(1 + 1 === 2, 'Addition works as expected')
  setTimeout(function () {
    t.end()
  }, 1000)
})
```
