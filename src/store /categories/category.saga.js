import { call, all, put, takeEvery, takeLatest } from "redux-saga/effects";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utility";
import {
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from "./categories.action";
import { CATEGORIES_ACTION_TYPES } from "./categories.action.types";

export function* fetchCategoriesAsyncSaga() {
  try {
    //  we use yield to pause the generator function
    // instead of calling functions directly we use call method of redux-saga
    const categoriesArray = yield call(getCategoriesAndDocuments, "categories");
    //instead of dispatch we use put from redux-saga
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoriesFailed(error));
  }
}

export function* onFetchCategories() {
  // cancel previous sagas and take latest one
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsyncSaga
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
