/**
 
creates an action object to be used by the dispatch function inside reducer
 
{
  
    type : "TOGGLE_BUTTON",
    payload : false
    
}

*/


export const createAction = (type, payload) => ({type , payload})