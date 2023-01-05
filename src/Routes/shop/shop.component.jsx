import "./shop.styles.scss";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import { Routes, Route } from "react-router-dom";
import Category from '../../Routes/category/category.component'

const Shop = () => {


  // whenever some one passes shop/jacket or shop/hat we can access it using useParams hook
  return (
        <Routes>
          <Route index element={<CategoriesPreview/>}></Route>  
          <Route path=":category" element={<Category/>}></Route>
        </Routes>
  );
};

export default Shop;
