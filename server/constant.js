export const getUrl = () => {
  let url = process.env.MONGO_URI;
  if (process.env.NODE_ENV === "test") {
    url = process.env.TEST_URI;
  }
  return url;
};
