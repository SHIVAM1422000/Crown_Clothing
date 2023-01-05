import "./product-card.styles.scss";
import Button from "../buttons/button.component";
import { CardContext } from "../../context/card.context";
import { useContext } from 'react';


const ProductCard = ({ product }) => {
  
  const {addItemsToCart} = useContext(CardContext);
  const { name, price, imageUrl  } = product;
  
  const onClickHandler = () => {
      addItemsToCart(product);
  }
  
  
  
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={onClickHandler}>Add to card</Button>
    </div>
  );
};

export default ProductCard;