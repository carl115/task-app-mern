export const requestTitle = (field: string) => {
  if (!isString(field)) {
    throw new Error("Title is not valid");
  }

  return field;
};

export const requestBody = (field: string) => {
  if (!isString(field)) {
    throw new Error("Body is not valid");
  }

  return field;
};

export const requestCheck = (field: boolean) => {
  if (!isBoolean(field)) {
    throw new Error("Check is not valid");
  }

  return field;
};

const isString = (param: string) => {
  return typeof param === "string" ? true : false;
};

const isBoolean = (param: boolean) => {
  return typeof param === "boolean" ? true : false;
};
