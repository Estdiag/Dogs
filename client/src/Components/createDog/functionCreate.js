export function searchExis(data, name) {
  let find = data.find((d) => d.name == name);
  return find;
}

export function remove(data, name) {
  let newArray = data.filter((t) => t !== name);
  return newArray;
}
