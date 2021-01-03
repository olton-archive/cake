import { pad, lpad, rpad } from "../../src/effects/pad";

test("Pad test", () => {
  expect(pad('FF', 4, '0')).toBe('0FF0');
  expect(pad('00FF', 4, '0')).toBe('00FF');
  expect(pad('ab', 10, '012')).toBe('0120ab0120');
  expect(pad('0', 5, '0')).toBe('00000');
  expect(pad('', 10, '01')).toBe('0101001010');
  expect(pad('Hello World')).toBe('Hello World');
  expect(pad('Hello World', 20, '')).toBe('Hello World');
  expect(pad('Welcome', 10, " ")).toBe(' Welcome  ');
  expect(pad('Alien', 10, '-=')).toBe('-=Alien-=-');
  expect(pad('')).toBe('');
  expect(pad('', 0)).toBe('');
})

test("Left Pad test", () => {
  expect(lpad('FF', 4, '0')).toBe('00FF');
  expect(lpad('00FF', 4, '0')).toBe('00FF');
  expect(lpad('ab', 10, '012')).toBe('01201201ab');
  expect(lpad('0', 5, '0')).toBe('00000');
  expect(lpad('', 10, '01')).toBe('0101010101');
  expect(lpad('Hello World')).toBe('Hello World');
  expect(lpad('Hello World', 20, '')).toBe('Hello World');
  expect(lpad('Welcome', 10, " ")).toBe('   Welcome');
  expect(lpad('Alien', 10, '-=')).toBe('-=-=-Alien');
  expect(lpad('')).toBe('');
  expect(lpad('', 0)).toBe('');
})

test("Right Pad test", () => {
  expect(rpad('FF', 4, '0')).toBe('FF00');
  expect(rpad('00FF', 4, '0')).toBe('00FF');
  expect(rpad('ab', 10, '012')).toBe('ab01201201');
  expect(rpad('0', 5, '0')).toBe('00000');
  expect(rpad('', 10, '01')).toBe('0101010101');
  expect(rpad('Hello World')).toBe('Hello World');
  expect(rpad('Hello World', 20, '')).toBe('Hello World');
  expect(rpad('Welcome', 10, " ")).toBe('Welcome   ');
  expect(rpad('Alien', 10, '-=')).toBe('Alien-=-=-');
  expect(rpad('')).toBe('');
  expect(rpad('', 0)).toBe('');
})

