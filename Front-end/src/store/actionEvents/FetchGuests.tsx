import axios from "axios"
import { Dispatch } from "redux"
import { ActionsEvent, AllActionsEvents} from "../../types/CalendarTypes"

export const FetchGuests  = () => {
      return async (dispatch : Dispatch<AllActionsEvents>)=> {
            try {
                  const response = await axios.get("http://127.0.0.1:8000/api/users");
                  dispatch({type : ActionsEvent.SET_GUESTS, payload : response.data}) 
            } 
            catch (error) {
                  alert(error)
            }
          
      }
}