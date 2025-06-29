import { isIdentifier, isNumber } from '../string.js';

describe('isIdentifier', () => {
  it('should return the full string for valid identifiers', () => {
    expect(isIdentifier('validIdentifier')).toBe('validIdentifier');
    expect(isIdentifier('_underscore')).toBe('_underscore');
    expect(isIdentifier('$dollarSign')).toBe('$dollarSign');
    expect(isIdentifier('a1b2c3')).toBe('a1b2c3');
  });

  it('should return the valid prefix before whitespace', () => {
    expect(isIdentifier('ok ')).toBe('ok');
    expect(isIdentifier('ok\taftertab')).toBe('ok');
    expect(isIdentifier('ok\nnewline')).toBe('ok');
    expect(isIdentifier('ok\rreturn')).toBe('ok');
  });

  it('should return an empty string for invalid identifiers', () => {
    expect(isIdentifier('1invalidStart')).toBe('');
    expect(isIdentifier('invalid-char!')).toBe('');
    expect(isIdentifier('mail@example.com')).toBe('');
    expect(isIdentifier('')).toBe('');
  });
});

describe('isNumber', () => {
  it('should return the full string for valid numbers', () => {
    expect(isNumber('123')).toBe('123');
    expect(isNumber('-456')).toBe('-456');
    expect(isNumber('78.90')).toBe('78.90');
    expect(isNumber('-0.123')).toBe('-0.123');
  });

  it('should return the valid prefix for numbers with trailing non-numeric characters', () => {
    expect(isNumber('42abc')).toBe('42');
    expect(isNumber('-3.14xyz')).toBe('-3.14');
  });

  it('should return an empty string for invalid numbers', () => {
    expect(isNumber('abc123')).toBe('');
    expect(isNumber('--123')).toBe('');
    expect(isNumber('12.34.56')).toBe('');
    expect(isNumber('')).toBe('');
  });
});
