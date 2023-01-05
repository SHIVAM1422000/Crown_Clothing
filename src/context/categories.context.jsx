import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utility.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  
  
  useEffect(() => {
    
    const getcategoryMap = async() =>{
      const categoryMap = await getCategoriesAndDocuments("categories");
      setCategoriesMap(categoryMap);
    } 
    
    getcategoryMap();
    
  }, []);
  
  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};



/*This effect was called to add data into firebase
keeping it just for reference* 



useEffect(()=>{
  addCollectionAndDocuments('categories', productsData);
  },[])
**/