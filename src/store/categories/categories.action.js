
import { createAction } from '../../utils/reducer/reducer.utils';
import { CATEGORIES_ACTION_TYPES } from './categories.action.types';


export const setCategoriesMap = (categoriesMap) => {

   return createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP , categoriesMap);

}