export const CHR_DOLLAR = 36;
export const CHR_UNDERSCORE = 95;
export const CHR_UPPER_A = 65;
export const CHR_UPPER_E = 69;
export const CHR_UPPER_Z = 90;
export const CHR_LOWER_A = 97;
export const CHR_LOWER_E = 101;
export const CHR_LOWER_Z = 122;
export const CHR_DIGIT_0 = 48;
export const CHR_DIGIT_9 = 57;
export const CHR_COMMA = 44;
export const CHR_HYPHEN = 45;
export const CHR_DOT = 46;
export const CHR_CURLY_OPEN = 123;
export const CHR_CURLY_CLOSE = 125;
export const CHR_SQUARE_OPEN = 91;
export const CHR_SQUARE_CLOSE = 93;
export const CHR_PAREN_OPEN = 40;
export const CHR_PAREN_CLOSE = 41;
export const CHR_SEMICOLON = 59;
export const CHR_COLON = 58;
export const CHR_QUOTE_SINGLE = 39;
export const CHR_QUOTE_DOUBLE = 34;
export const CHR_BACKTICK = 96;
export const CHR_SLASH = 47;
export const CHR_BACKSLASH = 92;
export const CHR_PIPE = 124;
export const CHR_AMPERSAND = 38;
export const CHR_PERCENT = 37;
export const CHR_PLUS = 43;
export const CHR_ASTERISK = 42;
export const CHR_EXCLAMATION = 33;
export const CHR_EQUALS = 61;
export const CHR_LESS_THAN = 60;
export const CHR_GREATER_THAN = 62;
export const CHR_QUESTION = 63;
export const CHR_TILDE = 126;
export const CHR_CARET = 94;
export const CHR_SPACE = 32;

export const isIdentifier = s => {
    const n = s.length;
    if (n === 0) return '';
    let c = s.charAt(0);
    if (!isIdentifierStartChar(c)) return '';
    for (let i = 1; i < n; ++i) {
        c = s.charAt(i);
        if (isWhitespaceChar(s[i])) return s.substring(0, i);
        if (!isIdentifierChar(c)) return '';
    }
    return s;
};

export const isIdentifierStartChar = c => {
  const n = c.charCodeAt(0);
  return (
    (n >= CHR_UPPER_A && n <= CHR_UPPER_Z)
    || (n >= CHR_LOWER_A && n <= CHR_LOWER_Z)
    || n === CHR_DOLLAR
    || n === CHR_UNDERSCORE
  );
};

export const isIdentifierChar = c => isIdentifierStartChar(c) || isDigitChar(c);

export const isDigitChar = c => {
  const n = c.charCodeAt(0);
  return n >= CHR_DIGIT_0 && n <= CHR_DIGIT_9;
};

export const isWhitespaceChar = c => {
  return c === ' ' || c === '\t' || c === '\n' || c === '\r';
};
