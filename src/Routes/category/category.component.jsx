import "./category.styles.scss";
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import React from "react";

import ProductCard from "../../components/product-card/product-card.component";
import { Fragment } from "react";
import { useSelector } from 'react-redux';
import { selectCategoriesMap, selectIsCategoriesLoading } from '../../store /categories/categories.selector';
import Spinner from "../../components/spinner/spinner.component";

const Category = () => {
  // accessing category from the url or the route inside route/shop.component.jsx
  const { category } = useParams();
  const  categoriesMap  = useSelector(selectCategoriesMap);
  const isCategoriesLoading = useSelector(selectIsCategoriesLoading);
  const [products, setProducts] = useState([]);

  // use effect to change products whenever category or category map changes
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);


  const CategoryComponentJSX = (<div className="category-container">
  {products &&
    products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
</div>)

  return (
    <Fragment>
        <h2 className="category-title">{category.toUpperCase()}</h2>
        {isCategoriesLoading ? <Spinner/> : CategoryComponentJSX}
    </Fragment>
  );
};

export default Category;
