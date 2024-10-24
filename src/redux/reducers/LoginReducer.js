const initialValue = {
  login: null,
  signup: null,
};

const LoginReducer = (state = initialValue, { type, payload }) => {
    // console.log(payload);
  switch (type) {
    case "logindata":
      return {
        ...state,
        login: payload,
      };
    case "signupUser":
      return {
        ...state,
        signup: payload,
      };
    default:
      return state;
  }
};

export { LoginReducer };
