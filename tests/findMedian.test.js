
import helpers from '../client/src/Helpers.js';
import data from './testData.js';

test('findMedian calculations ignore empty numbers and zeros', () => {
  let results = helpers.findMedian('testNum', data.allZeros);
  expect(results[0]).toBe(0);
  expect(results[1]).toBe(0);
  expect(results[2]).toBe(0);
  expect(results[3]).toBe(undefined);
  let result = helpers.findMedian('secondNum', data.allZeros);
  expect(result[0]).toBe('-');
  expect(result[1]).toBe(1000);
  expect(result[2]).toBe('-');
  expect(result[3]).toBe(1);
})

test('findMedian of even number of bonds', () => {
  let results = helpers.findMedian('testNum', data.even)
  expect(results[0]).toBe(2000);
  expect(results[1]).toBe(2500);
  expect(results[2]).toBe(5000);
  expect(results[3]).toBe(6);
})

test('findMedian of odd number of bonds', () => {
  let results = helpers.findMedian('testNum', data.odd)
  expect(results[0]).toBe(2000);
  expect(results[1]).toBe(3000);
  expect(results[2]).toBe(151515);
  expect(results[3]).toBe(9);
})

test('25% and 75% do not return numbers when less than 4 values are found', () => {
  let results = helpers.findMedian('testNum', data.lessThanFour);
  expect(results[0]).toBe('-');
  expect(results[1]).toBe(11);
  expect(results[2]).toBe('-');
  expect(results[3]).toBe(3);
})