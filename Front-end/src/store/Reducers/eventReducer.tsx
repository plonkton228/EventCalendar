import { ActionsEvent, AllActionsEvents, EventTemplate, StateEventTemplate } from "../../types/CalendarTypes";


const initialState : StateEventTemplate = {
    events : [] ,
    guests : [],
    loading : false
}

const eventReducer = (state = initialState, action : AllActionsEvents) : StateEventTemplate=> {
   switch (action.type) {
    case ActionsEvent.SET_EVENTS:
        
        return {...state, events : action.payload}
    case ActionsEvent.SET_GUESTS:
        
        return {...state, guests : action.payload}
    case ActionsEvent.SET_LOADING:
        
        return {...state, loading : true, events: []}
   
    case ActionsEvent.EDIT_EVENT:
        
        return {guests : state.guests , loading : state.loading, events : action.payload}
    case ActionsEvent.DELETE_EVENT:
        return {guests : state.guests , loading : false, events : action.payload}
        default:
       return state
   }
}
export default eventReducer