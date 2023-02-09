import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

export const selectCat = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categoriesArray
);

export const selectCategories = createSelector([selectCat], (categoriesArray) => {
  if (categoriesArray) {
    return categoriesArray.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  } else {
    return {};
  }
});




/**

export const selectCategories = (state) => {
  const categoriesArray = state.categories.categoriesArray;
  console.log("From Categories Selector : "  ,categoriesArray)
  if (categoriesArray) {
    console.log("Categories Selector is Not Empty")
    return categoriesArray.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  } else {
    console.log("Categories Selector is Empty")
    return {};
  }
};

*/