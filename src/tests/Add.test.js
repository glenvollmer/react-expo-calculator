/* eslint-disable no-undef */
import { add } from '../modules/calculate';

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('adds -1 + 2 to equal 1', () => {
  expect(add(-1, 2)).toBe(1);
});

test('adds .5 + 2 to equal 2.5', () => {
  expect(add(0.5, 2)).toBe(2.5);
});
