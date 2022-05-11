const COMPONENTS_TYPE = ["default", "primary", "success", "warning", "danger", "info"];

export const validateType = (value: string) => {
  if (!value) return true;

  if (COMPONENTS_TYPE.includes(value)) {
    return true;
  }
  console.error("types is not contains " + value);
  return false;
}

const COMPONENTS_SIZE = ["default", "large", "small"];

export const validateSize = (value: string) => {
  if (!value) return true;

  if (COMPONENTS_SIZE.includes(value)) {
    return true;
  }
  console.error("size is not contains " + value);
  return false;
}
