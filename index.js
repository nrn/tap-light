var testsToRun = []
var running = false
var count = 1
var failed = false
var print = defPrint
var time

function defPrint (ln) {
  console.log(ln)
  return ln
}

function setPrint (p) {
  print = p
}

function test (msg, fn) {
  testsToRun.push([msg, fn])
}

function start () {
  clearTimeout(time)
  time = setTimeout(function () {
    if (testsToRun.length <= 0) {
      print('1..' + count)
      if (failed) {
        print('# failed')
      } else {
        print('# passed')
      }
      return
    }
    var toRun = testsToRun.shift()
    print('# ' + toRun[0])
    toRun[1]({ end: start, assert: assert })
  }, 0)
}
function assert (success, message) {
  if (success) {
    print('ok ' + count++ + ' ' + message)
  } else {
    failed = true
    print('not ok ' + count++ + ' ' + message)
  }
}

module.exports = {
  test: test,
  start: start,
  setPrint: setPrint
}
