import React, { useEffect, useState } from "react";

const TopSellers = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  console.log(books);
  return <div>TopSellers</div>;
};

export default TopSellers;
