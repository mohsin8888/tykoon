// Redux Reducers/socialMediaReducer.js
const initialState = {
    platforms: [], // Initialize with an empty array
  };
  
  export default function socialMediaReducer(state = initialState, action) {
    switch (action.type) {
      case 'FETCH_SOCIAL_MEDIA':
       // console.log('Fetched Platforms:', action.payload); // Debugging line
        return { ...state, platforms: action.payload }; // Ensure payload is an array
        case "UPLOAD_FILE_SUCCESS":
          return { ...state, uploadStatus: "success" };
        case "UPLOAD_FILE_FAILURE":
          return { ...state, uploadStatus: "failure", error: action.error };
        case 'ADD_SOCIAL_MEDIA':
      return {
        ...state,
        platforms: [...state.platforms, action.payload],
      };
       case 'DELETE_SOCIAL_MEDIA':
      return {
        ...state,
        platforms: state.platforms.filter(platform => platform.id !== action.payload),
      };
        
      default:
        return state;
    }
  }
  
  