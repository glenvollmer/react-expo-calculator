/* eslint-disable no-undef */
import { divide } from '../modules/calculate';

test('divides 1 / 2 to equal 0.5', () => {
  expect(divide(1, 2)).toBe(0.5);
});

test('divides -1 / 2 to equal -0.5', () => {
  expect(divide(-1, 2)).toBe(-0.5);
});

test('divides .5 / 2 to equal .25', () => {
  expect(divide(0.5, 2)).toBe(0.25);
});
