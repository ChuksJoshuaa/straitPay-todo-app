import { DEV_BASE_URL, LIVE_BASE_URL } from "../constants/actionTypes";

export const serverUrl = (env: string) => {
  if (env === "development") return DEV_BASE_URL;
  return LIVE_BASE_URL;
};
