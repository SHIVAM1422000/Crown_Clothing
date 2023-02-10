import { createSelector } from 'reselect';

export const selectCategoriesMap = (state) => state.categories.categories.reduce((acc, category) => {
    const { title, items } = category
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});


  export const selectIsCategoriesLoading = (state) => state.categories.isLoading