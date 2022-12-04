import axios from "axios"
import Cookies from "js-cookie"
import { Dispatch } from "redux"
import { Actions, AllActionTemplate, StateTemplate, User } from "../../../types/UserTypes"

export const LogOutUser = ()=> {
    return async (dispatch : Dispatch<AllActionTemplate>) => {

        dispatch({type : Actions.LOGOUT_USER , payload: {} as User});
        Cookies.remove("token")
            

    }
}