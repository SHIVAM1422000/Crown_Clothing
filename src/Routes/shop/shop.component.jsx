import "./shop.styles.scss";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../../Routes/category/category.component";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utility";
import { useDispatch } from "react-redux";
import { setCategories } from '../../store/categories/categories.action';


const Shop = () => {

  const dispatch = useDispatch();
  // dispatch is never changing 
  useEffect(() => {

    const getcategoryMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments("categories");
      dispatch(setCategories(categoriesArray))
    };

    getcategoryMap();
  },[]);

  // whenever some one passes shop/jacket or shop/hat we can access it using useParams hook
  return (
    <Routes>
      <Route index element={<CategoriesPreview />}></Route>
      <Route path=":category" element={<Category />}></Route>
    </Routes>
  );
};

export default Shop;
