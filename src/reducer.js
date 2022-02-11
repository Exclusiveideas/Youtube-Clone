// State
export const initialState = {
    query: ''
  };
  
  
  // Reducer
  const reducer = (state, action) => {
    switch (action.type) {
      case "ENTER_SEARCH":
        return {
          ...state,
          query: action.query,
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;