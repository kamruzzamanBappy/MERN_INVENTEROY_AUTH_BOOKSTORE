import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useFetchBookByIdQuery } from "../../redux/features/cart/booksApi";
import { getImgUrl } from "../../utils/getImgUrl";
// Import the addToCart action from your Redux slice (make sure to adjust the path based on your project structure)
import { addToCart } from "../../redux/features/cart/cartSlice"; // Adjust the path accordingly

const SingleBook = () => {
  const { id } = useParams();
  const { data: book, isLoading, isError } = useFetchBookByIdQuery(id);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    // Dispatch the addToCart action to add the product to the cart
    dispatch(addToCart(product));
  };

  // Handle loading and error conditions outside the function
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error occurred while loading book info</div>;

  return (
    <div className="max-w-lg shadow-md p-5">
      <h1 className="text-2xl font-bold mb-6">{book.title}</h1>

      <div>
        <div>
          <img
            src={getImgUrl(book.coverImage)} // Generate image URL using the utility function
            alt={book.title}
            className="mb-8"
          />
        </div>

        <div className="mb-5">
          <p className="text-gray-700 mb-2">
            <strong>Author:</strong> {book.author || "admin"}{" "}
          </p>

          <p className="text-gray-700 mb-4 capitalize">
            <strong>Category:</strong> {book?.category}{" "}
          </p>
          <p className="text-gray-700">
            <strong>Description:</strong> {book.description}
          </p>
        </div>

        <button
          onClick={() => handleAddToCart(book)} // Call handleAddToCart when button is clicked
          className="bg-primary px-12 py-2 rounded-md text-base font-secondary border border-none font-bold hover:bg-secondary hover:text-white transition-all duration-200 cursor-pointer space-x-1 flex items-center gap-1"
        >
          <FiShoppingCart />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default SingleBook;
