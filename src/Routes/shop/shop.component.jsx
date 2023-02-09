import "./shop.styles.scss";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import { Routes, Route } from "react-router-dom";
import Category from '../../Routes/category/category.component'
import { useEffect } from "react";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utility";
import { setCategoriesMap } from "../../store /categories/categories.action";
import { useDispatch } from 'react-redux';

const Shop = () => {

  const dispatch = useDispatch() 

  useEffect(() => {
    
    const getcategoryMap = async() =>{
      const categoryMap = await getCategoriesAndDocuments("categories");
      dispatch(setCategoriesMap(categoryMap))
    } 
    
    getcategoryMap();
    
  }, []);

  // whenever some one passes shop/jacket or shop/hat we can access it using useParams hook
  return (
        <Routes>
          <Route index element={<CategoriesPreview/>}></Route>  
          <Route path=":category" element={<Category/>}></Route>
        </Routes>
  );
};

export default Shop;
