import "./product-card.styles.scss";
import Button from "../buttons/button.component";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectCartItems} from "../../store /cart/cart.selector";
import { addItemsToCartActionCreator } from "../../store /cart/cart.action";


const ProductCard = ({ product }) => {
  
  const { name, price, imageUrl  } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems)

  const onClickHandler = () => dispatch(addItemsToCartActionCreator(cartItems, product))
  
  
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