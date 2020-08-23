export default () => {
  return localStorage.getItem("unit") || "celsius";
};
