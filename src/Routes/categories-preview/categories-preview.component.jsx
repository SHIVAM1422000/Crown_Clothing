import { Fragment } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/categories.selector";

const CategoriesPreview = () => {
  // const categoriesMap = useSelector(selectCategories);
  // const cm = useSelector((state) => {
  //   return state.categories.categoriesArray
  // })

  
  const categoriesMap = useSelector(selectCategories);

  return (
    <Fragment>
      {categoriesMap &&
        Object.keys(categoriesMap).map((title) => (
          <CategoryPreview
            key={title}
            title={title}
            products={categoriesMap[title]}
          />
        ))}
    </Fragment>
  );
};

export default CategoriesPreview;
