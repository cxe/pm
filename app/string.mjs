export const CHR_TAB = 9;
export const CHR_NEWLINE = 10;
export const CHR_CARRIAGE_RETURN = 13;
export const CHR_SPACE = 32;
export const CHR_EXCLAMATION = 33;
export const CHR_QUOTE_DOUBLE = 34;
export const CHR_HASH = 35;
export const CHR_DOLLAR = 36;
export const CHR_PERCENT = 37;
export const CHR_AMPERSAND = 38;
export const CHR_QUOTE_SINGLE = 39;
export const CHR_PAREN_OPEN = 40;
export const CHR_PAREN_CLOSE = 41;
export const CHR_ASTERISK = 42;
export const CHR_PLUS = 43;
export const CHR_COMMA = 44;
export const CHR_HYPHEN = 45;
export const CHR_DOT = 46;
export const CHR_SLASH = 47;
export const CHR_DIGIT_0 = 48;
export const CHR_DIGIT_9 = 57;
export const CHR_COLON = 58;
export const CHR_SEMICOLON = 59;
export const CHR_UNDERSCORE = 95;
export const CHR_LESS_THAN = 60;
export const CHR_EQUALS = 61;
export const CHR_GREATER_THAN = 62;
export const CHR_QUESTION = 63;
export const CHR_AT = 64;
export const CHR_UPPER_A = 65;
export const CHR_UPPER_E = 69;
export const CHR_UPPER_Z = 90;
export const CHR_LOWER_A = 97;
export const CHR_LOWER_E = 101;
export const CHR_LOWER_Z = 122;
export const CHR_CURLY_OPEN = 123;
export const CHR_CURLY_CLOSE = 125;
export const CHR_SQUARE_OPEN = 91;
export const CHR_BACKSLASH = 92;
export const CHR_SQUARE_CLOSE = 93;
export const CHR_BACKTICK = 96;
export const CHR_PIPE = 124;
export const CHR_TILDE = 126;
export const CHR_CARET = 94;


export const isIdentifier = s => {
    const n = s.length;
    if (n === 0) return '';
    let c = s.charAt(0);
    if (!isIdentifierStartChar(c)) return '';
    for (let i = 1; i < n; ++i) {
        const c = s.charCodeAt(i);
        if (c === CHR_SPACE || c === CHR_TAB || c === CHR_NEWLINE || c === CHR_CARRIAGE_RETURN) {
            return s.substring(0, i);
        }
        if (!isIdentifierChar(s)) return '';
    }
    return s;
};

export const isNumber = s => {
    const n = s.length;
    if (n === 0) return '';
    let c = s.charCodeAt(0);
    if (c === CHR_HYPHEN) ++i;
    if (c >= CHR_DIGIT_0 && c <= CHR_DIGIT_9) {
        for (let i = 0; i < n; ++i) {
            c = s.charCodeAt(i);
            if (c >= CHR_DIGIT_0 && c <= CHR_DIGIT_9) continue;
            if (c === CHR_DOT) {
                while (i < n) {
                    c = s.charCodeAt(++i);
                    if (c < CHR_DIGIT_0 || c > CHR_DIGIT_9) break;
                }
            }
            return s.substring(0, i);
        }
    }
    return '';
};

export const isSpace = s => {
    const n = s.length;
    if (n === 0) return '';
    let c = s.charCodeAt(0);
    if ( c === CHR_SPACE || c === CHR_TAB || c === CHR_NEWLINE || c === CHR_CARRIAGE_RETURN) {
        let i = 1;
        while (i < n) {
            c = s.charCodeAt(i);
            if ( c !== CHR_SPACE && c !== CHR_TAB && c !== CHR_NEWLINE && c !== CHR_CARRIAGE_RETURN) {
                break;
            }
            ++i;
        }
        return s.substring(0, i);
    }
    return '';
};

export const isIdentifierStartChar = s => {
  const c = s.charCodeAt(0);
  return (
    (c >= CHR_UPPER_A && c <= CHR_UPPER_Z)
    || (c >= CHR_LOWER_A && c <= CHR_LOWER_Z)
    || c === CHR_DOLLAR
    || c === CHR_UNDERSCORE
  );
};

export const isIdentifierChar = s => isIdentifierStartChar(s) || isDigitChar(s);

export const isDigitChar = s => {
  const c = s.charCodeAt(0);
  return c >= CHR_DIGIT_0 && c <= CHR_DIGIT_9;
};

export const isWhitespaceChar = s => {
    const c = s.charCodeAt(0);
    return c === CHR_SPACE || c === CHR_TAB || c === CHR_NEWLINE || c === CHR_CARRIAGE_RETURN;
};
