/* eslint-disable no-undef */
import { multiply } from '../modules/calculate';

test('multiplies 1 * 2 to equal 2', () => {
  expect(multiply(1, 2)).toBe(2);
});

test('multiplies -1 * 2 to equal -2', () => {
  expect(multiply(-1, 2)).toBe(-2);
});

test('multiplies .5 * 2 to equal 1', () => {
  expect(multiply(0.5, 2)).toBe(1);
});
