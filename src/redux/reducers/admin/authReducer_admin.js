const initialState = {
    userInfo: null,
  };
  
  const authReducer_admin = (state = initialState, action) => {
    switch (action.type) {
      case "STORE_ADMIN_PROFILE":
        return {
          ...state,
          userInfo: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default authReducer_admin;
  