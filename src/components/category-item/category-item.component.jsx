import "./category-item.styles.scss";

import React from "react";

// we have passed category which is prop as an object to the functional component
// we can't pass and access thing like we did in class based components
const CategoryItem = ({ category }) => {
 const { id, title, imageUrl } = category;

  return (
    <>
      <div key={id} className="category-container">
        <div
          className="background-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
    </>
  );
};

export default CategoryItem;

/**



*/
