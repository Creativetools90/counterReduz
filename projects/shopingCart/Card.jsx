import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Insert } from "../../src/Redux/shopping/ShoppingSlice";

const Card = () => {
  // Select the list of items in the cart
  const cart = useSelector((state) => state.cart.list); // Changed to `shopping.list`
  const [api, setApi] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          "https://picsum.photos/v2/list?page=2&limit=100"
        );
        setApi(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchImages();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading images!</div>;

  // Function to add an item to the cart
  const AddCart = (item) => {
    dispatch(Insert(item)); // Dispatch the action with the item
    console.log("Cart:", cart);
  };

  return (
    <div className="cardContainer">
      {api.map((image) => (
        <div className="card" key={image.id}>
          <div className="imgCard">
            <img className="img" src={image.download_url} alt={image.author} />
            <div className="cartMark">
              <div className="mark" onClick={() => AddCart(image)}>
              </div>
            </div>
          </div>
          <div className="cardContent">
            <h3>{image.author}</h3>
            <p>Price: $100</p>
            <button onClick={() => AddCart(image)}>Book Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
