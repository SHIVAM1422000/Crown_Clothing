import { Fragment } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import {
  selectCategoriesMap,
  selectIsCategoriesLoading,
} from "../../store /categories/categories.selector";
import { useSelector } from "react-redux";
import Spinner from "../../components/spinner/spinner.component";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isCategoriesLoading = useSelector(selectIsCategoriesLoading);
  const CategoriesPreviewJSX = Object.keys(categoriesMap).map((title) => (
    <CategoryPreview
      key={title}
      title={title}
      products={categoriesMap[title]}
    />
  ));

  return (
    <Fragment>
      {isCategoriesLoading ? <Spinner /> : CategoriesPreviewJSX}
    </Fragment>
  );
};

export default CategoriesPreview;
