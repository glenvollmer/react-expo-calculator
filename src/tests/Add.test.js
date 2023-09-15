/* eslint-disable no-undef */
import Add from '../modules/Add';

test('adds 1 + 2 to equal 3', () => {
  expect(Add(1, 2)).toBe(3);
});

test('adds -1 + 2 to equal 1', () => {
  expect(Add(-1, 2)).toBe(1);
});

test('adds .5 + 2 to equal 2.5', () => {
  expect(Add(0.5, 2)).toBe(2.5);
});
