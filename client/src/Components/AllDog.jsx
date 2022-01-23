import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./stylesPag.css";
import { Link } from "react-router-dom";
import DogCard from "./DogCard.jsx";
import { getAllDogs } from "../redux/actions/index";

export default function AllDog() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllDogs());
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(8);

  const [pageNumberLimit, setPageNumberLimit] = useState(8);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(8);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const AllDogs = useSelector((state) => state.dogs);
  const currentItems = AllDogs.slice(indexOfFirstItem, indexOfLastItem);

  const handleClick = (e) => {
    setCurrentPage(Number(e.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(AllDogs.length / itemPerPage); i++) {
    pages.push(i);
  }

  const renderPageNumbers = pages.map((n) => {
    if (n < maxPageNumberLimit + 1 && n > minPageNumberLimit) {
      return (
        <li
          key={n}
          id={n}
          onClick={handleClick}
          className={currentPage == n ? "active" : null}
        >
          {n}
        </li>
      );
    } else {
      return null;
    }
  });
  const handleNextbtn = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };
  const handlePrevbtn = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextbtn}>&hellip;</li>;
  }

  let pageDecrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageDecrementBtn = <li onClick={handlePrevbtn}>&hellip;</li>;
  }

  return (
    <div>
      <Link to="/create">
        <button>Registrar una nueva raza</button>
      </Link>

      <ul className="pageNumbers">
        <li>
          <button
            onClick={handlePrevbtn}
            disabled={currentPage == pages[0] ? true : false}
          >
            Prev
          </button>
        </li>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}
        <li>
          <button
            onClick={handleNextbtn}
            disabled={currentPage == pages[pages.length - 1] ? true : false}
          >
            Next
          </button>
        </li>
      </ul>

      {currentItems &&
        currentItems.map((d) => {
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
      <ul className="pageNumbers">{renderPageNumbers}</ul>
    </div>
  );
}
