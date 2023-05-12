export const parseIntWithDefault = (string: string) => {
  const parsed = parseInt(string);
  if (isNaN(parsed)) {
    return 0;
  } else {
    return parsed;
  }
};

export const parseFloatWithDefault = (string: string) => {
  const parsed = parseFloat(string);
  if (isNaN(parsed)) {
    return 0;
  } else {
    return parsed;
  }
};
