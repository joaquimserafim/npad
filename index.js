'use strict'

module.exports = {left: left, right: right}

function left (str, len, ch) {
  return repeat(str, len, ch) + String(str)
}

function right (str, len, ch) {
  return String(str) + repeat(str, len, ch)
}

function repeat (str, len, ch) {
  return (ch || ' ').repeat(len > str.length ? len - str.length : 0)
}

