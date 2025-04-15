export const getcookie = (name) => {
  const cookies = document.cookie.split(";");
  for (let cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key == name) return value;
  }
  return null;
};
