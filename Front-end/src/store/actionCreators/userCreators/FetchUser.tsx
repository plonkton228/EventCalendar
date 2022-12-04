import axios from "axios"
import Cookies from "js-cookie"
import { Dispatch } from "redux"
import { Actions, AllActionTemplate, StateTemplate, User } from "../../../types/UserTypes"

export const FetchUser = (email : string, password : string)=> {
    return async (dispatch : Dispatch<AllActionTemplate>) => {
            try {
                  const response = await axios.post<StateTemplate>("http://localhost:8000/api/auth/login", {email : email, password: password});
                  dispatch({type : Actions.AUTH_USER, payload : response.data.user});
                  Cookies.set("token",response.data.access_token )
            }
            catch(e)
            {
                dispatch({type : Actions.SET_ERRORS, payload: "Неверное имя пользователя или пароль!"})
            }
    }
}