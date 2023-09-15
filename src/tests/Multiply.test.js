/* eslint-disable no-undef */
import Multiply from '../modules/Multiply';

test('multiplies 1 * 2 to equal 2', () => {
  expect(Multiply(1, 2)).toBe(2);
});

test('multiplies -1 * 2 to equal -2', () => {
  expect(Multiply(-1, 2)).toBe(-2);
});

test('multiplies .5 * 2 to equal 1', () => {
  expect(Multiply(0.5, 2)).toBe(1);
});
