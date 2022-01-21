import React from "react";
import "./styles.module.css";

export default function DogCard({ img, name, temperament, weigth }) {
  return (
    <div className="card">
      <img src={img} alt="imagen de un perro" />
      <h1>Raza: {name}</h1>
      <h2>Temperamento: {temperament}</h2>
      <h2>Peso: {weigth}</h2>
    </div>
  );
}

// export class DogCard extends Component {
//   componentDidMount() {
//     getAllDogs();
//   }
//   render() {
//     return (
//       <>
//         <h1>Raza: {this.props.name}</h1>
//         <h2>Temperamento: {this.props.temperament}</h2>
//         <h2>Peso: {this.props.weigth}</h2>
//       </>
//     );
//   }
// }

// export const mapDispatchToProps = (distpach) => {
//   return {
//     getAllDogs: () => distpach(getAllDogs()),
//   };
// };

// export default connect(null, mapDispatchToProps)(DogCard);
