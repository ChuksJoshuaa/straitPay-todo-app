export function isEmptyString(value: string) {
  return typeof value === "string" && value.trim() === "";
}
