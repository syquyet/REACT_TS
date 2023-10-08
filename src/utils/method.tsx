export function navigation(path: string) {
  window.location.pathname = path;
}
// function navigationParam(url:string, param:string) {
//   location.href = `${url}?${param}`;
// }
export function getDataFormLocalStorage(key:string) {
  const getData:any=localStorage.getItem(key)
  return JSON.parse(getData)||[];
}
export function setDataFormLocalStorage(key:string, value:any) {
  localStorage.setItem(key, JSON.stringify(value));
}
// hàm tạo id  auto cho data
function createIdauto(key:string, data:any) {
  const idElement = data[data.length - 1].id;
  const numberId = Number(idElement.slice(key.length + 1));
  const newId = key + "_" + (numberId + 1);
  return newId;
}
