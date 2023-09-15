/* eslint-disable no-undef */
import Subtract from '../modules/Subtract';

test('subtracts 1 - 2 to equal -1', () => {
  expect(Subtract(1, 2)).toBe(-1);
});

test('subtracts -1 - -2 to equal 1', () => {
  expect(Subtract((-1), (-2))).toBe(1);
});

test('subtracts .5 - 2 to equal -1.5', () => {
  expect(Subtract(0.5, 2)).toBe(-1.5);
});
