import { Fragment } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { useSelector } from "react-redux";

const CategoriesPreview = () => {
  const categoriesMap = useSelector((state) => state.categories.categoriesMap);

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
