import { isIdentifier } from '../string.js';

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
