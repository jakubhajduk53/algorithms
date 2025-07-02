const delayedFetch = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("done", 2000);
    });
  });
};
