export function searchExis(data, name) {
  let find = data.find((d) => d.name.toUpperCase() == name.toUpperCase());
  return find;
}

export function remove(data, name) {
  let newArray = data.filter((t) => t !== name);
  return newArray;
}

// export function changeName(name) {
//   let value1 = name.toLowerCase().split(" ");
//   let array = [];
//   for (let i = 0; i < value1.length; i++) {
//     array.push(value1[i].charAt(0).toUpperCase() + value1[i].slice(1));
//   }
//   return array.join(" ");
// }
export function validate(props) {
  if (props.name === "") {
    return `Name is required`;
  }

  if (props.weightMin === "") {
    return `WeightMin is required`;
  }
  if (props.weightMin < 0) {
    return `the minimum weight cannot be less than 0`;
  }
  if (props.weightMax === "") {
    return `WeightMax is required`;
  }
  if (parseInt(props.weightMin) > parseInt(props.weightMax)) {
    return "The minimum weight cannot be greater than the maximum weight";
  }
  if (props.heightMin === "") {
    return `HeightMin is required`;
  }
  if (props.heightMin < 0) {
    return `the minimum height cannot be less than 0`;
  }
  if (props.heightMax === "") {
    return `the minimum height cannot be less than 0`;
  }
  if (parseInt(props.heightMin) > parseInt(props.heightMax)) {
    return "the minimum height cannot be greater than the maximum height";
  }
  if (props.lifeSpanMin === "") {
    return `Life span minimun is required`;
  }
  if (props.lifeSpanMin < 0) {
    return `El campo lifeSpanMin no puede ser menor que 0`;
  }
  if (props.lifeSpanMax === "") {
    return `Life span maxinum is required`;
  }
  if (parseInt(props.lifeSpanMin) > parseInt(props.lifeSpanMax)) {
    return "the minimum life expectancy cannot be greater than the maximum life expectancy";
  }
  if (props.temperament.length === 0) {
    return "must add at least one temperament";
  }
  if (props.img === "") {
    return "add an image";
  } else return "ok";
}
