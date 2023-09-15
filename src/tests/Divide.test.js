/* eslint-disable no-undef */
import Divide from '../modules/Divide';

test('divides 1 / 2 to equal 0.5', () => {
  expect(Divide(1, 2)).toBe(0.5);
});

test('divides -1 / 2 to equal -0.5', () => {
  expect(Divide(-1, 2)).toBe(-0.5);
});

test('divides .5 / 2 to equal .25', () => {
  expect(Divide(0.5, 2)).toBe(0.25);
});
