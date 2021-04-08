import React from "react";
import "./CheckoutProduct.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  function removeFromBasket() {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  }
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct-Image" src={image}></img>

      <div className="checkoutProduct-Info">
        <p className="checkoutProduct-Title">{title}</p>
        <p className="checkoutProduct-Price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct-Rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <StarIcon />
              </p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from Chart</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
