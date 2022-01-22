import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDogs } from "../redux/actions/index";
import { Link } from "react-router-dom";
import DogCard from "./DogCard.jsx";

export default function AllDog() {
  const dispatch = useDispatch();
  const AllDogs = useSelector((state) => state.dogs);

  useEffect(() => {
    dispatch(getAllDogs());
  }, []);

  return (
    <>
      <div>
        <select>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
        <select>
          <option value="temp">Temperamento</option>
          <option value="raza">Raza</option>
        </select>
      </div>
      <Link to="/create">
        <button>Registrar una nueva raza</button>
      </Link>
      {AllDogs &&
        AllDogs.map((d) => {
          return (
            <DogCard
              name={d.name}
              img={d.img}
              temperament={d.temperament}
              weigth={d.weight}
              key={d.Id}
            />
          );
        })}
    </>
  );
}

// export class AllDog extends Component {
//   componentDidMount() {
//     getAllDogs();
//   }

//   render() {
//     return (
//       <>
//         <h1>Todos los perros</h1>
//         {this.props.dogs?.map((d) => (
//           <DogCard Raza={d.name} Temperamento={d.temperament} Peso={d.weigth} />
//         ))}
//       </>
//     );
//   }
// }

// export function mapStateToProps(state) {
//   return {
//     dogs: state.dogs,
//   };
// }

// export function mapDispatchToProps(dispatch) {
//   return {
//     getAllDogs: () => dispatch(getAllDogs()),
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(AllDog);
