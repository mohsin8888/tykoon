import axios from 'axios';

// Action to fetch products without token
export const FirstAction = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:8000/api/v1/WithoutTokenProduct');
    //console.log("response", response);
             
    dispatch({
      type: 'userData',
      payload: response.data,
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
};

// Action to log in a user
export const loginUser = (payload) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:8000/api/v1/vendor/login', {
      email: payload.email,
      password: payload.password
    });

    dispatch({
      type: 'logindata',
      payload: response.data,
    });

    return response.data;
  } catch (error) {
    console.error("Error logging in", error);
  }
};

// Action to sign up a user
export const SignupUser = (payload) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:8000/api/v1/vendor/signup', {
      name: payload.name,
      email: payload.email,
      companyName: payload.company,
      phoneNumber: payload.phone,
      password: payload.password
    });

    dispatch({
      type: 'signupUser',
      payload: response.data,
    });

    return response.data;
  } catch (error) {
    console.error("Error signing up", error);
  }
};

// Action to reset password
export const resetPassword = (payload) => async (dispatch) => {
 // console.log("/email---",payload);
  try {
    const response = await axios.get(`http://localhost:8000/api/v1/vendor/forgetPassword?email=${payload}`)
     
    return response.data;
  } catch (error) {
    console.error("Error resetting password", error); 
    throw error;
  }
};

export const verifyOtp = (payload) => async (dispatch) => {
 // console.log('/otp ---', payload);
  try {
    const encryptOpts = localStorage.getItem("encryptOpts");
    const response = await axios.get(`http://localhost:8000/api/v1/vendor/otp-validation?otp=${payload}&encryptOpts=${encryptOpts}`);
    
    return response.data;
  } catch (error) {
    
    throw error;
  }
};
export const changePassword = (payload) => async (dispatch) => {
  const Data1 = {
    otp : localStorage.getItem("otp"),
    encryptOpts : localStorage.getItem("encryptOpts"),
    email : localStorage.getItem("email"),
     newPassword : payload,
    
  }
   

 // console.log(Data1)
  try {
    const response = await axios.post('http://localhost:8000/api/v1/vendor/set-password',Data1);
   
    return response.data;
  } catch (error) {
    
    throw error;
  }
};
