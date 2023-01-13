
import { createAction } from '../../utils/reducer/reducer.utils';
import { CATEGORIES_ACTION_TYPES } from './categories.action.types';


export const setCategories = (categoriesArray) => {

   const action = createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES , categoriesArray);
   return action

}