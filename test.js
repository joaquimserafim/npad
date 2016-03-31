'use strict'

var test = require('tape')

var pad = require('./')

test('pad should have two methods, left and right', (assert) => {
  assert.equal(typeof pad.left, 'function')
  assert.equal(typeof pad.right, 'function')
  assert.end()
})

test('left `foo, 4`', (assert) => {
  assert.deepEqual(pad.left('foo', 4), ' foo')
  assert.end()
})

test('left `bar, 5, .`', (assert) => {
  assert.deepEqual(pad.left('bar', 5, '.'), '..bar')
  assert.end()
})

test('right `foo, 4`', (assert) => {
  assert.deepEqual(pad.right('bar', 3), 'bar')
  assert.end()
})

test('right `foo, 4`', (assert) => {
  assert.deepEqual(pad.right('foo', 4), 'foo ')
  assert.end()
})

