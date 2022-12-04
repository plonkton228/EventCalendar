import axios from "axios"
import { Dispatch } from "redux"
import { ActionsEvent, AllActionsEvents, EventTemplate, Guests} from "../../types/CalendarTypes"
import { User } from "../../types/UserTypes"

export const createEvents  = (event : EventTemplate) => {
      return async (dispatch : Dispatch<AllActionsEvents>)=> {
            try {
             const respone = await axios.post("http://127.0.0.1:8000/api/events/create", {description : event.description, author : event.author, data : event.data, guest : event.guest});
    
                 
            } 
            catch (error) {
                  alert(error)
            }
          
      }
}