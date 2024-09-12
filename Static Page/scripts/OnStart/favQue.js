export function favQue(data) {
  const que = "favQue";
  if (data) localStorage.setItem(que, JSON.stringify(data));
  else return JSON.parse(localStorage.getItem(que));
}
