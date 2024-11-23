import axios from "axios";

// Action to fetch products without token
export const FirstAction = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "http://localhost:8000/api/v1/WithoutTokenProduct"
    );
    //console.log("response", response);

    dispatch({
      type: "userData",
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
    const response = await axios.post(
      "http://localhost:5000/api/v1/admin/login",
      {
        email: payload.email,
        password: payload.password,
      }
    );

    dispatch({
      type: "logindata",
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
    const response = await axios.post(
      "http://localhost:8000/api/v1/vendor/signup",
      {
        name: payload.name,
        email: payload.email,
        companyName: payload.company,
        phoneNumber: payload.phone,
        password: payload.password,
      }
    );

    dispatch({
      type: "signupUser",
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
    const response = await axios.get(
      `http://localhost:5000/api/v1/admin/forget-password?email=${payload}`
    );

    return response.data;
  } catch (error) {
    console.error("Error resetting password", error);
    throw error;
  }
};

export const verifyOtp = (payload) => async (dispatch) => {
  try {
    const email = localStorage.getItem("email");
    const response = await axios.get(
      `http://localhost:5000/api/v1/admin/otp-validation?otp=${payload}&email=${email}`
    );

    return response.data; // Make sure your API returns the expected response
  } catch (error) {
    console.error("Error verifying OTP:", error);
    throw error;
  }
};

export const changePassword = (payload) => async (dispatch) => {
  const Data1 = {
    otp: localStorage.getItem("otp"),
    email: localStorage.getItem("email"),
    newPassword: payload,
  };

  // console.log(Data1)
  try {
    const response = await axios.post(
      "http://localhost:5000/api/v1/admin/adminsetEmailPassword",
      Data1
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};
//social madia
export const fetchSocialMedia = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("accessToken"); // Retrieve the token from local storage
    const response = await axios.get("http://localhost:5000/api/v1/social", {
      headers: {
        Authorization: `Bearer ${token}`, // Include the token in the Authorization header
      },
    });

    //console.log("Fetched Social Media Data:", response.data); // Log the fetched data

    dispatch({
      type: "FETCH_SOCIAL_MEDIA",
      payload: response.data, // Ensure this returns an array of platforms
    });
    // console.log(" fetch data:",response.data);
  } catch (error) {
    console.error("Error fetching social media platforms:", error);
  }
};
export const uploadFile = (file) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const token = localStorage.getItem("accessToken");

    const response = await axios.post("http://localhost:5000/api/v1/file/uploadfile", formData, {
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" },
    });

    dispatch({ type: "UPLOAD_FILE_SUCCESS", payload: response.data });

    // Check the actual structure of response.data to confirm it contains filePath
    return response.data; // Make sure this contains filePath
  } catch (error) {
    console.error("Error uploading file:", error.response ? error.response.data : error);
    dispatch({ type: "UPLOAD_FILE_FAILURE", error });
    throw error;
  }
};




export const addSocialMedia = (platformData) => async (dispatch) => {
  console.log("Platform Dataddd:", platformData);

  try {
    const token = localStorage.getItem("accessToken");

    // Create FormData to handle file upload
    const formData = new FormData();
    formData.append("iconFile", platformData.iconFile);
    formData.append("socialmedianame", platformData.socialmedianame);

    const response = await axios.post(
      "http://localhost:5000/api/v1/social",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    dispatch({ type: "ADD_SOCIAL_MEDIA", payload: response.data });
  } catch (error) {
    console.error("Error adding social media platform:", error.response ? error.response.data : error);
    dispatch({ type: "ADD_SOCIAL_MEDIA_FAILURE", error });
  }
};




export const deleteSocialMedia = (id) => async (dispatch) => {
  console.log("Media delete:", id);
  try {
    const token = localStorage.getItem("accessToken");

    // Send the ID as a query parameter
    await axios.delete(`http://localhost:5000/api/v1/social?id=${id}`, {
      headers: { Authorization: `Bearer ${token}` },
      // params: { id }, // Add the id as a query parameter
    });

    dispatch({
      type: "DELETE_SOCIAL_MEDIA",
      payload: id,
    });
  } catch (error) {
    console.error(
      "Error deleting social media platform:",
      error.response ? error.response.data : error
    );
  }
};
