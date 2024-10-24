const initialValue = {
    data:null,
}

const userReducer = (state=initialValue,{type,payload}) =>{
    console.log(type);
    switch(type){
        case 'userData':
             return{
                ...state,
                data:payload.data,
            }
        default:
            return state; 
    }
}

export {userReducer};