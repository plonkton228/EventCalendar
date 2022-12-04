import axios from "axios"
import { Dispatch } from "redux"
import { ActionsEvent, AllActionsEvents } from "../../types/CalendarTypes"

export const DeleteEvent = (id : number)=> {
    return async (dispatch : Dispatch<AllActionsEvents>)=> {
        try {
          dispatch({type : ActionsEvent.SET_LOADING});
          const response =   await axios.delete(`http://127.0.0.1:8000/api/events/${id}`)
          dispatch({type : ActionsEvent.DELETE_EVENT, payload : response.data})
        } catch (error) {
          alert(error)
       }
         
    }
}