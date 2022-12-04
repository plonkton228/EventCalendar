import { Actions, AllActionTemplate, StateTemplate, User } from "../../types/UserTypes";


export const initialState : StateTemplate = {
      IsAuth : false,
      user :  {} as User,
      errors: '',
      access_token:''
}



const userReducer =(state = initialState, action : AllActionTemplate) : StateTemplate => {
    switch (action.type) {
        case Actions.AUTH_USER:
            
            return {...state , IsAuth: true, user : action.payload}


        case Actions.SET_ERRORS:
            
                return {...state , errors : action.payload}
        case Actions.LOGOUT_USER:
            
                return {...state , IsAuth: false}
    
        default:
            return state
    }
}
export default userReducer;