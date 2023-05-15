import Validator from '../nickname';

test('check valid name value', () => {
  expect(Validator.validateUsername('nickname')).toBe('nickname');
});

test('check invalid name value with non-Latin symbols', () => {
  expect(() => Validator.validateUsername('nameИмяName')).toThrow();
});

test('check invalid name value with more than three digits', () => {
  expect(() => Validator.validateUsername('name1234name')).toThrow();
});

test('check invalid name value with more than three digits and digit at the beginning', () => {
  expect(() => Validator.validateUsername('0name1234name')).toThrow();
});

test('check invalid name value with more than three digits and digit at the end', () => {
  expect(() => Validator.validateUsername('name1234name5')).toThrow();
});

test('check invalid name value with digit at the beginning', () => {
  expect(() => Validator.validateUsername('1name')).toThrow();
});

test('check invalid name value with digit at the end', () => {
  expect(() => Validator.validateUsername('name0')).toThrow();
});

test('check invalid name value with underscore at the beginning', () => {
  expect(() => Validator.validateUsername('_name')).toThrow();
});

test('check invalid name value with dash symbol at the end', () => {
  expect(() => Validator.validateUsername('name-')).toThrow();
});

test('check invalid name value with more than three digits and underscore at the beginning', () => {
  expect(() => Validator.validateUsername('_name1234name')).toThrow();
});

test('check invalid name value with non-Latin symbol and dash symbol at the end', () => {
  expect(() => Validator.validateUsername('name@Лname-')).toThrow();
});
