import { useSelector } from 'react-redux';

/**

export const selectCategories = (state) => 
  state.categories.categoriesArray
  .reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});


 */

// export const selectCategories = (categoriesArray) => {
//   // const catArray = state.categories.categoriesArray
//   // console.log("Selector Inside : ",categoriesArray)
//   if (!categoriesArray) return [];
//   return categoriesArray.reduce((accumulator, category) => {
//     const { title, items } = category;
//     accumulator[title] = items;
//     return accumulator;
//   }, {});
// };

/**
 
.reduce((acc, category) => {
  const { title, items } = category;
  acc[title.toLowerCase()] = items;
  console.log("acc" ,acc);
  return acc;
}, {});

*/





// export const selectCategories = () => {
//   const categoriesArray = useSelector((state) => state.categories.categoriesArray)
//   if (!categoriesArray) return [];
//   return categoriesArray.reduce((accumulator, category) => {
//     const { title, items } = category;
//     accumulator[title] = items;
//     return accumulator;
//   }, {});
// };



export const selectCategories = (state) => {
  const categoriesArray = state.categories.categoriesArray
  if (!categoriesArray) return;
  return categoriesArray.reduce((accumulator, category) => {
    const { title, items } = category;
    accumulator[title] = items;
    return accumulator;
  }, {});
};