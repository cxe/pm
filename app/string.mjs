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
