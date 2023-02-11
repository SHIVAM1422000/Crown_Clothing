import "./shop.styles.scss";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import { Routes, Route } from "react-router-dom";
import Category from "../../Routes/category/category.component";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategoriesAsyncThunk } from "../../store /categories/categories.action";
import { fetchCategoriesAsyncSaga } from "../../store /categories/category.saga";
import { fetchCategoriesStart } from "../../store /categories/categories.action";
const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchCategoriesAsyncThunk());
    dispatch(fetchCategoriesStart())
  }, []);

  // whenever some one passes shop/jacket or shop/hat we can access it using useParams hook
  return (
    <Routes>
      <Route index element={<CategoriesPreview />}></Route>
      <Route path=":category" element={<Category />}></Route>
    </Routes>
  );
};

export default Shop;
