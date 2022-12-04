import axios from "axios"
import { Dispatch } from "redux"
import { ActionsEvent, AllActionsEvents, EventTemplate } from "../../types/CalendarTypes"

export const EditEvent = (guest : string, description : string, data : string, id : number)=> {
  return async (dispatch : Dispatch<AllActionsEvents>)=> {
    
    try{
       
        const response =  await axios.post(`http://127.0.0.1:8000/api/events/${id}/edit`, {guest : guest, description : description, data : data, id : id});
        dispatch({type: ActionsEvent.EDIT_EVENT, payload : response.data});
    }
    catch (error){
    
      alert(error)
    }
         

  }
}