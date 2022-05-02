let count = parseInt(window.localStorage.getItem("tagId") || "0");
export const createId = () => {
  count++;
  window.localStorage.setItem("tagId", count.toString());
  return count.toString();
};
