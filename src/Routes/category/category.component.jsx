import "./category.styles.scss";
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import React from "react";

import ProductCard from "../../components/product-card/product-card.component";
import { Fragment } from "react";
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store /categories/categories.selector';

const Category = () => {
  // accessing category from the url or the route inside route/shop.component.jsx
  const { category } = useParams();
  const  categoriesMap  = useSelector(selectCategoriesMap)
  const [products, setProducts] = useState([]);

  // use effect to change products whenever category or category map changes
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
        <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
