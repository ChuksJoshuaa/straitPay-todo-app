import { DEV_BASE_URL, LIVE_BASE_URL } from "../constants/actionTypes";

const Url = (env: string) => {
  if (env === "development") return DEV_BASE_URL;
  return LIVE_BASE_URL;
};

export const serverUrl = Url(import.meta.env.VITE_NODE_ENV);
