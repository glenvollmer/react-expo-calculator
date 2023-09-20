/* eslint-disable no-undef */
import { subtract } from '../modules/calculate';

test('subtracts 1 - 2 to equal -1', () => {
  expect(subtract(1, 2)).toBe(-1);
});

test('subtracts -1 - -2 to equal 1', () => {
  expect(subtract((-1), (-2))).toBe(1);
});

test('subtracts .5 - 2 to equal -1.5', () => {
  expect(subtract(0.5, 2)).toBe(-1.5);
});
