import axios from "axios"
import { Dispatch } from "redux"
import { ActionsEvent, AllActionsEvents, EventTemplate, Guests} from "../../types/CalendarTypes"
import { User } from "../../types/UserTypes"

export const FetchEvents  = (name : string) => {
      return async (dispatch : Dispatch<AllActionsEvents>)=> {
            try {
                  const response = await axios.get("http://127.0.0.1:8000/api/events");
                  
                  const filterEvents = response.data.filter((e : EventTemplate)=> e.author === name || e.guest === name )
                  dispatch({type : ActionsEvent.SET_EVENTS, payload : filterEvents}) 
            } 
            catch (error) {
                  alert(error)
            }
          
      }
}